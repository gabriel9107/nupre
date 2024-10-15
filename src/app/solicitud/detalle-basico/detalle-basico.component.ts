import { Component, Inject, Input, input, OnInit } from '@angular/core';
import { Listado_Solicitud_Medico, Solicitud_Medico_Detalle_View } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Motivo_Rechazo, User } from '../../Models/Solicitudes_ViewModelt';
import { NupreService } from '../../Servicio/nupre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Solicitudes_Actividades_Progress } from '../../Models/SolicitudActividades';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment.desarrollo';
import { Observable } from 'rxjs';
import { urlNupre } from '../../environments/urls';

@Component({
  selector: 'app-detalle-basico',
  templateUrl: './detalle-basico.component.html',

})
export class DetalleBasicoComponent implements OnInit {
  public solicitudId!: number;
  public loading = false;
  public estado_Numero!: number;
  public estado_Descripcion!: string;
  public solicitud_Fecha!: string;
  public afiliado_Nombre_Completo!: string;
  public notaEvaluador: string = "";
  public solicitudRechazada: boolean = false;
  public fechaRechazoDevolucion: string = "";

  public frmAfiliadoEdit!: FormGroup;
  public frmTutotEdit!: FormGroup;

  public detalleSolicitud!: Solicitud_Medico_Detalle_View;

  // public detalleSolicitud!: Maternidad_Detalle_Solicitud_ViewModel;
  public motivos_Rechazo: Motivo_Rechazo[] = [];

  public TipoEstado!: Solicitudes_Estados[];
  public checkTitulos = false;
  public checkAsociaciones = false
  public checkSometido = false

  public Registrado: boolean = false;
  public puedeEditarSolicitud: boolean = false;
  public urlIdentidad = "";
  public urlExequatur = "";

  public currentUser: User | undefined;



  public solicitudRechazoParcial: boolean = false;



  get ProgressBarPorcent(): string {
    return `width: ${this.actividades[0]?.porcentaje}%`;
  }
  get actividadesRealizadas(): number {
    return this.service.actividadesRealizadas;
  }

  get actividades(): Solicitudes_Actividades_Progress[] {
    return this.service.Actividades_Progress;
  }


  constructor(public service: NupreService,
    public activedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    @Inject(DOCUMENT) document: Document,
    private sanitizer: DomSanitizer

  ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

    //  environment.baseUrlLocal" + this.solicitudId + "/0" //Informe de Maternidad
    this.getDetalleDelaSolicitud();

    // this.solicitudId = 3;
  }




  ngOnInit(): void {




  }

  public AsignarValuesNSSAfiliado(res: any) {
    this.frmAfiliadoEdit.patchValue({
      Afiliado_Numero: res.afiliado_Numero,
      Afiliado_Telefono: res.afiliado_Telefono,
      Afiliado_Celular: res.afiliado_Celular,
      Afiliado_Correo: res.afiliado_Correo
    })
  }







  /**obtiene el detalle de la solicitud*  *    */

  public getDetalleDelaSolicitud() {

    this.service.obtenerDetalelSolicitudbyId(this.solicitudId).subscribe(resp => {
      console.log(resp)
      this.detalleSolicitud = resp
      this.estado_Numero = resp.solicitud_Estado_Numero!

      this.loading = true;

      // this.urlExequatur = urlNupre.solicitudes.descargarDocumento + this.solicitudId + "/" + this.detalleSolicitud.solicitud_Certificado_Numero;
      this.urlExequatur = urlNupre.solicitudes.descargarDocumento + this.detalleSolicitud.solicitud_Certificado_Numero;
      this.urlIdentidad = urlNupre.solicitudes.descargarDocumento + this.detalleSolicitud.profesional_Documento_Cedula_Numero;
    });
  }

  get user() {
    return '';
  }

  @Input() details!: Listado_Solicitud_Medico;


  // @Input() item!: string;



}
