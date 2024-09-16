import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { Solicitud_MedicoCreacionDTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { ciudadano_consulta_DTOs } from '../../Models/Nupre/ciudadano_mastert';
import { Provincias_Cata } from '../../Models/Direccion';
import { Nacionalidad, Provincias } from '../../Models/Nupre/comun_models';


@Component({
  selector: 'app-formulario-solicitud',
  templateUrl: './formulario-solicitud.component.html',
  styleUrl: './formulario-solicitud.component.css'
})
export class FormularioSolicitudComponent implements OnInit {


  public datatosCiudadano!: ciudadano_consulta_DTOs
  public files: File[] = [];

  public nacionalidades: Nacionalidad[] = [];
  selectNacionalidad: number | undefined;


  public provincias: Provincias[] = [];

  selectprovincias: number | undefined;



  @Output()
  submit: EventEmitter<Solicitud_MedicoCreacionDTO> = new EventEmitter<Solicitud_MedicoCreacionDTO>();

  @Input()
  modelo!: Solicitud_MedicoCreacionDTO;

  ngOnInit(): void {



    this.getProvinciasCata();
    this.getNacionalidades();


    this.form = this.formBuider.group({
      
      profesionalDocumento: ['', { validators: [Validators.required, Validators.minLength(2)] },],
      profesionalNombreCompleto: ['', { Validators: [Validators.required] }],
      profesionalSexo: ['', { Validators: [Validators.required] }],
      profesionalExequatur: ['', { Validators: [Validators.required, Validators.minLength(2)] }],
      nacionalidadNumero: ['', { Validators: [Validators.required, Validators.minLength(2)] }],
      municipioNumero: ['', { Validators: [Validators.required, Validators.minLength(2)] }],
      profesional_Direccion: ['', { Validators: [Validators.required, Validators.minLength(7)] }],
      profesionalTelefono1: ['', { Validators: [Validators.required] }],
      profesionalTelefono2: '',
      profesionalTelefono3: '',
      profesionalMail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
      archivoCedula: ['', { Validators: [Validators.required] }],
      archivoExequatur: ['', { Validators: [Validators.required] }],

    });
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService, private formBuider: FormBuilder
    ) {
  }
  form!: FormGroup;



  submitted = false;
  public showErrorMessage: boolean = false;
  public errorMessage: string = "";
  public listSolicitud() {
    this.router.navigate(['/NUPRE']);
  }
  buscarDatosAfiliado(no_cedula: any) {


    this.servicio.getCiudadano(no_cedula).subscribe((res: ciudadano_consulta_DTOs) => {
      this.datatosCiudadano = res

      this.AsignarValores(res);
    }, error => {
      this.limpiarValueNSS(error.error)
    })
  }


  public AsignarValores(res: ciudadano_consulta_DTOs) {

    this.form.patchValue({
      // profesionalDocumento: res.ciudadanoNoDocumento,
      profesionalNombreCompleto: res.ciudadanoNombreCompleto,
      profesionalSexo: res.ciudadanoSexo,
      nacionalidadNumero: res.nacionalidadNumero,
      municipioNumero: res.ciudadanoActaNacimientoMunicipio


    })

  }

  public limpiarValueNSS(error = "") {
    this.form.patchValue(
      {
        profesionalDocumento: '',
        profesionalNombreCompleto: '',
        profesionalSexo: '',
        profesionalExequatur: '',
        nacionalidadNumero: '',
        municipioNumero: '',
        profesional_Direccion: '',
        profesionalTelefono1: '',
        profesionalTelefono2: '',
        profesionalTelefono3: '',
        profesionalMail: '',
        archivoCedula: '',
        archivoExequatur: ''
      }

    )
  }



  regresar() {
    this.router.navigate(['/NUPRE']);
  }
  public GuardarSolicitud() {

    console.log('valores del formulario');
    console.log(this.form.value);
    this.submit.emit(this.form.value);
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
      this.form.controls['archivoCedula'].setValue('');
      return;
    }

    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.size > 5000000) {
        this.errorMessage = "El archivo '" + file.name + "' es demasiado grande. Para poder procesarlo correctamente, asegúrate de que su tamaño sea inferior a 5 MB"
        this.showErrorMessage = true;
        this.form.controls['archivoCedula'].setValue('');
        return;
      }
    }


    for (var i = 0; i < files.length; i++) {
      console.log(this.files);
      this.files.push(files[i]);
    }

  }


  getProvinciasCata() {

    this.servicio.getProvincias().
      subscribe(resp => this.provincias = resp);

  }
  getNacionalidades() {

    this.servicio.getNacionalidades().subscribe(res => this.nacionalidades = res);

  }

  obtenerErrorCampoNombre() {
    var campoNombre = this.form.get('NSS')
    var campoNacionalidad = this.form.get('Nacionalidad');
    if (campoNombre?.hasError('required')) {
      return 'El campo NSS es requerido'
    }
    if (campoNombre?.hasError('minLength')) {
      return 'La logitud minima es de 2 caracteres'
    }
    // if (campoNacionalidad?.hasError('required')) {
    //   return 'El campo Nacionaldiad es requerido'
    // }
    return '';
  }





}

