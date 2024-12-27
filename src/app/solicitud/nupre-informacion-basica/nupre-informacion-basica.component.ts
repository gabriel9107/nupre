import { Component, EventEmitter, Input, OnInit, Output, input, signal } from '@angular/core';
import { Motivo_Rechazo, User } from '../../Models/Solicitudes_ViewModelt';
import { ActivatedRoute, Router, Params, RoutesRecognized } from "@angular/router";

import { NupreService } from '../../Servicio/nupre.service';
import { Solicitud_basic_Informacion_DTO, Solicitud_Medico_Detalle_DTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Historico, Solicitudes_Actividades_Progress } from '../../Models/SolicitudActividades';

import { ToastrService } from 'ngx-toastr';
import { ProfesionalesAsociaciones } from '../../Models/asosiaciones';
import { Profesional_Listado_titulacionDTO } from '../../Models/Nupre/Profesional_titulacion';
import { localidades } from '../../Models/Nupre/localidades';
import { filter, pairwise } from 'rxjs';
import $ from 'jquery';






@Component({
  selector: 'app-nupre-informacion-basica',
  templateUrl: './nupre-informacion-basica.component.html',

})
export class NupreInformacionBasicaComponent implements OnInit {

  public detalleSolicitud!: Solicitud_Medico_Detalle_DTO;


  public listadoAsociaciones: ProfesionalesAsociaciones[] = [];
  public listadoTitulo: Profesional_Listado_titulacionDTO[] = [];
  public listadoLocalides: localidades[] = [];



  public solicitudId!: number;
  public loading = true;
  public estado_Numero!: number;
  public estado_Descripcion!: string;
  public solicitud_Fecha!: string;
  public checkSometidad = false;
  public checkasociaciones = false;
  public checkLocalidades = false;
  public checktitulacion = false;
  public historicos !: [Historico[]];


  profesionalNombreCompleto!: string;



  public titulosCargados: boolean = false;
  public asociacionesCargadas: boolean = false;

  get actividadesRealizadas(): number {
    return this.servicio.actividadesRealizadas;
  }


  get ProgressBarPorcent(): string {
    return `width: ${this.actividades[0]?.porcentaje}%`;
  }

  get actividades(): Solicitudes_Actividades_Progress[] {

    return this.servicio.Actividades_Progress;

  }
  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService,
      private toastr: ToastrService,

    ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;
    this.getDetalleSolicitud();

  }

  ngOnInit(): void {
    this.servicio.ReadActividadProgressBar(this.solicitudId);
    this.getDetalleSolicitud();



  }
  public listSolicitud() {
    this.router.navigate(['/NUPRE']);
  }



  redireccionar() {
    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        if (events[0].urlAfterRedirects.includes('/RegistrarTitulo')) {
          console.log('desde titulos')
          jQuery(function () {
            setTimeout(() => {
              $('#tab_regLicen').trigger('click');
              $('#affiData').removeClass('is-active');
            }, 150);
          });
        }
        if (events[0].urlAfterRedirects.includes('/RegistrarAsociacion')) {
          jQuery(function () {
            console.log('desde asociacion')
            setTimeout(() => {
              $('#affiData').removeClass('is-active');
              $('#tab_Asociaciones').trigger('click');
            }, 125);
          });
        }
        if (events[0].urlAfterRedirects.includes('/registrarlocalidades')) {
          jQuery(function () {
            setTimeout(() => {
              console.log('desde localidades')
              $("#Asociaciones").removeClass("is-active");
              $("#affiData").removeClass("is-active");
              $('#tab_Localidades').trigger('click');
            }, 500);
          });
        }
      });

  }







  public getDetalleSolicitud() {

    this.servicio.obtenerDetalelSolicitudbyId(this.solicitudId)
      .subscribe((resp: Solicitud_Medico_Detalle_DTO) => {

        this.detalleSolicitud = resp;
        this.profesionalNombreCompleto = resp.profesional_Nombre_Completo!;
        this.loading = false;
        this.estado_Numero = resp.solicitud_Estado_Numero!;


        if (resp.solicitud_Estado_Numero
          != 1)
          this.checkSometidad = true;
        else
          this.checkSometidad = false;


        this.getListadoTitulos(this.solicitudId);
        this.getListadoAsociacion(this.solicitudId);
        this.getListadoLocalidades(this.solicitudId);

      },
        error => {
          this.toastr.error(error.error, 'Información');
        });
    this.redireccionar();
  }

  public getListadoLocalidades(solicitud_numero: number) {
    this.servicio.obtenerLocalides(solicitud_numero).subscribe((resp: localidades[]) => {
      this.listadoLocalides = resp;
      this.checkLocalidades = this.listadoLocalides?.length >= 1;
    })

  }
  public getListadoTitulos(solicitudId: number) {

    this.servicio.listadoTitulacionPorSolicitud(solicitudId).subscribe((res: Profesional_Listado_titulacionDTO[]) => {
      this.listadoTitulo = res;
      this.titulosCargados = true;

      this.checktitulacion = this.listadoTitulo?.length > 0;
    });
  }


  public getListadoAsociacion(solicitudId: number) {
    this.servicio.obtenerListadoAsociacionesBySolicitudId(solicitudId).subscribe((res: ProfesionalesAsociaciones[]) => {
      this.listadoAsociaciones = res;
      this.asociacionesCargadas = true;

      this.checkasociaciones = this.listadoAsociaciones?.length > 0;


    });
  }

  actividadesPorFecha() {
    this.servicio.GetHistorico(this.solicitudId).subscribe(resp => {
      this.historicos = resp
    })
  }
}
