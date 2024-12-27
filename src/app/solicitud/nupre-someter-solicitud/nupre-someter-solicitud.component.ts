import { Component, CSP_NONCE, Input, OnInit } from '@angular/core';
import { Profesionales_Asociacon_Trans_view, ProfesionalesAsociaciones } from '../../Models/asosiaciones';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NupreService } from '../../Servicio/nupre.service';
import { IApiResult } from '../../Models/Api/apiResult';
import { Solicitud_Medico_Detalle_DTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { Profesional_Listado_titulacionDTO } from '../../Models/Nupre/Profesional_titulacion';
import { localidades } from '../../Models/Nupre/localidades';

@Component({
  selector: 'app-nupre-someter-solicitud',
  templateUrl: './nupre-someter-solicitud.component.html',

})
export class NupreSometerSolicitudComponent implements OnInit {


  solicitudId?: number;
  public loading = false;

  public boton = false;
  public titulosEvalualr: Profesional_Listado_titulacionDTO[] = [];

  public asociacionEvalular: ProfesionalesAsociaciones[] = [];




  public detalleSolicitud!: Profesionales_Asociacon_Trans_view;

  public fechasolicitud = "";
  public afiliado_Nombre_Completo = ""
  public afiliado_Celular = "";


  checkTitulos = false;
  checkAsociaciones = false;
  checkLocalidades = false;



  submitCliked = false;

  @Input() detalle!: Solicitud_Medico_Detalle_DTO;

  @Input() listadoAsociaciones: ProfesionalesAsociaciones[] = [];
  @Input() listadoTitulo: Profesional_Listado_titulacionDTO[] = [];
  @Input() listadoLocalidades: localidades[] = [];


  constructor(public activedRoute: ActivatedRoute, public servicio: NupreService,
    private router: Router, public toastr: ToastrService) {
    let params: any = this.activedRoute.snapshot.params;

    this.solicitudId = params.id

  }

  ngOnInit(): void {

    if (this.detalle != null) {

      this.fechasolicitud = this.detalle.registro_Fecha!;
      this.afiliado_Nombre_Completo = this.detalle.profesional_Nombre_Completo!;
      this.afiliado_Celular = this.detalle.profesional_Telefono1!;
      this.loading = false;


    }
    this.checkTitulos = false;
    this.checkAsociaciones = false;
    this.checkLocalidades = false;


    if (this.listadoTitulo && this.listadoTitulo.length >= 1) {

      this.titulosEvalualr = this.listadoTitulo.filter(x => x.especialidad_Estado_Numero == 1 || x.especialidad_Estado_Numero == 0);
      this.checkTitulos = true;
    }


    if (this.listadoAsociaciones && this.listadoAsociaciones.length >= 1) {

      this.asociacionEvalular = this.listadoAsociaciones;
      this.checkAsociaciones = true;
      this.loading = false;
    }
    if (this.listadoLocalidades.length >= 1) {

      this.asociacionEvalular = this.listadoAsociaciones;
      this.checkAsociaciones = true;
      this.checkLocalidades = true;
      this.loading = false;
    }



  }






  Someter() {
    if (!this.checkTitulos) {
      this.toastr.warning('No puedo enviar una solicitud sin registrar los títulos correspondientes', 'Advertencia');
      return;
    }

    if (!this.checkAsociaciones) {
      this.toastr.warning('No puedo enviar una solicitud sin registrar la asociaciones correspondientes', 'Advertencia');
      return;
    }
    if (!this.checkLocalidades) {
      this.toastr.warning('No puedo enviar una solicitud sin registrar las localidades correspondientes', 'Advertencia');
      return;
    }
    this.submitCliked = true;
    this.loading = true;
    this.servicio.someterSolicitud(this.solicitudId!).subscribe((resp: IApiResult) => {

      this.toastr.success("Información", 'Solicitud sometida con éxito');
      this.loading = false;
      this.router.navigate([''])

    }, error => {
      this.loading = false
      this.toastr.error(error.error.errorMessage.join("\n"), 'Información');
      this.refreshPage();
    });
  }


  regresar() {
    window.history.back();
  }


  refreshPage(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


}
