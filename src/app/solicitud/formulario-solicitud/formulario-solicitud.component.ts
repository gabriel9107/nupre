import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { Solicitud_MedicoCreacionDTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';


@Component({
  selector: 'app-formulario-solicitud',
  templateUrl: './formulario-solicitud.component.html',
  styleUrl: './formulario-solicitud.component.css'
})
export class FormularioSolicitudComponent implements OnInit {

  @Output()
  submit: EventEmitter<Solicitud_MedicoCreacionDTO> = new EventEmitter<Solicitud_MedicoCreacionDTO>();

  @Input()
  modelo!: Solicitud_MedicoCreacionDTO;
  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];
  selectedCity: any;
  ngOnInit(): void {




    this.form = this.formBuider.group({

      // solicitudNumero?: number
      // solicitudFecha?: string
      // profesionalDocumento?: string
      // profesionalNombreCompleto?: string
      // nacionalidadNumero?: number
      // profesionalSexo?: string
      // profesionalExequatur?: string
      // profesionalDireccion?: string
      // municipioNumero?: number
      // profesionalTelefono1?: string
      // profesionalTelefono2?: string
      // profesionalTelefono3?: string
      // profesionalMail?: string
      // solicitudEstadoNumero?: number
      // solicitudEstadoFecha?: string
      // solicitudEstadoNota?: string
      // solicitudUsuarioCuenta?: string
      // solicitudActualizarDatos?: string
      // asociacionRegistroPatronal?: number
      // motivoNumero?: number
      // solicitudCertificadoNumero?: string
      // registroEstado?: string
      // registroUsuario?: string
      // registroFecha?: string



      //En caso de que sea un usuario personal creando su solicitud, la misma va a traer el NSS por defecto
      profesionalDocumento: ['40221025725', { validators: [Validators.required, Validators.minLength(2)] },],
      profesionalNombreCompleto: 'Gabriel Montero',
      profesionalSexo: ['Masculino'],
      profesionalExequatur: '454847',
      nacionalidadNumero: '1',
      municipioNumero: '1',
      profesionalDireccion: 'Nicolas Ramon #31',
      profesionalTelefono1: '829940978',
      profesionalTelefono2: '80955',
      profesionalTelefono3: '4888',
      profesionalMail: 'prueba@gmail.com',
      archivoCedula: '',
      archivoExequatur: ''
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
  buscarDatosAfiliado() { }
  regresar() {
    this.router.navigate(['/NUPRE']);
  }
  public GuardarSolicitud() {

    console.log('valores del formulario');
    console.log(this.form.value);
    this.submit.emit(this.form.value);
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

