import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitudes-form',
  templateUrl: './solicitudes-form.component.html',

})
export class SolicitudesFormComponent {
  public listLicencitTipo!: any[]


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
