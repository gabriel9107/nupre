import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitud_MedicoCreacionDTO } from '../../Models/Nupre/Listado_Solicitud_Medico';



@Component({
  selector: 'Registromaternidad',
  templateUrl: './nueva-solicitud.component.html'

})
export class NuevaSolicitudComponent {

  constructor(private router: Router, private solicitudServicio: NupreService) {

  }
  GuardarSolicitud(solicitud: Solicitud_MedicoCreacionDTO) {

    this.solicitudServicio.crearSolicitud(solicitud).subscribe(() => {
      this.router.navigate(['/solicitudes'])
    }, error => console.error(error));

  }

}
