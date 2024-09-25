import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearProfesionalesAsociaciones_DTO, ProfesionalesAsociaciones, ProfesionalesAsociacionesTipoCata } from '../../../Models/asosiaciones';
import { ActivatedRoute, Router } from '@angular/router';
import { NupreService } from '../../../Servicio/nupre.service';
import { ciudadano_consulta_DTOs } from '../../../Models/Nupre/ciudadano_mastert';
import { solicitudCreacionDTO } from '../../../Models/Nupre/Listado_Solicitud_Medico';

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

  public certificado!: File
  errorMessage!: string;
  showErrorMessage: boolean = false;




  ngOnInit(): void {


    this.ObtenerListadoAsociaciones();

    this.createFormActive();
  }
  constructor
    (public activedRoute: ActivatedRoute,
      private fb: FormBuilder,
      private router: Router, private servicio: NupreService
    ) {
    let params: any = this.activedRoute.snapshot.params;
    // this.solicitudId = params.id;

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

    param.asociacion_Codigo = this.form.get('asociacion_Numero')?.value
    param.profesional_Asociacion_Codigo = this.form.get('profesional_Asociacion_Codigo')?.value
    param.Documento = this.certificado;
    return param;
  }

  guardarSolicitud() {
    if (this.form.invalid) {

    }

    let param = this.obtenerParametros();

    this.servicio.guardarAsociacion(param).subscribe(() => {
      this.router.navigate(['/Detalle/' + this.solicitudId])
    }, error => console.error(error));

  }
}