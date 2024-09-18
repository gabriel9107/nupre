
import { Component, CSP_NONCE, OnInit } from '@angular/core';


import { Solicitudes_listado } from '../../Models/Solicitudes_Listado';
import { Listado_Solicitud_Medico, Solicitud_basic_Informacion_DTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Router, Routes } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { BrowserModule } from '@angular/platform-browser';

import { Pipe, PipeTransform } from '@angular/core';
import { Profesionales_Estado_Solicitud } from '../../Models/Profesionales_Estado_Solicitud';


@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',

})
export class ListaSolicitudesComponent implements OnInit {
  //dato de pruebas
  data: any[] = [];
  lista = false;
  public headerSolicitud!: Solicitudes_listado;
  public details: Listado_Solicitud_Medico[] = [];
  public loading = false;
  public loading2 = false;
  public validafiltro = false;
  public ValidaFiltroBtn = false;
  public TextBtn = "";
  public TextoFiltro = "No existen registros dentro de estos parámetros.";
  public date = new Date();
  public busquedaForm!: FormGroup;
  listado!: any[];
  public TipoEstado!: Solicitudes_Estados[];
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
    this.buscarSolicitudes();
    this.obtenerEstados();
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

    this.router.navigate(['/Detalle/' + solicitudId]);
  }

  public exportarExcel() {
    console.log('funcion pendeinte para exportar a excel');
  }

  buscarSolicitudes() {

    this.servicio.getAllSoliciudes().subscribe((res: Listado_Solicitud_Medico[]) => {
      this.loading = true;
      this.details = res;
    }, error => {
      this.ValidarError = true;
      this.loading = false;
    }
    )
  }

  obtenerEstados() {
    this.servicio.obtenerListadoEstado().subscribe((res: Solicitudes_Estados[]) => {
      this.TipoEstado = res;
    });
  }




  getParamFiltro() {
    let param = "";
    let statusnumber = 0;

    let validarstatus = document.querySelector('input[name="tipoest"]:checked');
    if (validarstatus) {
      statusnumber = Number((validarstatus as HTMLInputElement).value);
    }

    return param;
  }
  public ValidadFiltros(btntype = false) {

    if (this.details === null)
      return;

    if (this.details != null && this.details.length === 0) {
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

  }
  public GetSolicitudes(btntype = false) {
    var parameter = this.getParamFiltro()
    this.loading = false;
    this.loading2 = true;


    // this.servicio.getSolicitudesListadoFiltro(parameter).subscribe()

  }

}
function resp(value: Profesionales_Estado_Solicitud): void {
  throw new Error('Function not implemented.');
}

