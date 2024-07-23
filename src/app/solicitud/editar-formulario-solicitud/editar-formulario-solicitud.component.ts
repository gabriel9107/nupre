import { Component, OnInit } from '@angular/core';
import { Solicitud_MedicoCreacionDTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-formulario-solicitud',
  templateUrl: './editar-formulario-solicitud.component.html',

})
export class EditarFormularioSolicitudComponent implements OnInit {

  constructor(private router: Router) {

  }
  modelo: Solicitud_MedicoCreacionDTO = {
    profesionalDocumento: '40221025725'
  };
  ngOnInit(): void {

  }

  GuardarSolicitud(solicitud: Solicitud_MedicoCreacionDTO) {
    console.log(solicitud);
    this.router.navigate(['/Solicitudes']);

  }
}
