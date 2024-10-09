import { Component } from '@angular/core';
import { Historico } from '../../Models/SolicitudActividades';
import { Motivo_Rechazo } from '../../Models/Solicitudes_ViewModelt';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Profesional_Listado_titulacionDTO } from '../../Models/Nupre/Profesional_titulacion';
import { localidades } from '../../Models/Nupre/localidades';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',

})
export class LocalidadesComponent {

  public solicitudId!: number;
  public loading = true;
  public Registrado = true;
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

  Nuevasolicitud(solicitud_numero: number) {

  }


}
