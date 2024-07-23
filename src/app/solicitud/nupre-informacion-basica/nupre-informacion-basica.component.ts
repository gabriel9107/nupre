import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Motivo_Rechazo, User } from '../../Models/Solicitudes_ViewModelt';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { NupreService } from '../../Servicio/nupre.service';
import { Listado_Solicitud_Medico } from '../../Models/Nupre/Listado_Solicitud_Medico';

@Component({
  selector: 'app-nupre-informacion-basica',
  templateUrl: './nupre-informacion-basica.component.html',

})
export class NupreInformacionBasicaComponent implements OnInit {

  public detalle = Listado_Solicitud_Medico;
  public solicitudId!: number;
  public loading = true;
  public estado_Numero!: number;
  public estado_Descripcion!: string;
  public solicitud_Fecha!: string;
  public checkSometidad = false;


  @Input() listadoLicencias!: Listado_Solicitud_Medico;

  // @Output() valueChange = EventEmitter<Listado_Solicitud_Medico> = new EventEmitter();

  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService
    ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

  }

  ngOnInit(): void {
    this.getDetalleSolicitud();
  }
  public listSolicitud() {
    this.router.navigate(['/NUPRE']);
  }
  public getDetalleSolicitud() {
    this.loading = false;
    this.servicio.SolicitudDetalle(this.solicitudId).subscribe(resp =>
      this.listadoLicencias = resp)


  }
}
