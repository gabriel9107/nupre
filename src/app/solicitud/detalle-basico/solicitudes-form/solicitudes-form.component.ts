import { Component, Input, OnInit } from '@angular/core';
import { Especialidades } from '../../../Models/Nupre/Especialidades';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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

  public listadoDiscapacidad!: Especialidades[];
  public listLicencitTipo!: any[]
  ngOnInit(): void {
    this.buscarProfesiones()
  }

  buscarProfesiones() { }

  constructor(private fb: FormBuilder, private router: Router, private servicio: NupreService) {

  }

  guardarCambios() {
    this.router.navigate(['/NupreInformacionBasicaComponent']);
  }

  search($event: any) {

  }
  out = new EventEmitter();


  selectedCity: any;

  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];
  public getlisttipoRegistro() {
    this.listLicencitTipo = [{
      values: "N",
      licencia_Tipo_Descripcion: "Profesion"

    }, {
      values: "S",
      licencia_Tipo_Descripcion: "Especialidad"

    }]
    // this.ModalidadTipo = [{
    //   values: "A",
    //   licencia_Tipo_Descripcion: "Ambulatorio"

    // }, {
    //   values: "H",
    //   licencia_Tipo_Descripcion: "Hospitalización"

    // }, {
    //   values: "AM",
    //   licencia_Tipo_Descripcion: "Ambas"

    // }]
  }

}
