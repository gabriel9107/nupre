import { Component, OnInit } from '@angular/core';
import { Historico, Solicitudes_Actividades_Progress } from '../../Models/SolicitudActividades';
import { Motivo_Rechazo } from '../../Models/Solicitudes_ViewModelt';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Profesional_Listado_titulacionDTO } from '../../Models/Nupre/Profesional_titulacion';
import { localidades } from '../../Models/Nupre/localidades';
import { NupreService } from '../../Servicio/nupre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Route } from '@angular/router'

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',

})
export class LocalidadesComponent implements OnInit {
  get actividadesRealizadas(): number {
    return this.servicio.actividadesRealizadas;
  }


  get ProgressBarPorcent(): string {
    return `width: ${this.actividades[0]?.porcentaje}%`;
  }

  get actividades(): Solicitudes_Actividades_Progress[] {

    return this.servicio.Actividades_Progress;

  }

  ngOnInit(): void {
    this.servicio.ReadActividadProgressBar(this.solicitudId);
  }


  constructor(private router: Router,
    public activedRoute: ActivatedRoute,
    private servicio: NupreService,
    private toastr: ToastrService) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;
    this.obtenerLocalidades();
  }

  public solicitudId!: number;
  public loading = true;
  public Registrado = false;
  public RechazoParcial = true;
  public estado_Numero!: number;
  public estado_Descripcion!: string;
  public solicitud_Fecha!: string;
  public checkSometidad = false;
  public checkasociaciones = false;
  public checkLocalidades = false;
  public checktitulacion = false;
  public historicos !: [Historico[]];


  public motivos_Rechazo: Motivo_Rechazo[] = [];
  public motivos_Rechazos_Agrupados: Record<string, Motivo_Rechazo[]> = {};
  public TipoEstado!: Solicitudes_Estados[];
  public checkTitulos = false;


  public listadoDto: localidades[] = [];

  Nuevasolicitud() {
    console.log('intentando navergar')
    this.router.navigate(['/registrarlocalidades', this.solicitudId])
  }

  obtenerLocalidades() {


    this.servicio.obtenerLocalides(this.solicitudId).subscribe((resp: localidades[]) => {
      this.loading = false;

      this.listadoDto = resp;

      // if (resp.length > 1) {

      //   this.listadoDto = resp;
      //   this.Registrado == true;
      // }
    }
    )
  }

}







