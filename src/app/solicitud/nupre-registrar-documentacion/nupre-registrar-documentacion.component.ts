import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { Listado_Solicitud_Medico, Profesionales_Filtro_Listado } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Especialidades_Edit_DTO, Profesional_Listado_titulacionDTO, Profesional_titulacion } from '../../Models/Nupre/Profesional_titulacion';
import { Motivo_Rechazo } from '../../Models/Solicitudes_ViewModelt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { Especialidades } from '../../Models/Nupre/Especialidades';
import { ToastrService } from 'ngx-toastr';
import { urlNupre } from '../../environments/urls';

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

  public TituloSelecionado?: string;
  public urlDocumento = "";
  public listadoDto: Profesional_Listado_titulacionDTO[] = [];

  public detailLic?: Profesionales_Filtro_Listado;


  public listado: Profesional_titulacion[] = [];
  public titulo: boolean = false;


  public files: File[] = [];
  public certificado!: File

  public showErrorMessage: boolean = false;
  public errorMessage: string = "";


  public id: number = 0;
  public registroTituloForm!: FormGroup;

  public selectedProfesion!: number;
  public listadoEspecialidades!: Especialidades[];

  submitted = false;


  @Input() details!: Listado_Solicitud_Medico;

  constructor
    (public activedRoute: ActivatedRoute, private toastr: ToastrService,
      private router: Router, private servicio: NupreService, private fb: FormBuilder,
    ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

  }
  ngOnInit(): void {
    this.consultarListadoTitulacion(this.solicitudId);
    this.createFromActive();
  }


  createFromActive() {
    this.registroTituloForm = this.fb.group({
      especialidad_Periodo: ['', Validators.required],
      documento_adjunto: ['', Validators.required],
    })
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


  EditarRegistro(registro: Profesional_Listado_titulacionDTO) {

    this.TituloSelecionado =
      registro.especialidad_Descripcion;
    this.id = registro.id!;
    this.Asignarvalores(registro);


  }

  uploadFile(files: File[]) {
    this.files = [];
    this.errorMessage = "";
    this.showErrorMessage = false;
    if (files === null && files === undefined)
      return;

    if (files.length > 1) {
      this.errorMessage = "No debe subir más de dos (2) archivos."
      this.showErrorMessage = true;
      this.registroTituloForm.controls['documento_adjunto'].setValue('');
      return;
    }

    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.size > 5000000) {
        this.errorMessage = "El archivo '" + file.name + "' es demasiado grande. Para poder procesarlo correctamente, asegúrate de que su tamaño sea inferior a 5 MB"
        this.showErrorMessage = true;
        this.registroTituloForm.controls['documento_adjunto'].setValue('');
        return;
      }
    }
    this.certificado = files[0]
  }


  public Nuevasolicitud(solicitudId: number) {

    this.router.navigate(['/RegistrarTitulo/' + solicitudId + '/' + this.tituloProfesion]);
  }

  public Asignarvalores(res: any) {

    this.registroTituloForm.patchValue({
      especialidad_Periodo: res.especialidad_Periodo,
      documento_adjunto: 'documento.pdf'
    })
  }

  guardarSolicitud() {
    if (this.registroTituloForm.invalid) {
      this.toastr.error("Existen campos pendientes")
      return;
    }
    var param = this.obtenerParametros();

    this.servicio.solicitud_Edit_Titulacion(param).subscribe((resp: any) => {

      this.toastr.success("Actualizado Correctamente")
      document.getElementById('btnECancel')?.click();
      this.refreshPage();
    });
  }

  obtenerParametros() {
    let param = new Especialidades_Edit_DTO();
    param.id = this.id;
    param.solicitud_Numero = this.solicitudId;
    param.especialidad_Periodo = this.registroTituloForm.get('especialidad_Periodo')?.value;
    param.documento_Codigo = this.certificado;
    return param;
  }



  refreshPage(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
