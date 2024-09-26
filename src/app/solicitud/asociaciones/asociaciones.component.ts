import { Component, OnInit } from '@angular/core';
import { Profesional_Listado_titulacionDTO } from '../../Models/Nupre/Profesional_titulacion';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NupreService } from '../../Servicio/nupre.service';
import { ProfesionalesAsociaciones } from '../../Models/asosiaciones';

@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.component.html'

})
export class AsociacionesComponent implements OnInit {



  public asociaciones: boolean = false;
  public localidades: boolean = false;
  public solicitudId!: string;
  public listado: ProfesionalesAsociaciones[] = [];

  public loading: boolean = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  constructor(public activedRoute: ActivatedRoute,
    private router: Router, private servicio: NupreService, private formBuider: FormBuilder, private http: HttpClient,) {

    let params: any = this.activedRoute.snapshot.params;

    this.solicitudId = params.id

  }

  NuevaAsociacion() {

    this.router.navigate(['/RegistrarAsociacion/' + this.solicitudId]);
  }

  listDeAsociaciones() {

  }




}
