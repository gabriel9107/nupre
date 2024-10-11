import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../auth/User';
import { NupreService } from '../../../Servicio/nupre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Localidates_create_DTO } from '../../../Models/Nupre/localidades';
import getUserInfo from '../../../auth/JWT';
import { Municipio } from '../../../Models/Nupre/comun_models';
import { Prestadoras } from '../../../Models/Prestadoras';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',

})
export class FormRegisterComponent implements OnInit {
  listaPrestadora: any[] = [];
  listaMunicipio: Municipio[] = [];

  selectedMunicipio!: number;
  selectedPrestadora!: number;



  constructor(private servicio: NupreService, public activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    let params: any = this.activatedRoute.snapshot.params;
    this.solicitudId = params.id;
  }

  ngOnInit(): void {

    this.createFormActive();
    this.obtenerListadoPrestadoras();
    this.obtenerListadoMunicipio();
    this.user = getUserInfo()
  }

  obtenerListadoMunicipio() {
    this.servicio.getMunicipios().subscribe((resp: Municipio[]) => {
      this.listaMunicipio = resp;
    });
  }

  obtenerListadoPrestadoras() {
    this.servicio.obtenerPrestadoras().subscribe((resp: Prestadoras[]) => {
      this.listaPrestadora = resp
    })
  }



  createFormActive() {
    this.registroLocalidades = this.fb.group({
      prestadora_Numero: ['', Validators.required],
      municipio_numero: ['', Validators.required],
      localidad_Direccion: ['', Validators.required],
      localidad_Telefono1: ['', Validators.required],
      localidad_Telefono2: ['', Validators.required],
      localidad_Detalle: ['', Validators.required],

    })
  }
  public solicitudId!: number;

  registroLocalidades!: FormGroup;

  user: User = null!
  errorMessage!: string;
  showErrorMessage: boolean = false;

  obtanerParametros() {
    let param = new Localidates_create_DTO();
    param.solicitud_Numero = this.solicitudId as number;

    param.prestadora_Numero = this.registroLocalidades.get('prestadora_Numero')?.value as number
    param.municipio_Numero = this.registroLocalidades.get('municipio_numero')?.value
    param.localidad_Direccion = this.registroLocalidades.get('localidad_Direccion')?.value
    param.localidad_Telefono1 = this.registroLocalidades.get('localidad_Telefono1')?.value
    param.localidad_Telefono2 = this.registroLocalidades.get('localidad_Telefono2')?.value
    param.localidad_Detalle = this.registroLocalidades.get('localidad_Detalle')?.value

    return param;
  }


  guardarSolicitud() {

    let param = this.obtanerParametros();


    this.servicio.guardarLocalidades(param).subscribe(() => {
      this.router.navigate(['/Detalle/' + this.solicitudId])
    }, error => console.error(error));

  }


}
