import { Component, Inject, Input, input, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Listado_Solicitud_Medico, Solicitud_Medico_Detalle_View } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Motivo_Rechazo, User } from '../../Models/Solicitudes_ViewModelt';
import { NupreService } from '../../Servicio/nupre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitudes_Actividades_Progress } from '../../Models/SolicitudActividades';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment.desarrollo';
import { Observable } from 'rxjs';
import { urlNupre } from '../../environments/urls';
import { Solicitud_Set_Afiliado } from '../../Models/solicitud_set_afiliado';
import getUserInfo from '../../auth/JWT';

@Component({
  selector: 'app-detalle-basico',
  templateUrl: './detalle-basico.component.html',

})
export class DetalleBasicoComponent implements OnInit {
  submitted = false;
  public cedula!: File;
  public certificado!: File
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


  user: User = null!
  public detalleSolicitud!: Solicitud_Medico_Detalle_View;

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

  public files: File[] = [];
  public showErrorMessage: boolean = false;
  public errorMessage: string = "";




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

    this.getDetalleDelaSolicitud();

    this.createFormActive();


  }


  createFormActive() {
    this.frmAfiliadoEdit = this.fb.group({
      profesional_Telefono1: ['', [Validators.required, Validators.pattern('^8[024]9[0-9]{7}$')]],
      profesional_Telefono2: ['', Validators.pattern('^8[024]9[0-9]{7}$')],
      profesional_Telefono3: ['', Validators.pattern('^8[024]9[0-9]{7}$')],
      profesional_Mail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
      archivo_Cedula: [''],
      archivo_Exequatur: [''],
    });
  }

  ngOnInit(): void {
    this.user = getUserInfo()


  }

  public AsignarValuesNSSAfiliado(res: any) {

    this.frmAfiliadoEdit.patchValue({
      profesional_Telefono1: res.profesional_Telefono1,
      profesional_Telefono2: res.profesional_Telefono2,
      profesional_Telefono3: res.profesional_Telefono3,
      profesional_Mail: res.profesional_Mail
    })
  }




  GuardarAfiliadoSolicitud() {
    this.submitted = true;
    if (this.frmAfiliadoEdit.invalid) {
      return;
    }

    let param = this.getparametros();

    

  }


  getparametros() {
    let param = new Solicitud_Set_Afiliado();


    // param.profesional_Exequatur = this.frmAfiliadoEdit.get('profesional_Exequatur')?.value;
    param.profesional_Telefono1 = this.frmAfiliadoEdit.get('profesional_Telefono1')?.value;
    param.profesional_Telefono2 = this.frmAfiliadoEdit.get('profesional_Telefono2')?.value;
    param.profesional_Telefono3 = this.frmAfiliadoEdit.get('profesional_Telefono3')?.value;
    param.profesional_Mail = this.frmAfiliadoEdit.get('profesional_Mail')?.value;
    param.asociacion_Registro_Patronal = this.user?.UsuarioRegistroPatronal;
    param.solicitud_Usuario_Cuenta = this.user?.UsuarioCuenta;

    // param.archivo_Cedula = this.cedula
    // param.archivo_Exequatur = this.certificado;
    return param;
  }



  uploadFile(files: File[], tipo: number) {


    this.files = [];

    this.errorMessage = "";
    this.showErrorMessage = false;

    if (files === null && files === undefined)
      return;

    if (files.length > 1) {
      this.errorMessage = "No debe subir más de dos (2) archivos."
      this.showErrorMessage = true;
      this.frmAfiliadoEdit.controls['archivoCedula'].setValue('');
      return;
    }

    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.size > 5000000) {
        this.errorMessage = "El archivo '" + file.name + "' es demasiado grande. Para poder procesarlo correctamente, asegúrate de que su tamaño sea inferior a 5 MB"
        this.showErrorMessage = true;
        this.frmAfiliadoEdit.controls['archivoCedula'].setValue('');
        return;
      }
    }

    if (tipo == 1) {

      this.cedula = files[0];

    } else {

      this.certificado = files[0]
    };


  }



  public getDetalleDelaSolicitud() {

    this.service.obtenerDetalelSolicitudbyId(this.solicitudId).subscribe(resp => {

      this.detalleSolicitud = resp
      this.estado_Numero = resp.solicitud_Estado_Numero!

      this.loading = true;


      this.urlExequatur = urlNupre.solicitudes.descargarDocumento + this.detalleSolicitud.solicitud_Certificado_Numero;
      this.urlIdentidad = urlNupre.solicitudes.descargarDocumento + this.detalleSolicitud.profesional_Documento_Cedula_Numero;
      this.AsignarValuesNSSAfiliado(resp);
    });

  }



  @Input() details!: Listado_Solicitud_Medico;




}
