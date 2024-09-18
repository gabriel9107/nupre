import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitud_MedicoCreacionDTO, solicitudCreacionDTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'Registromaternidad',
  templateUrl: './nueva-solicitud.component.html'

})
export class NuevaSolicitudComponent {

  constructor(private router: Router,

    private solicitudServicio: NupreService) {

  }
  GuardarSolicitud(solicitud: solicitudCreacionDTO, cedula: File, certificacion: File) {
 

    // this.solicitudServicio.crearSolicitud2(solicitud).subscribe(() => {
    //   this.router.navigate(['/solicitudes'])
    // }, error => console.error(error));

  }


}
