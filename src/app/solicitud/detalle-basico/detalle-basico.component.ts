import { Component, Input, input, OnInit } from '@angular/core';
import { Listado_Solicitud_Medico, Solicitud_Medico_Detalle_View } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Motivo_Rechazo, User } from '../../Models/Solicitudes_ViewModelt';
import { NupreService } from '../../Servicio/nupre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProgressBarService } from '../../../Providers/progress-bar.service';
import { Solicitudes_Actividades_Progress } from '../../Models/SolicitudActividades';
import { ToastrService } from 'ngx-toastr';

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


  public currentUser: User | undefined;



  public solicitudRechazoParcial: boolean = false;



  get ProgressBarPorcent(): string {
    return `width: ${this.actividades[0]?.porcentaje}%`;
  }
  get actividadesRealizadas(): number {
    return this.progressBarService.actividadesRealizadas;
  }

  get actividades(): Solicitudes_Actividades_Progress[] {
    return this.progressBarService.Actividades_Progress;
  }


  constructor(public service: NupreService,
    public activedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private progressBarService: ProgressBarService,

  ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

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
      this.detalleSolicitud = resp
      this.estado_Numero = resp.solicitud_Estado_Numero!

      this.loading = true;
    });
  }

  get user() {
    return '';
  }

  @Input() details!: Listado_Solicitud_Medico;


  // @Input() item!: string;



}
