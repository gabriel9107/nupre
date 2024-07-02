import { Component } from '@angular/core';

@Component({
  selector: 'Registromaternidad',
  templateUrl: './nueva-solicitud.component.html'

})
export class NuevaSolicitudComponent {
  submitted = false;
  public showErrorMessage: boolean = false;
  public errorMessage: string = "";

  buscarDatosAfiliado() { }
  regresar() { }
  public GuardarSolicitud() { }
}
