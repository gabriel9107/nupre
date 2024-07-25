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

  ngOnInit(): void {
    this.form = this.formBuider.group({

      //En caso de que sea un usuario personal creando su solicitud, la misma va a traer el NSS por defecto
      NSS: ['', { validators: [Validators.required, Validators.minLength(2)] },],
      Sexo: ['Masculino'],
      Exequatur: '',
      Nacionalidad: '',
      Municipio: '',
      Direccion: '',
      Celular: '',
      Telefono: '',
      Telefono2: '',
      CorreoElectronico: ''
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

