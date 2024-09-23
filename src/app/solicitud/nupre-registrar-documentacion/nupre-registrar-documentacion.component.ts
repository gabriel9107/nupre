import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { Listado_Solicitud_Medico } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Profesional_Listado_titulacionDTO, Profesional_titulacion } from '../../Models/Nupre/Profesional_titulacion';

@Component({
  selector: 'app-nupre-registrar-documentacion',
  templateUrl: './nupre-registrar-documentacion.component.html',

})
export class NupreRegistrarDocumentacionComponent implements OnInit {
  public solicitudId!: number;


  public tituloNombre!: string;
  public tituloProfesion: boolean = false;


  public listadoDto: Profesional_Listado_titulacionDTO[] = [];


  public listado: Profesional_titulacion[] = [];
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
    this.consultarListadoTitulacion(this.solicitudId);
  }

  consultarListadoTitulacion(solicitud_numero: number) {
    this.servicio.listadoTitulacionPorSolicitud(solicitud_numero).subscribe((resp: Profesional_Listado_titulacionDTO[]) => {
      this.listadoDto = resp;
      console.log(this.listado);
      if (this.listado.length > 0) {
        this.tituloProfesion = true;
      }
    });
  }


  public Nuevasolicitud(solicitudId: number) {

    this.router.navigate(['/RegistrarTitulo/' + solicitudId + '/' + this.tituloProfesion]);
  }

}
