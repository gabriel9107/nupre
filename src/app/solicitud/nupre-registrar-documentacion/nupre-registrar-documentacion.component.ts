import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { Listado_Solicitud_Medico } from '../../Models/Nupre/Listado_Solicitud_Medico';

@Component({
  selector: 'app-nupre-registrar-documentacion',
  templateUrl: './nupre-registrar-documentacion.component.html',

})
export class NupreRegistrarDocumentacionComponent implements OnInit {
  public solicitudId!: number;
  public titulo: boolean = false;
  @Input() details!: Listado_Solicitud_Medico;

  constructor
    (public activedRoute: ActivatedRoute,
      private router: Router, private servicio: NupreService
    ) {
    let params: any = this.activedRoute.snapshot.params;
    this.solicitudId = params.id;

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  detalleNuevasolicitud() {
    this.router.navigate(['/RegistrarTitulo/']);

  }

}
