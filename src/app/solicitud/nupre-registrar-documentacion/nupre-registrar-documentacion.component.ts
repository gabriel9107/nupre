import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { Listado_Solicitud_Medico, Profesionales_Filtro_Listado } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Profesional_Listado_titulacionDTO, Profesional_titulacion } from '../../Models/Nupre/Profesional_titulacion';
import { Motivo_Rechazo } from '../../Models/Solicitudes_ViewModelt';
import { FormGroup } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-nupre-registrar-documentacion',
  templateUrl: './nupre-registrar-documentacion.component.html',

})
export class NupreRegistrarDocumentacionComponent implements OnInit {
  public solicitudId!: number;

  public loadingDetalle = false;

  public motivos_Rechazo: Motivo_Rechazo[] = [];
  public motivos_Rechazos_Agrupados: Record<string, Motivo_Rechazo[]> = {};
  public RechazoParcial: boolean = false;
  public loading = false;
  public Registrado = false;
  public estado_Numero!: number;

  public tituloNombre!: string;
  public tituloProfesion: boolean = false;


  public listadoDto: Profesional_Listado_titulacionDTO[] = [];

  public detailLic?: Profesionales_Filtro_Listado;


  public listado: Profesional_titulacion[] = [];
  public titulo: boolean = false;




  public frmAEdit!: FormGroup;
  submitted = false;


  @Input() details!: Listado_Solicitud_Medico;

  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService
    ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

  }
  ngOnInit(): void {
    this.consultarListadoTitulacion(this.solicitudId);
  }

  consultarListadoTitulacion(solicitud_numero: number) {
    this.servicio.listadoTitulacionPorSolicitud(solicitud_numero).subscribe((resp: Profesional_Listado_titulacionDTO[]) => {
      this.listadoDto = resp;
      if (this.listadoDto[0].solicitud_Numero != 0) {
        this.tituloProfesion = true;
        this.Registrado = true;
      }

    });
  }

  EditarRegistro(registro: any) {
    this.router.navigate(['/EditarTitulo/' + registro.solicitud_Numero + '/' + this.tituloProfesion + '/' + registro.id]);
  }
  uploadFile(file: any) {

  }


  public Nuevasolicitud(solicitudId: number) {

    this.router.navigate(['/RegistrarTitulo/' + solicitudId + '/' + this.tituloProfesion]);
  }

}
