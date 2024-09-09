import { Component, Input, OnInit } from '@angular/core';
import { Especialidades, Tipo_Especialidades } from '../../../Models/Nupre/Especialidades';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { NupreService } from '../../../Servicio/nupre.service';
import { NgModule, ViewChild, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StyleClassModule } from 'primeng/styleclass';


@Component({
  selector: 'app-solicitudes-form',
  templateUrl: './solicitudes-form.component.html',

})
export class SolicitudesFormComponent implements OnInit {

  public titulo!: string;
  public selectedProfesion!: number;
  public listadoEspecialidades!: Especialidades[];
  public list_TipoEspecilidades!: Tipo_Especialidades[];
  public listLicencitTipo!: any[]
  public selectTipo!: number;


  public registroTituloForm!: FormGroup;




  ngOnInit(): void {
    // this.obtenerListadoProfesiones()
    this.obtenerTipoProfesiones()
    this.createFromActive();
  }



  buscarProfesiones() { }

  constructor(private fb: FormBuilder, private router: Router, private servicio: NupreService) {

  }


  createFromActive() {
    this.registroTituloForm = this.fb.group({
      tipo_Registros: ['', Validators.required],
      especialidad_Numero: ['', Validators.required],
      solicitud_Fecha_Otorgado: ['', Validators.required],
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

  search($event: any) {

  }
  out = new EventEmitter();


  public guardarSolicitud() {

    console.log(this.registroTituloForm.value);
  }



}
