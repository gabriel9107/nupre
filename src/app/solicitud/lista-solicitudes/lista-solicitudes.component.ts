import { Component, OnInit } from '@angular/core';
import { Solicitudes_listado } from '../../Models/Solicitudes_Listado';
import { Listado_Solicitud_Medico } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',

})
export class ListaSolicitudesComponent implements OnInit {
  public headerSolicitud!: Solicitudes_listado;
  public detalle!: Listado_Solicitud_Medico[]
  public loading = true;
  public loading2 = false;
  public validafiltro = false;
  public ValidaFiltroBtn = false;
  public TextBtn = "";
  public TextoFiltro = "No existen registros dentro de estos parámetros.";
  public date = new Date();
  public busquedaForm!: FormGroup;
  public TipoEstado!: Solicitudes_Estados[]
  //public Afiliado_NSS = 154252036;
  public ValidarError = false;
  public ErrorMessage: string = '';


  paginate: any =
    {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 0
    };
  public listyear: any[] = [
    { year: (new Date()).getFullYear() - 1 },
    { year: (new Date()).getFullYear() },
  ];

  constructor(private fb: FormBuilder, private router: Router, private servicio: NupreService) {


  }
  ngOnInit(): void {
    //nBuscar Estado de las solicitudes 
    //obtener las solicitudes
    // this.servicio.getAllSoliciudes().subscribe({
    //   next:()
    // })

    throw new Error('Method not implemented.');
  }

  createFormActive() {
    this.busquedaForm = this.fb.group({
      Search: '',
      pageindex: 0,
      pagesize: 10,
      currentPage: 1,
      Cantidad_Registros: 0,
      fechaInicio: `${new Date().getFullYear() - 1}-01-01`,
      fechaFin: new Date().toISOString().slice(0, 10),
    });
  }


  public nuevasolicitud() {


    this.router.navigate(['/RegistrarSolicitud/']);
  }
  public detallesolicitud(solicitudId = 0) {
    // this.router.navigate(['/Lactancia/Detalle/' + solicitudId]);
  }

  public getestados() {
    // this.service.getMaternidadEstados().subscribe((res: Solicitudes_Estados[]) => {
    //   this.TipoEstado = res;
    // });
  }
  getParamFiltro() {
    let param = "";
    let statusnumber = 0;

    let validarstatus = document.querySelector('input[name="tipoest"]:checked');
    if (validarstatus) {
      statusnumber = Number((validarstatus as HTMLInputElement).value);
    }

    // param.draw = this.filtro.draw!;
    // param.AnioInicio = this.busquedaForm.get('fechaInicio')?.value;
    // param.AnioFin = this.busquedaForm.get('fechaFin')?.value;
    // param.PageIndex = this.filtro.PageIndex;
    // param.Estado_Numero = statusnumber;
    // param.Cantidad_Registros = this.filtro.Cantidad_Registros;
    // param.Afiliado_NSS_Madre = this.user.UsuarioNss;
    // param.Search = this.busquedaForm.get('Search')?.value;
    // this.filtro.PageSize = this.busquedaForm.get('pagesize')?.value;
    // param.PageSize = this.filtro.PageSize;

    return param;
  }
  public ValidadFiltros(btntype = false) {

    if (this.detalle === null)
      return;

    if (this.detalle != null && this.detalle.length === 0) {
      this.validafiltro = true;
      if (btntype) {
        this.validafiltro = true;
        this.TextBtn = this.busquedaForm.get('Search')?.value;
      } else {
        this.ValidaFiltroBtn = false;
        this.TextBtn = "";
      }
    } else this.validafiltro = false;
  }
  public pageIndexChange(draw: any) {
    // this.filtro.draw = draw;
    // this.filtro.PageIndex = 1; // Number(Number(this.filtro.PageSize!)*( draw-1))
    // this.GetSolicitudes();
  }
  public GetSolicitudes(btntype = false) {
    var parameter = this.getParamFiltro()
    this.loading = true;
    this.loading2 = true;

    // this.service.getLactanciaListadoSolicitud_Afiliada(parameter)
    //   .subscribe((res: IApiResult) => {
    //     this.loading = false;
    //     this.loading2 = false;
    //     /*
    //     this.filtro.draw = res.Draw;
    //     this.filtro.PageIndex = res.PageIndex;
    //     this.filtro.PageSize = res.PageSize;
    //     */
    //    let result = res.result as Maternidad_Listados_Solicitudes;

    //     this.filtro.Cantidad_Registros = result.recordsTotal
    //     this.headerSolicitud = result;
    //     this.detalle = this.headerSolicitud.data!;
    //     this.ValidadFiltros(btntype)

    //   }, error => {
    //     this.ValidarError = true;
    //     this.ErrorMessage = error.error.errorMessage.join('\n');

    //     this.loading = false
    //     this.loading2 = false
    //     this.validafiltro = true;
    //     this.ValidadFiltros(btntype)
    //     //this._toast.error('', 'Error');
    // });
  }

}
