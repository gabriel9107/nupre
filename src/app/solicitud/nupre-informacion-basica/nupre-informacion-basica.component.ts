import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Motivo_Rechazo, User } from '../../Models/Solicitudes_ViewModelt';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { NupreService } from '../../Servicio/nupre.service';
import { Solicitud_basic_Informacion_DTO, Solicitud_Medico_Detalle_DTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Historico, Solicitudes_Actividades_Progress } from '../../Models/SolicitudActividades';
import { ProgressBarService } from '../../../Providers/progress-bar.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nupre-informacion-basica',
  templateUrl: './nupre-informacion-basica.component.html',

})
export class NupreInformacionBasicaComponent implements OnInit {

  public detalleSolicitud!: Solicitud_Medico_Detalle_DTO;

  public solicitudId!: number;
  public loading = true;
  public estado_Numero!: number;
  public estado_Descripcion!: string;
  public solicitud_Fecha!: string;
  public checkSometidad = false;
  public historicos !: [Historico[]];


  profesionalNombreCompleto!: string;


  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService,
      private toastr: ToastrService

    ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;
    this.getDetalleSolicitud();

  }

  ngOnInit(): void {

  }
  public listSolicitud() {
    this.router.navigate(['/NUPRE']);
  }

  // get ProgressBarPorcent(): string {
  //   return `width: ${this.actividades[0]?.porcentaje}%`;
  // }
  // get actividadesRealizadas(): number {
  //   return this.progressBarService.actividadesRealizadas;
  // }

  // get actividades(): Solicitudes_Actividades_Progress[] {
  //   return this.progressBarService.Actividades_Progress;
  // }

  public getDetalleSolicitud() {

    this.servicio.obtenerDetalelSolicitudbyId(this.solicitudId).subscribe((resp: Solicitud_Medico_Detalle_DTO) => {
      this.detalleSolicitud = resp;
      console.log(this.detalleSolicitud.profesionalNombreCompleto);
      this.profesionalNombreCompleto = resp.profesionalNombreCompleto!;

      this.loading = false;
    });


    // this.servicio.obtenerDetalelSolicitudbyId(this.solicitudId).subscribe(resp => {

    // });


  }
  //   this.loading = false;
  //   this.servicio.SolicitudDetalle(this.solicitudId).subscribe(resp =>
  //     this.listadoLicencias = resp)

  // }
  // }
}
