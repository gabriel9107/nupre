import { Component, Input } from '@angular/core';
import { Listado_Solicitud_Medico } from '../../Models/Nupre/Listado_Solicitud_Medico';

@Component({
  selector: 'app-detalle-basico',
  templateUrl: './detalle-basico.component.html',

})
export class DetalleBasicoComponent {
  @Input() listadoLicencias: Listado_Solicitud_Medico[] = [];


}
