import { Component, OnInit } from '@angular/core';
import { Profesional_Listado_titulacionDTO } from '../../Models/Nupre/Profesional_titulacion';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NupreService } from '../../Servicio/nupre.service';

@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.component.html'

})
export class AsociacionesComponent implements OnInit {


  public tituloProfesion: boolean = false;
  public solicitudId!: string;
  public listadoDto: Profesional_Listado_titulacionDTO[] = [];
  public loading: boolean = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  constructor(public activedRoute: ActivatedRoute,
    private router: Router, private servicio: NupreService, private formBuider: FormBuilder, private http: HttpClient,) {

  }

  NuevaAsociacion(solicitud_numero: string) {

    this.router.navigate(['/RegistrarAsociacion/']);
  }

  listDeAsociaciones() {

  }




}
