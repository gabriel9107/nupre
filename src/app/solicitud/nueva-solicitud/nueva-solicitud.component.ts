import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';



@Component({
  selector: 'Registromaternidad',
  templateUrl: './nueva-solicitud.component.html'

})
export class NuevaSolicitudComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService
    ) {



  }

  submitted = false;
  public showErrorMessage: boolean = false;
  public errorMessage: string = "";
  public listSolicitud() {
    this.router.navigate(['/NUPRE']);
  }
  buscarDatosAfiliado() { }
  regresar() { }
  public GuardarSolicitud() { }

}
