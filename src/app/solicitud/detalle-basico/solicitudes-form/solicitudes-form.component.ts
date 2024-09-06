import { Component, Input, OnInit } from '@angular/core';
import { Especialidades, Tipo_Especialidades } from '../../../Models/Nupre/Especialidades';
import { FormBuilder } from '@angular/forms';
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



  ngOnInit(): void {
    // this.obtenerListadoProfesiones()
    this.obtenerTipoProfesiones()
  }



  buscarProfesiones() { }

  constructor(private fb: FormBuilder, private router: Router, private servicio: NupreService) {

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
    console.log('llamado');
    return this.servicio.obtenerTipoDeprofesiones().subscribe((resp: Tipo_Especialidades[]) => {
      this.list_TipoEspecilidades = resp;
      console.log(resp);
    });

    console.log('lista');
    console.log(this.list_TipoEspecilidades);
  }

  search($event: any) {

  }
  out = new EventEmitter();

  public getlisttipoRegistro() {
    this.listLicencitTipo = [{
      values: "N",
      licencia_Tipo_Descripcion: "Profesion"

    }, {
      values: "S",
      licencia_Tipo_Descripcion: "Especialidad"

    }]

  }

}
