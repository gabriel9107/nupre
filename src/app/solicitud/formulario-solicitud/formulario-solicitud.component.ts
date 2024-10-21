import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { Solicitud_MedicoCreacionDTO, Solicitud_MedicoCreacionPruebaDTO, solicitudCreacionDTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { ciudadano_consulta_DTOs, Ciudadano_FiltroDTO } from '../../Models/Nupre/ciudadano_mastert';
import { Provincias_Cata } from '../../Models/Direccion';
import { Nacionalidad, Provincias } from '../../Models/Nupre/comun_models';
import { HttpClient } from '@angular/common/http';
import { User, UsuarioInfo } from '../../auth/User';
import getUserInfo from '../../auth/JWT';
import { catchError, throwError } from 'rxjs';
import { InvalidOperationException } from '../../Models/InvalidOperationException';
import { ApiError } from '../../Models/Api/apiResult';


@Component({
  selector: 'app-formulario-solicitud',
  templateUrl: './formulario-solicitud.component.html',
  styleUrl: './formulario-solicitud.component.css'
})
export class FormularioSolicitudComponent implements OnInit {


  public textoBase = "Ingrese el NSS o cédula del Profesional Medico  y luego presione el botón con la lupa para poder registrar las informaciones relacionadas";

  public datatosCiudadano!: ciudadano_consulta_DTOs
  public cedula!: File;
  public certificado!: File
  public validaIdentidad = false;
  public TextIdentidad = this.textoBase;
  isInputDisabled = false;

  disabled = true;

  public currentUser: User | undefined;


  public files: File[] = [];

  public nacionalidades: Nacionalidad[] = [];
  selectNacionalidad: number | undefined;


  public provincias: Provincias[] = [];

  selectprovincias: number | undefined;



  // @Output()
  // submit: EventEmitter<solicitudCreacionDTO> = new EventEmitter<solicitudCreacionDTO>();

  @Input()
  modelo!: solicitudCreacionDTO;

  ngOnInit(): void {
    this.currentUser = getUserInfo();


 

    this.getProvinciasCata();
    this.getNacionalidades();



    this.form = this.formBuider.group({

      profesional_Documento: ['', { validators: [Validators.required, Validators.minLength(2)] },],
      profesional_Nombre_Completo: ['', { Validators: [Validators.required] }],
      archivo_Cedula: ['', { Validators: [Validators.required] }],
      archivo_Exequatur: ['', { Validators: [Validators.required] }],
      profesional_Sexo: ['', { Validators: [Validators.required] }],
      profesional_Exequatur: ['', { Validators: [Validators.required, Validators.minLength(2)] }],
      nacionalidad_Numero: ['', { Validators: [Validators.required, Validators.minLength(2)] }],
      municipio_Numero: ['', { Validators: [Validators.required, Validators.minLength(2)] }],
      profesional_Direccion: ['', { Validators: [Validators.required, Validators.minLength(7)] }],
      profesional_Telefono1: new FormControl('', [Validators.maxLength(10), Validators.pattern('^8[024]9[0-9]{7}$')]), //['', { Validators: [Validators.required] }],
      profesional_Telefono2: '',
      profesional_Telefono3: '',
      profesional_Mail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],

    });
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }


    if (this.currentUser.UsuarioTipo == 3 || 1 || 14 || 16) {
      this.buscarDatosAfiliado(this.currentUser.UsuarioCedula)
      this.isInputDisabled = false;

    }



  }
  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService, private formBuider: FormBuilder, private http: HttpClient,
    ) {
  }
  form!: FormGroup;



  submitted = false;
  public showErrorMessage: boolean = false;
  public errorMessage: string = "";
  public listSolicitud() {
    this.router.navigate(['/NUPRE']);
  }
  buscarDatosAfiliado(no_cedula: string) {

    let ciudadano: Ciudadano_FiltroDTO = {
      cedula: no_cedula,


      empleador_Registro_Patronal: this.currentUser?.EntidadNombre == "Personal" ? 0 : this.currentUser?.UsuarioRegistroPatronal



    }

    this.form.controls['profesional_Documento'].setValue(this.cedula);




    this.servicio.obtenerCiudadanos(ciudadano).pipe(catchError(error => {
      if (error.error instanceof ApiError) {

      } else {

      }
      return throwError(error);
    })
    ).subscribe((res: ciudadano_consulta_DTOs) => {
      this.datatosCiudadano = res
      this.AsignarValores(res);
    }, error => {
      this.limpiarValueNSS(error.error.message)
    }
    )
  }



  // this.servicio.obtenerCiudadanos(ciudadano).subscribe((res: ciudadano_consulta_DTOs) => {
  //   // this.servicio.getCiudadano(no_cedula,).subscribe((res: ciudadano_consulta_DTOs) => {
  //   this.datatosCiudadano = res

  //   this.AsignarValores(res);
  // },


  //   error => {

  //     console.error(error.error.message); // Mensaje de error personalizado



  //     this.limpiarValueNSS(error.error)



  //     this.validaIdentidad = true;
  //     this.TextIdentidad = error.error;
  //     //  this.textoBase;

  //   })



  public AsignarValores(res: ciudadano_consulta_DTOs) {

    this.form.patchValue({
      profesional_Documento: res.ciudadanoNoDocumento,
      profesional_Nombre_Completo: res.ciudadanoNombreCompleto,
      profesional_Sexo: res.ciudadanoSexo,
      nacionalidad_Numero: res.nacionalidadNumero,
      municipio_Numero: res.ciudadanoActaNacimientoMunicipio


    })
    if (res.ciudadanoNombreCompleto != "")


      this.validaIdentidad = false;
    this.TextIdentidad = this.textoBase;

  }



  public limpiarValueNSS(error = "") {
    this.validaIdentidad = true;
    this.TextIdentidad = error;

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



  obtenerParametros() {
    var resultado = new Solicitud_MedicoCreacionPruebaDTO();

    resultado.profesional_Nombre_Completo = this.form.get('profesional_Nombre_Completo')?.value;
    resultado.profesional_Documento = this.form.get('profesional_Documento')?.value;

    resultado.nacionalidad_Numero = this.form.get('nacionalidad_Numero')?.value;
    resultado.profesional_Sexo = this.form.get('profesional_Sexo')?.value;
    resultado.profesional_Exequatur = this.form.get('profesional_Exequatur')?.value;
    resultado.municipio_Numero = this.form.get('municipio_Numero')?.value;
    resultado.profesional_Direccion = this.form.get('profesional_Direccion')?.value;
    resultado.profesional_Telefono1 = this.form.get('profesional_Telefono1')?.value;
    resultado.profesional_Telefono2 = this.form.get('profesional_Telefono2')?.value;
    resultado.profesional_Telefono3 = this.form.get('profesional_Telefono3')?.value;
    resultado.profesional_Mail = this.form.get('profesional_Mail')?.value;
    resultado.profesional_Telefono3 = this.form.get('profesional_Telefono3')?.value;

    resultado.asociacion_Registro_Patronal = this.currentUser?.UsuarioRegistroPatronal;
    resultado.solicitud_Usuario_Cuenta = this.currentUser?.UsuarioCuenta;

    resultado.archivo_Cedula = this.cedula
    resultado.archivo_Exequatur = this.certificado;



    return resultado;
  }


  regresar() {
    this.router.navigate(['/NUPRE']);
  }
  public GuardarSolicitud() {


    var solicitud = this.obtenerParametros();
    this.servicio.crearSolicitud3(solicitud, this.cedula!, this.certificado!).subscribe(() => {
      this.router.navigate(['/solicitudes'])
    }, error => console.error(error));


    // this.submit.emit(this.form.value);
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

    if (tipo == 1) {

      this.cedula = files[0];

    } else {

      this.certificado = files[0]
    };

 
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

