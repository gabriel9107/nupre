import { Component, Input, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Historico, Solicitudes_Actividades_Progress } from '../../Models/SolicitudActividades';
import { Motivo_Rechazo, User } from '../../Models/Solicitudes_ViewModelt';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Profesional_Listado_titulacionDTO } from '../../Models/Nupre/Profesional_titulacion';
import { localidades, Localidates_create_DTO, Localidates_Edit_DTO } from '../../Models/Nupre/localidades';
import { NupreService } from '../../Servicio/nupre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Route } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Municipio } from '../../Models/Nupre/comun_models';
import getUserInfo from '../../auth/JWT';
import { Listado_Solicitud_Medico } from '../../Models/Nupre/Listado_Solicitud_Medico';



@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html'

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
    this.user = getUserInfo();
    this.servicio.ReadActividadProgressBar(this.solicitudId);
    this.obtenerListadoMunicipio();
    this.obtenerLocalidades();
    this.createFormActive();
  }



  constructor(private router: Router,
    private fb: FormBuilder,
    public activedRoute: ActivatedRoute,
    private servicio: NupreService,
    private toastr: ToastrService) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;
  }
  @Input() details2!: Listado_Solicitud_Medico;
  registroLocalidades!: FormGroup;

  user: User = null!
  errorMessage!: string;
  showErrorMessage: boolean = false;
  selectedMunicipio!: number;
  selectedPrestadora!: number;
  listaMunicipio: Municipio[] = [];
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

  public editar?: localidades;


  public listadoDto: localidades[] = [];



  Nuevasolicitud() {

    this.router.navigate(['/registrarlocalidades', this.solicitudId])
  }

  obtenerLocalidades() {


    this.servicio.obtenerLocalides(this.solicitudId).subscribe((resp: localidades[]) => {
      this.loading = false;

      this.listadoDto = resp;

    }
    )
  }

  validarCampo(campo: string) {
    return (this.registroLocalidades.get(campo)?.touched && this.registroLocalidades.get(campo)?.errors);
  }
  obtenerListadoMunicipio() {
    this.servicio.getMunicipios().subscribe((resp: Municipio[]) => {
      this.listaMunicipio = resp;
    });
  }

  ediarRegistro(edit: localidades) {
    this.editar = edit;
    this.selectedMunicipio = edit.municipio_Numero;

    this.AsignarValores(edit);
  }


  AsignarValores(res: localidades) {
    this.registroLocalidades.patchValue({
      municipio_Numero: res.municipio_Numero,
      localidad_Direccion: res.localidad_Direccion,
      localidad_Telefono1: res.localidad_Telefono1,
      localidad_Telefono2: res.localidad_Telefono2,
      localidad_Detalle: res.localidad_Detalle,
    })
  }


  createFormActive() {
    this.registroLocalidades = this.fb.group({

      municipio_numero: ['', Validators.required],
      localidad_Direccion: ['', Validators.required],
      localidad_Telefono1: new FormControl('', [Validators.maxLength(10), Validators.required, Validators.pattern('^8[024]9[0-9]{7}$')]),
      localidad_Telefono2: new FormControl('', [Validators.maxLength(10), Validators.pattern('^8[024]9[0-9]{7}$')]),
      localidad_Detalle: [''],

    })
  }


  obtanerParametros() {
    let param = new Localidates_Edit_DTO();
    param.solicitud_Numero = this.solicitudId as number;
    param.Localidad_Secuencia = this.editar?.localidad_Secuencia; 
    param.registro_Usuario = this.user.UsuarioCuenta;
    param.municipio_Numero = this.registroLocalidades.get('municipio_numero')?.value
    param.localidad_Direccion = this.registroLocalidades.get('localidad_Direccion')?.value
    param.localidad_Telefono1 = this.registroLocalidades.get('localidad_Telefono1')?.value
    param.localidad_Telefono2 = this.registroLocalidades.get('localidad_Telefono2')?.value
    param.localidad_Detalle = this.registroLocalidades.get('localidad_Detalle')?.value
    param.prestadora_Numero = this.editar?.prestadora_Numero!;

    return param;
  }
  Cancelar() {
    this.registroLocalidades.reset();
    // window.history.back();
  }

  BuscarMunicipio(numero: number) {
    return this.listaMunicipio.find(a => a.municipioNumero == numero)?.municipioNombre
  }

  refreshPage(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


  guardarSolicitud() {

    let param = this.obtanerParametros();


    if (this.registroLocalidades.valid) {



      this.servicio.solicitud_Edit_Localidades(param).subscribe(() => {
        this.toastr.success("Registro Actualizado Correctamente");
        document.getElementById('btnLCancel')?.click();
        this.refreshPage();
      }, error => console.error(error));





    } if (this.registroLocalidades.invalid) {
      this.toastr.warning('No puedo enviar una solicitud sin registrar los datos de Localidad correspondientes', 'Advertencia');
      return;
    }



  }

}







