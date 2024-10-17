import { Component, Input, OnInit } from '@angular/core';
import { Especialidades, Tipo_Especialidades } from '../../../Models/Nupre/Especialidades';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, TitleStrategy, Params, ActivatedRoute } from '@angular/router';
import { NupreService } from '../../../Servicio/nupre.service';
import { NgModule, ViewChild, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StyleClassModule } from 'primeng/styleclass';
import { Profesional_titulacion, Profesional_TitulacionDTO, Titulacion } from '../../../Models/Nupre/Profesional_titulacion';
import { publishFacade } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-solicitudes-form',
  templateUrl: './solicitudes-form.component.html',

})
export class SolicitudesFormComponent implements OnInit {

  public tituloProfesiona!: boolean;
  public solicitudId!: number;
  public titulo!: string;
  public selectedProfesion!: number;
  public listadoEspecialidades!: Especialidades[];
  public list_TipoEspecilidades!: Tipo_Especialidades[];
  public listLicencitTipo!: any[]
  public selectTipo!: number;
  public files: File[] = [];


  public certificado!: File


  public showErrorMessage: boolean = false;
  public errorMessage: string = "";

  public registroTituloForm!: FormGroup;




  get solicitud(): Profesional_TitulacionDTO {
    const solicitud = this.registroTituloForm.value as Profesional_TitulacionDTO;
    return solicitud;
  }



  public guardarSolicitud() {

    if (this.registroTituloForm.invalid) {

      this.toastr.warning('No puedo enviar una solicitud sin registrar el detalle del titulo correspondiente', 'Advertencia');
      return;
    }
    if (this.solicitud.id) {
      this.servicio.solicitudEditar(this.solicitud).subscribe(solicitud => {
        this.toastr.info('Solicitu Actualizada', 'Aviso');
        this.router.navigate(['/Detalle/' + this.solicitudId])
      })
    }
    let param = this.obtenerParametros()

    this.servicio.guardarTitulacion(param).subscribe(() => {
      this.router.navigate(['/Detalle/' + this.solicitudId])
    }, error => console.error(error));
  }




  ngOnInit(): void {
    this.obtenerTipoProfesiones()
    this.createFromActive();
    if (!this.router.url.includes('edit')) return;

    this.activedRoute.params.pipe(switchMap(({ id }) => this.servicio.obtenerProfesionalesTitulacionId(id)),
    ).subscribe(trans => {
      if (!trans) return this.router.navigateByUrl('/');
      this.registroTituloForm.reset(trans);
      return;
    });


  }



  buscarProfesiones() { }

  constructor(public activedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private servicio: NupreService, private toastr: ToastrService) {
    let params: any = this.activedRoute.snapshot.params;

    this.solicitudId = params.id;
    this.tituloProfesiona = params.id2;

    console.log('Borrar')
    if (this.tituloProfesiona == true) {
      console.log('tiene un registro como profesional ')
    }

  }


  createFromActive() {
    this.registroTituloForm = this.fb.group({
      tipo_Registros: ['', Validators.required],
      especialidad_Numero: ['', Validators.required],
      especialidad_Periodo: ['', Validators.required],
      documento_adjunto: ['', Validators.required],

    })
  }

  guardarCambios() {
    this.router.navigate(['/NupreInformacionBasicaComponent']);
  }


  obtenerListadoProfesiones(tipo: number) {
    return this.servicio.obtenerListadoDeProfesiones(tipo).subscribe((resp: Especialidades[]) => {

      this.listadoEspecialidades = resp

    });
  }

  obtenerTipoProfesiones() {
    return this.servicio.obtenerTipoDeprofesiones().subscribe((resp: Tipo_Especialidades[]) => {

      if (this.tituloProfesiona == true) {
        this.list_TipoEspecilidades = resp.filter(x => x.especialidad_Tipo_Numero == 1);
      }
      else {
        this.list_TipoEspecilidades = resp;
      }

    });


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



    // for (var i = 0; i < files.length; i++) {
    //   console.log(this.files);
    //   this.files.push(files[i]);
    // }

  }
  search($event: any) {

  }
  out = new EventEmitter();




  validarCampo(campo: string) {
    return (this.registroTituloForm.get(campo)?.touched && this.registroTituloForm.get(campo)?.errors);
  }


  regresar() {
    window.history.back();
  }

  obtenerParametros() {

    let param = new Profesional_TitulacionDTO();
    param.Solicitud_Numero = this.solicitudId;

    param.Especialidad_Tipo_Numero = this.selectTipo;
    param.Especialidad_Profesion_Numero = this.registroTituloForm.get('especialidad_Numero')?.value;
    param.Especialidad_Periodo = this.registroTituloForm.get('especialidad_Periodo')?.value;




    param.Documento_Codigo = this.certificado;




    return param;

  }

}
