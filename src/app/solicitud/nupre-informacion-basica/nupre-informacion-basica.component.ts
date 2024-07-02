import { Component, OnInit } from '@angular/core';
import { Motivo_Rechazo, User } from '../../Models/Solicitudes_ViewModelt';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { NupreService } from '../../Servicio/nupre.service';

@Component({
  selector: 'app-nupre-informacion-basica',
  templateUrl: './nupre-informacion-basica.component.html',
  // styleUrl: './nupre-informacion-basica.component.css'
})
export class NupreInformacionBasicaComponent implements OnInit {

  public solicitudId!: number;
  public loading = true;
  public estado_Numero!: number;
  public estado_Descripcion!: string;
  public solicitud_Fecha!: string;
  public checkSometidad = false;

  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService
    ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

  }

  ngOnInit(): void {

  }
  public listSolicitud() {
    this.router.navigate(['/NUPRE']);
  }
  public getldetalleSolicitud() {
    this.loading = true;
    // this.servicio.SolicitudDetalle(this.solicitudId).subscribe(res: )


  }
}
