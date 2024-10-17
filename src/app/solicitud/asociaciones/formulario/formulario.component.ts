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


  navr(id: number) {
    switch (id) {
      case 0:

        break;
      case 1:
        console.log("It is a Monday.");
        break;
      case 2:
        console.log("It is a Tuesday.");
        break;
      case 3:
        this.router.navigate(['/Detalle/' + this.solicitudId])
        break;

      default:
        console.log("No such day exists!");
        break;
    }
  }

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

  // solicitud_Numero!: number;
  //   asociacion_Registro_Patronal!: number;
  //   profesional_Asociacion_Codigo!: string;
  //   documento_Codigo!: string;


  createFormActive() {
    this.registroAsociaciones = this.fb.group({
      asociacion_Numero: ['', Validators.required],
      profesional_Asociacion_Codigo: ['', Validators.required],
      documento_adjunto: ['', Validators.required],
    })
  }


  cancelar() {

    this.router.navigate(['/NupreInformacionBasicaComponent']);
  }


  ObtenerListadoAsociaciones() {

    return this.servicio.obtenerListadoAsociaciones().subscribe((res: ProfesionalesAsociacionesTipoCata[]) => {
      this.listaAsociaciones = res;
      console.log(res);
    });

  }

  listadoEspecialidades: [] = [];
  selected!: number;
  form!: FormGroup;





  // listadoEspecialidades: any[] = [];



  obtenerListadoProfesiones(number: number) {

  }

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



    // for (var i = 0; i < files.length; i++) {
    //   console.log(this.files);
    //   this.files.push(files[i]);
    // }

  }

  obtenerParametros() {
    let param = new CrearProfesionalesAsociaciones_DTO();
    param.solicitud_Numero = this.solicitudId;

    param.asociacion_Codigo = this.registroAsociaciones.get('asociacion_Numero')?.value
    param.profesional_Asociacion_Codigo = this.registroAsociaciones.get('profesional_Asociacion_Codigo')?.value
    param.Documento = this.certificado;
    param.asociacion_Registro_Patronal = this.user.UsuarioRegistroPatronal;
    return param;
  }

  guardarSolicitud() {
    let param = this.obtenerParametros();

    if (this.registroAsociaciones.invalid) {
      this.toastr.warning('No puedo enviar una solicitud sin registrar el detalle de la asociacion correspondiente', 'Advertencia');
      return;
    }
    this.servicio.guardarAsociacion(param).subscribe(() => {
      this.router.navigate(['/Detalle/' + this.solicitudId])
      this.refreshPage();
    }, error => console.error(error));

  }
  refreshPage(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}