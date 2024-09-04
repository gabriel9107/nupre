import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Motivo_Rechazo, User } from '../../Models/Solicitudes_ViewModelt';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { NupreService } from '../../Servicio/nupre.service';
import { Listado_Solicitud_Medico, Solicitud_Medico_Detalle_DTO } from '../../Models/Nupre/Listado_Solicitud_Medico';

@Component({
  selector: 'app-nupre-informacion-basica',
  templateUrl: './nupre-informacion-basica.component.html',

})
export class NupreInformacionBasicaComponent implements OnInit {

  public detalle = Solicitud_Medico_Detalle_DTO;
  public solicitudId!: number;
  public loading = true;
  public estado_Numero!: number;
  public estado_Descripcion!: string;
  public solicitud_Fecha!: string;
  public checkSometidad = false;


  @Input() detalleSolicitud!: Solicitud_Medico_Detalle_DTO;

  // @Output() valueChange = EventEmitter<Listado_Solicitud_Medico> = new EventEmitter();

  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService
    ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

    // console.log(this.solicitudId + 'Numero de solicitud ');
    // console.log(this.detalleSolicitud);

  }

  ngOnInit(): void {
    this.getDetalleSolicitud();
  }
  public listSolicitud() {
    this.router.navigate(['/NUPRE']);
  }


  public getDetalleSolicitud() {
    console.log('llamando al detalle');
    this.servicio.obtenerDetalelSolicitudbyId(this.solicitudId).subscribe(resp => {
      console.log(resp);
    });


  }
  //   this.loading = false;
  //   this.servicio.SolicitudDetalle(this.solicitudId).subscribe(resp =>
  //     this.listadoLicencias = resp)

  // }
  // }
}
