import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearProfesionalesAsociaciones_DTO, ProfesionalesAsociaciones, ProfesionalesAsociacionesTipoCata } from '../../../Models/asosiaciones';
import { ActivatedRoute, Router } from '@angular/router';
import { NupreService } from '../../../Servicio/nupre.service';
import { ciudadano_consulta_DTOs } from '../../../Models/Nupre/ciudadano_mastert';
import { solicitudCreacionDTO } from '../../../Models/Nupre/Listado_Solicitud_Medico';
import { User } from '../../../Models/Solicitudes_ViewModelt';
import getUserInfo from '../../../auth/JWT';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError, from } from 'rxjs';
import { ApiError } from '../../../Models/Api/apiResult';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  public solicitudId!: number;
  listaAsociaciones: ProfesionalesAsociacionesTipoCata[] = [];

  registroAsociaciones!: FormGroup;
  files: File[] = [];
  user: User = null!
  public certificado!: File
  errorMessage!: string;
  showErrorMessage: boolean = false;


  validarCampo(campo: string) {
    return (this.registroAsociaciones.get(campo)?.touched && this.registroAsociaciones.get(campo)?.errors);
  }


  ngOnInit(): void {


    this.ObtenerListadoAsociaciones();

    this.createFormActive();
    this.user = getUserInfo()
  }
  constructor
    (public activedRoute: ActivatedRoute,
      private fb: FormBuilder,
      private router: Router, private servicio: NupreService, private toastr: ToastrService
    ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

  }


  createFormActive() {
    this.registroAsociaciones = this.fb.group({
      profesional_Asociacion_Codigo: ['', Validators.required],
      asociacion_Numero_Socio: ['', Validators.required],
      documento_adjunto: ['', Validators.required],
    })
  }


  cancelar() {

    this.router.navigate(['/NupreInformacionBasicaComponent']);
  }


  ObtenerListadoAsociaciones() {

    return this.servicio.obtenerListadoAsociaciones().subscribe((res: ProfesionalesAsociacionesTipoCata[]) => {
      this.listaAsociaciones = res;

    });

  }

  listadoEspecialidades: [] = [];
  selected!: number;
  form!: FormGroup;







  uploadFile(files: File[]) {


    this.files = [];

    this.errorMessage = "";
    this.showErrorMessage = false;

    if (files === null && files === undefined)
      return;

    if (files.length > 1) {
      this.errorMessage = "No debe subir más de dos (2) archivos."
      this.showErrorMessage = true;
      this.registroAsociaciones.controls['documento_adjunto'].setValue('');
      return;
    }

    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.size > 5000000) {
        this.errorMessage = "El archivo '" + file.name + "' es demasiado grande. Para poder procesarlo correctamente, asegúrate de que su tamaño sea inferior a 5 MB"
        this.showErrorMessage = true;
        this.registroAsociaciones.controls['documento_adjunto'].setValue('');
        return;
      }
    }



    this.certificado = files[0]





  }

  obtenerParametros() {
    let param = new CrearProfesionalesAsociaciones_DTO();
    param.solicitud_Numero = this.solicitudId;
    param.asociacion_Numero_Socio = this.registroAsociaciones.get('asociacion_Numero_Socio')?.value
    param.asociacion_Registro_Patronal = this.user.UsuarioRegistroPatronal;
    param.profesional_Asociacion_Codigo = this.registroAsociaciones.get('profesional_Asociacion_Codigo')?.value
    param.Documento = this.certificado;
    param.Registro_Usuario = this.user.UsuarioCuenta;
    return param;
  }

  Cancelar() {
    window.history.back();
  }
  guardarSolicitud() {
    let param = this.obtenerParametros();

    if (this.registroAsociaciones.invalid) {
      this.toastr.warning('No puedo enviar una solicitud sin registrar el detalle de la asociación correspondiente', 'Advertencia');
      return;
    }

    this.servicio.guardarAsociacion(param).subscribe(() => {
      this.router.navigate(['/Detalle/' + this.solicitudId])
      // this.refreshPage();
    }, error => {

      console.log(error.error.message);
      this.toastr.warning(error.error.message)
    }
    )
    // this.servicio.guardarAsociacion(param).pipe(catchError(error => of([]))
    // ).subscribe(() => {

    //   this.router.navigate(['/Detalle/' + this.solicitudId])
    // });
    // this.servicio.guardarAsociacion(param).pipe(catchError(err => {

    //   // if (error.error instanceof ApiError) {
    //   //   this.toastr.warning(error.error.message)
    //   // }
    // })
    // ).subscribe(() => {
    //   this.router.navigate(['/Detalle/' + this.solicitudId])
    // })


    // this.servicio.guardarAsociacion(param).subscribe(() => {
    //   this.router.navigate(['/Detalle/' + this.solicitudId])
    //   // this.refreshPage();
    // }, error =>
    //   this.toastr.warning(error.message)
    //   // )

    //   // console.error(error));

    // )
  }
  refreshPage(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }



}