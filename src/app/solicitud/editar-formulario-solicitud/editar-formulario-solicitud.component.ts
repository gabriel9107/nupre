import { Component, OnInit } from '@angular/core';
import { Solicitud_MedicoCreacionDTO, solicitudCreacionDTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-formulario-solicitud',
  templateUrl: './editar-formulario-solicitud.component.html',

})
export class EditarFormularioSolicitudComponent implements OnInit {

  constructor(private router: Router) {

  }
  modelo: solicitudCreacionDTO = {
    profesional_Documento: '40221025725'
  };
  ngOnInit(): void {

  }

  GuardarSolicitud(solicitud: solicitudCreacionDTO) {
 
    this.router.navigate(['/Solicitudes']);

  }
}
