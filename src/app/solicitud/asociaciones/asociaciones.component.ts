import { Component, ElementRef, Inject, Input, OnInit, viewChild, ViewChild } from '@angular/core';
import { Profesional_Listado_titulacionDTO } from '../../Models/Nupre/Profesional_titulacion';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NupreService } from '../../Servicio/nupre.service';
import { EditarProfesionalesAsociaciones_DTO, ProfesionalesAsociaciones } from '../../Models/asosiaciones';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../auth/User';
import getUserInfo from '../../auth/JWT';
import { Listado_Solicitud_Medico } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
//@ts-ignore
const $: any = window['$'];
@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.component.html'

})
export class AsociacionesComponent implements OnInit {
  // @ViewChild('childModal') public childModal:ModalDirective;

  @ViewChild('edit_asociacionform') modal?: ElementRef;
  @ViewChild('btnCancel') tcancel?: ElementRef;




  @Input() details!: Listado_Solicitud_Medico;
  public files: File[] = [];
  public certificado!: File

  public showErrorMessage: boolean = false;
  public errorMessage: string = "";

  public submitted: boolean = false;

  public asociaciones: boolean = false;
  public localidades: boolean = false;
  public solicitudId!: number;
  public listado: ProfesionalesAsociaciones[] = [];
  public asociacion?: ProfesionalesAsociaciones;
  public Registrado: boolean = false;

  public AsocacionSelecionado?: string;

  public loading: boolean = false;


  public currentUser: User | undefined;

  public registroAsociaciones!: FormGroup;

  ngOnInit(): void {

    this.currentUser = getUserInfo();


    this.obtenerListadoAsociaciones(this.solicitudId);
    this.createFormActive();
  }


  constructor(public activedRoute: ActivatedRoute,

    private router: Router, private servicio: NupreService,
    private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService,
    @Inject(DOCUMENT) document: Document,
    private sanitizer: DomSanitizer) {

    let params: any = this.activedRoute.snapshot.params;

    document.getElementById('');
    this.solicitudId = params.id

  }

  createFormActive() {
    this.registroAsociaciones = this.fb.group({

      asociacion_Numero_Socio: ['', Validators.required],
      documento_adjunto: ['', Validators.required],
    })
  }
  // 001-0946710-0


  obtenerListadoAsociaciones(solicitudId: number) {

    this.servicio.obtenerListadoAsociacionesBySolicitudId(solicitudId).subscribe((resp: ProfesionalesAsociaciones[]) => {
      this.listado = resp;
    })
  }

  NuevaAsociacion() {

    this.router.navigate(['/RegistrarAsociacion/' + this.solicitudId]);
  }


  refreshPage(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  editarSolicitud(edit: ProfesionalesAsociaciones) {

    this.asociacion = edit;
    this.Asignarvalores(edit);
  }


  guardarSolicitud() {

    if (this.registroAsociaciones.invalid) {
      this.toastr.error("Existen campos pendientes")
      return;
    }
    var param = this.obtenerParametros();

    this.servicio.solicitud_Edit_Asociacion(param).subscribe((res: any) => {
      this.toastr.success("Actualizado Correctamente")
      document.getElementById('btnSCancel')?.click();
      this.refreshPage();
    });



  }


  public Asignarvalores(res: any) {
    this.registroAsociaciones.patchValue({
      asociacion_Numero_Socio: res.asociacion_Numero_Socio,
      documento_adjunto: 'documento.pdf'
    })
  }
  obtenerParametros() {
    let param = new EditarProfesionalesAsociaciones_DTO();
    param.solicitud_Numero = this.solicitudId;
    param.asociacion_ID = this.asociacion?.asociacion_ID!;
    param.asociacion_Numero_Socio = this.registroAsociaciones.get('asociacion_Numero_Socio')?.value
    param.asociacion_Registro_Patronal = this.currentUser!.UsuarioRegistroPatronal;
    param.profesional_Asociacion_Codigo = this.asociacion?.profesional_Asociacion_Codigo!;
    param.Documento = this.certificado;
    param.Registro_Usuario = this.currentUser!.UsuarioCuenta;
    param.Documento = this.certificado;
    return param;
  }

  // prueba() {


  //   this.toastr.success("Actualizado Correctamente")
  //   document.getElementById('btnSCancel')?.click();

  // }

  uploadFile(files: File[]) {
    this.files = [];
    this.errorMessage = "";
    this.showErrorMessage = false;
    if (files === null && files === undefined)
      return;

    if (files.length > 1) {
      this.errorMessage = "No debe subir más de dos (2) archivos."
      this.showErrorMessage = true;
      this.registroAsociaciones.controls['documento_adjunto'].setValue('');
      return;
    }

    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.size > 5000000) {
        this.errorMessage = "El archivo '" + file.name + "' es demasiado grande. Para poder procesarlo correctamente, asegúrate de que su tamaño sea inferior a 5 MB"
        this.showErrorMessage = true;
        this.registroAsociaciones.controls['documento_adjunto'].setValue('');
        return;
      }
    }
    this.certificado = files[0]
  }





}
