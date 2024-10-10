import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../auth/User';
import { NupreService } from '../../../Servicio/nupre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Localidates_create_DTO } from '../../../Models/Nupre/localidades';
import getUserInfo from '../../../auth/JWT';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',

})
export class FormRegisterComponent implements OnInit {


  constructor(private servicio: NupreService, public activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    this.createFormActive();
    this.user = getUserInfo()
  }



  createFormActive() {
    this.registroLocalidades = this.fb.group({
      prestadora_numero: ['', Validators.required],
      direccion: ['', Validators.required],
      municipio_numero: ['', Validators.required],
      telefono_1: ['', Validators.required],
      telefono_2: ['', Validators.required],
      detalle: ['', Validators.required],

    })
  }
  public solicitudId!: number;

  registroLocalidades!: FormGroup;

  user: User = null!
  errorMessage!: string;
  showErrorMessage: boolean = false;

  obtanerParametros() {
    let param = new Localidates_create_DTO();
    param.prestadora_Numero = this.solicitudId;
    param.prestadora_Numero = this.registroLocalidades.get('')?.value
    param.localidad_Direccion = this.registroLocalidades.get('')?.value
    param.localidad_Telefono1 = this.registroLocalidades.get('')?.value
    param.localidad_Telefono2 = this.registroLocalidades.get('')?.value
    param.localidad_Detalle = this.registroLocalidades.get('')?.value

    return param;
  }


  guardarSolicitud() {

    let param = this.obtanerParametros();


    this.servicio.guardarLocalidades(param).subscribe(() => {
      this.router.navigate(['/Detalle/' + this.solicitudId])
    }, error => console.error(error));

  }


}
