import { Component, Input, OnInit } from '@angular/core';
import { Especialidades, Tipo_Especialidades } from '../../../Models/Nupre/Especialidades';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, TitleStrategy, Params, ActivatedRoute } from '@angular/router';
import { NupreService } from '../../../Servicio/nupre.service';
import { NgModule, ViewChild, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StyleClassModule } from 'primeng/styleclass';
import { Profesional_titulacion } from '../../../Models/Nupre/Profesional_titulacion';
import { publishFacade } from '@angular/compiler';


@Component({
  selector: 'app-solicitudes-form',
  templateUrl: './solicitudes-form.component.html',

})
export class SolicitudesFormComponent implements OnInit {

  public solicitudId!: number;
  public titulo!: string;
  public selectedProfesion!: number;
  public listadoEspecialidades!: Especialidades[];
  public list_TipoEspecilidades!: Tipo_Especialidades[];
  public listLicencitTipo!: any[]
  public selectTipo!: number;
  public files: File[] = [];



  public showErrorMessage: boolean = false;
  public errorMessage: string = "";

  public registroTituloForm!: FormGroup;




  ngOnInit(): void {
    // this.obtenerListadoProfesiones()
    this.obtenerTipoProfesiones()
    this.createFromActive();
  }



  buscarProfesiones() { }

  constructor(public activedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private servicio: NupreService) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

  }


  createFromActive() {
    this.registroTituloForm = this.fb.group({
      tipo_Registros: ['', Validators.required],
      especialidad_Numero: ['', Validators.required],
      especialidad_Periodo: ['', Validators.required],
      documento_adjunto: ['', Validators.required],

    })
  }

  guardarCambios() {
    this.router.navigate(['/NupreInformacionBasicaComponent']);
  }


  obtenerListadoProfesiones(tipo: number) {
    return this.servicio.obtenerListadoDeProfesiones(tipo).subscribe((resp: Especialidades[]) => {
      this.listadoEspecialidades = resp
    });
  }

  obtenerTipoProfesiones() {
    return this.servicio.obtenerTipoDeprofesiones().subscribe((resp: Tipo_Especialidades[]) => {
      this.list_TipoEspecilidades = resp;

    });


  }
  uploadSingleFile(files: File[]) {
    //this.files = files;

    this.files = [];
    this.errorMessage = "";
    this.showErrorMessage = false;

    if (files === null && files === undefined)
      return;

    if (files.length > 2) {
      this.errorMessage = "No debe subir más de dos (2) archivos."
      this.showErrorMessage = true;
      this.registroTituloForm.controls['documento_adjunto'].setValue('');
      return;
    }

    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.size > 5000000) {
        this.errorMessage = "El archivo '" + file.name + "' es demasiado grande. Para poder procesarlo correctamente, asegúrate de que su tamaño sea inferior a 5 MB"
        this.showErrorMessage = true;
        this.registroTituloForm.controls['documento_adjunto'].setValue('');
        console.log('dentro');
        console.log(this.errorMessage);
        return;
      }
    }


    //console.log('files', files);

    for (var i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }
    //console.log('this.files', this.files);
  }
  search($event: any) {

  }
  out = new EventEmitter();


  public guardarSolicitud() {

    if (this.registroTituloForm.invalid) {

    }
    let param = this.obtenerParametros()

    console.log(param);

    this.servicio.guardarTitulacion(param).subscribe(() => {
      this.router.navigate(['/Detalle/' + this.solicitudId])
    }, error => console.error(error));
  }



  validarCampo(campo: string) {
    return (this.registroTituloForm.get(campo)?.touched && this.registroTituloForm.get(campo)?.errors);
  }


  regresar() {
    window.history.back();
  }

  obtenerParametros() {

    let param = new Profesional_titulacion();
    param.Solicitud_Numero = this.solicitudId;
    // param.tipoTitulacion = this.registroTituloForm.get('tipo_Registros')?.value;
    param.Especialidad_Numero = this.registroTituloForm.get('especialidad_Numero')?.value;
    param.Especialidad_Periodo = this.registroTituloForm.get('especialidad_Periodo')?.value;
    //Agregado por prueba hasta el momento 
    param.Documento_Codigo = "0101";
    // param.Disposicion_Numero = this.registroTituloForm.get('')?.value



    //Pendiente de agregar 
    // param.documento = this.files;
    return param;

  }

}
