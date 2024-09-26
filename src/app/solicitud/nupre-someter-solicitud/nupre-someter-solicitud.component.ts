import { Component, OnInit } from '@angular/core';
import { Profesionales_Asociacon_Trans_view } from '../../Models/asosiaciones';

@Component({
  selector: 'app-nupre-someter-solicitud',
  templateUrl: './nupre-someter-solicitud.component.html',

})
export class NupreSometerSolicitudComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  public listadoAsociacion!: Profesionales_Asociacon_Trans_view[];
  public fechasolicitud = "";
  public afiliado_Nombre_Completo = ""
  public afiliado_Celular = "";

  checkTitulos = false;
  checkAsociaciones = false;

  submitCliked = false;
  public loading = false;




  Someter() {

  }
}
