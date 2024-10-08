
import { Component, CSP_NONCE, OnInit } from '@angular/core';


import { Solicitudes_listado } from '../../Models/Solicitudes_Listado';
import { Listado_Solicitud_Medico, Profesionales_Filtro_Listado, Solicitud_basic_Informacion_DTO } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Router, Routes, Params } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { BrowserModule } from '@angular/platform-browser';

import { Pipe, PipeTransform } from '@angular/core';
import { Profesionales_Estado_Solicitud } from '../../Models/Profesionales_Estado_Solicitud';
import { FiltroBase } from '../../Models/FiltroBase';

import { User } from '../../auth/User';
import getUserInfo from '../../auth/JWT';


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


  public currentUser: User | undefined;
  public empresa: boolean = false;


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


  public filtro: FiltroBase = {
    draw: 1,
    PageIndex: 0,
    PageSize: 10,
    Cantidad_Registros: 0,
  }

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


    this.createFormActive();
  }





  ngOnInit(): void {
    this.currentUser = getUserInfo();
    // this.ge();
    this.obtenerEstados();
    this.GetSolicitudes();
  }




  public nuevasolicitud() {


    this.router.navigate(['/RegistrarSolicitud/']);
  }
  public detallesolicitud(solicitudId = 0) {

    this.router.navigate(['/Detalle/' + solicitudId]);
  }

  retornarEstado() {
    return 'jol';
  }

  public exportarExcel() {
    console.log('funcion pendeinte para exportar a excel');
  }

  // buscarSolicitudes(btntype = false, changeEstado = false) {

  //   var parameter = this.getfilterparamters();

  //   //cambiando a implementar filtros 

  //   this.servicio.getApplications(parameter).subscribe((res: Listado_Solicitud_Medico[]) => {

  //     this.details = res;
  //   },
  //     error => {
  //       this.ValidarError = true;
  //       this.loading = false;
  //     });



  //   //funcional anteriormente 
  //   // this.servicio.getAllSoliciudes().subscribe((res: Listado_Solicitud_Medico[]) => {

  //   //   this.details = res;
  //   // }, error => {
  //   //   this.ValidarError = true;
  //   //   this.loading = false;
  //   // }
  //   // )
  // }

  obtenerEstados() {
    this.servicio.obtenerListadoEstado().subscribe((res: Solicitudes_Estados[]) => {
      this.TipoEstado = res;
      console.log(res)
    });
  }




  getfilterparamters() {
    let param = new Profesionales_Filtro_Listado;
    let statusnumber = 0;

    param.Solicitud_Numero = this.busquedaForm.get('Search')?.value;

    param.AnioInicio = this.busquedaForm.get('fechaInicio')?.value;
    param.AnioFin = this.busquedaForm.get('fechaFin')?.value;
    param.Empleador_Registro_Patronal = this.currentUser?.UsuarioRegistroPatronal;
    let validarstatus = document.querySelector('input[name="tipoest"]:checked');
    if (validarstatus) {
      statusnumber = Number((validarstatus as HTMLInputElement).value);
      console.log(statusnumber);
    }


    param.draw = this.filtro.draw!;
    param.PageIndex = this.filtro.PageIndex;
    param.Estado_Numero = statusnumber;
    param.Cantidad_Registros = this.filtro.Cantidad_Registros;

    param.Search = this.busquedaForm.get('Search')?.value;
    this.filtro.PageSize = this.busquedaForm.get('pagesize')?.value;
    param.PageSize = this.filtro.PageSize;
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

  public GetSolicitudes(btntype = false, changeEstado = false) {
    var parameter = this.getfilterparamters()
    this.loading = true;

    if (btntype) {
      parameter.draw = 1;
      this.filtro.draw = 1
    }

    // if (this.currentUser!.UsuarioRegistroPatronal > 0) {
    //   this.empresa = true;       
    // }

    this.servicio.getApplications(parameter).subscribe((res: Listado_Solicitud_Medico[]) => {

      this.details = res;
      console.log('filtrando por solicitud ', res)
      this.loading = false;

    });


  }
  public LimpiarFiltros() {
    this.busquedaForm.patchValue(
      {
        Search: '',
        pageindex: 0,
        pagesize: 10,
        currentPage: 1,
        Cantidad_Registros: 0,
        fechaInicio: `${new Date().getFullYear() - 1}-01-01`,
        fechaFin: new Date().toISOString().slice(0, 10),
      }) //= ;

    document.getElementById('idtypestatus')?.setAttribute('value', '0')
    this.GetSolicitudes(false, false)
  }

}
function resp(value: Profesionales_Estado_Solicitud): void {
  throw new Error('Function not implemented.');
}

