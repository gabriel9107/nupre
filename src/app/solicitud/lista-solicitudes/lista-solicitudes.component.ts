
import { Component, OnInit } from '@angular/core';
import { Solicitudes_listado } from '../../Models/Solicitudes_Listado';
import { Listado_Solicitud_Medico } from '../../Models/Nupre/Listado_Solicitud_Medico';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Solicitudes_Estados } from '../../Models/Solicitudes_Estados';
import { Router } from '@angular/router';
import { NupreService } from '../../Servicio/nupre.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor, NgIf } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',

})
export class ListaSolicitudesComponent implements OnInit {
  //dato de pruebas
  data: any[] = [];




  public headerSolicitud!: Solicitudes_listado;





  public details: Listado_Solicitud_Medico[] = [];

  // [{
  //   profesionalesSolicitudesTranId: 1,
  //   solicitudNumero: 1,
  //   solicitudFecha: "2024-06-11T17:46:25.365",
  //   profesionalDocumento: "string",
  //   profesionalNombreCompleto: "string",
  //   nacionalidadNumero: 0,
  //   profesionalSexo: "string",
  //   profesionalExequatur: "string",
  //   profesionalDireccion: "string",
  //   municipioNumero: 0,
  //   profesionalTelefono1: "string",
  //   profesionalTelefono2: "string",
  //   profesionalTelefono3: "string",
  //   profesionalMail: "string",
  //   solicitudEstadoNumero: 0,
  //   solicitudEstadoFecha: "2024-06-11T17:46:25.365",
  //   solicitudEstadoNota: "string",
  //   solicitudUsuarioCuenta: "string",
  //   solicitudActualizarDatos: "string",
  //   asociacionRegistroPatronal: 0,
  //   motivoNumero: 0,
  //   solicitudCertificadoNumero: "string",
  //   registroEstado: "string",
  //   registroUsuario: "string",
  //   registroFecha: "2024-06-11T17:46:25.365"
  // }];
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
    this.buscarSolicitudes();
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


    // this.servicio.getData().subscribe(datos => this.details = datos);


    // this.servicio.getAllSoliciudes().subscribe((res: Listado_Solicitud_Medico[]) => {
    //   this.details = res;
    //   console.log(res);
    // });


    // this.servicio.getData().subscribe(data => {
    //   this.details = data;
    //   console.log(data);
    // })


    // this.servicio.getSolicitudesBasicas().subscribe((res: Listado_Solicitud_Medico[]) => {
    //   this.details = res;

    //   console.log("Arrys");
    //   console.log(this.details);
    // });

    this.servicio.getAllSoliciudes().subscribe({
      next: (todos) => {
        console.log(todos);
        this.details = todos;
      }
    })
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

  }

}
