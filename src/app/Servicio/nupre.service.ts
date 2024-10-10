import { Injectable, signal } from "@angular/core";
import { Observable, from, map, retry, tap } from "rxjs";
import { Solicitudes_listado } from '../Models/Solicitudes_Listado';
import { urlNUPRE } from '../rutas/Rutas';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Listado_Solicitud_Medico, Profesionales_Filtro_Listado, Solicitud_basic_Informacion_DTO, Solicitud_Medico_Detalle_DTO, Solicitud_Medico_Detalle_View, Solicitud_MedicoCreacionDTO, Solicitud_MedicoCreacionPruebaDTO, solicitudCreacionDTO } from "../Models/Nupre/Listado_Solicitud_Medico";
import { environment } from "../environments/environment";
import { Municipio, Nacionalidad, Provincias } from '../Models/Nupre/comun_models';
import { ciudadano_consulta_DTOs, Ciudadano_FiltroDTO } from "../Models/Nupre/ciudadano_mastert";
import { urlNupre } from "../environments/urls";
import { Especialidades, Tipo_Especialidades } from "../Models/Nupre/Especialidades";
import { Profesionales_Estado_Solicitud } from "../Models/Profesionales_Estado_Solicitud";
import { Solicitudes_Estados } from "../Models/Solicitudes_Estados";
import { Profesionales_Solicitudes_Filtro_Listado } from "../Models/Profesionales_Solicitudes_Filtro_Listado";
import { Profesional_Listado_titulacionDTO, Profesional_titulacion, Profesional_TitulacionDTO } from "../Models/Nupre/Profesional_titulacion";
import { CrearProfesionalesAsociaciones_DTO, ProfesionalesAsociaciones, ProfesionalesAsociacionesTipoCata } from "../Models/asosiaciones";
import { JsonPipe } from "@angular/common";
import { Params } from '@angular/router';
import { Header } from "primeng/api";


import { Historico, Solicitudes_Actividades_Progress, Solicitudes_Actividades_Trans_Set_ViewModel } from '../Models/SolicitudActividades';

import { actividad as activadesDict } from '../Models/actividades';
import { localidades, Localidates_create_DTO } from "../Models/Nupre/localidades";


@Injectable({
    providedIn: 'root'
})
export class NupreService {
    httpOptions = {
        headers: new HttpHeaders({
            "access-control-allow-origin": "*",
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Methods': '*',
            'Content-Type': 'application/json'
        })
    }
    baseUrl: string = "https://localhost:7035"



    constructor(private http: HttpClient) {

    }



    //Solicitudes 


    nupreSolicitudDetalle(solicitudNumero: number): Observable<Solicitud_Medico_Detalle_View> {

        const url: string = this.baseUrl + '/solicitudes';

        // https://localhost:7035/solicitudes

        return this.http.get<Solicitud_Medico_Detalle_View>(urlNupre.solicitudes.obtenerTodasLasSolicitudes);
    }


    obtenerDetalelSolicitudbyId(solicitudNumero: number): Observable<Solicitud_basic_Informacion_DTO> {

        return this.http.get<Solicitud_basic_Informacion_DTO>(urlNupre.solicitudes.getDetalleSolicitud + solicitudNumero);
    }




    getSolicitudesBasicas(): Observable<Listado_Solicitud_Medico[]> {

        const url: string = this.baseUrl + '/solicitudes';

        return this.http.get<Listado_Solicitud_Medico[]>(urlNupre.solicitudes.obtenerTodasLasSolicitudes);


    }




    SolicitudDetalle(Solicitud_Numero: any): Observable<any> {

        let param = 'Solicitud_Numero=' + Solicitud_Numero;
        return this.http.get('https://localhost:7035/solicitudes/obtenerSolicitudPorId/1', { headers: this.httpOptions.headers });

    }


    // public crearSolicitud2(solicitud: solicitudCreacionDTO) {
    //     console.log('llego esto');
    //     console.log(solicitud);


    // const httpOptions1 = {
    //     headers: new HttpHeaders({ 'Accept': 'application/json' }),
    //   };


    //     return this.http.post('https://localhost:7035/solicitudes/prueba', solicitud)
    // }

    // profesional_Nombre_Completo?: string
    // profesional_Documento?: string
    // archivo_Cedula?: File

    private constuirFormData2(solicitud: Solicitud_MedicoCreacionPruebaDTO, cedula: File, archivo_Exequatur: File) {

        const formData = new FormData();

        solicitud.archivo_Cedula = cedula;
        solicitud.archivo_Exequatur = archivo_Exequatur;




        if (solicitud.profesional_Documento) {
            formData.append('profesional_Cedula', solicitud.profesional_Documento)

        }
        if (solicitud.profesional_Nombre_Completo) {
            formData.append('profesional_Nombre_Completo', solicitud.profesional_Nombre_Completo)
        }
        if (solicitud.archivo_Cedula) {
            formData.append('archivo_Cedula', cedula)
        }
        if (solicitud.archivo_Exequatur) {
            formData.append('archivo_Exequatur', archivo_Exequatur)
        }
        if (solicitud.profesional_Sexo) { formData.append('profesional_Sexo', solicitud.profesional_Sexo) }
        if (solicitud.nacionalidad_Numero) { formData.append('nacionalidad_Numero', "1") }

        if (solicitud.profesional_Exequatur) { formData.append('profesional_Exequatur', solicitud.profesional_Exequatur) }
        if (solicitud.profesional_Direccion) { formData.append('profesional_Direccion', solicitud.profesional_Direccion) }
        formData.append('municipio_Numero', "1")
        if (solicitud.profesional_Telefono1) { formData.append('profesional_Telefono1', solicitud.profesional_Telefono1) }
        if (solicitud.profesional_Telefono2) { formData.append('profesional_Telefono2', solicitud.profesional_Telefono2) }
        if (solicitud.profesional_Telefono3) { formData.append('profesional_Telefono3', solicitud.profesional_Telefono3) }
        if (solicitud.profesional_Mail) { formData.append('profesional_Mail', solicitud.profesional_Mail) }
        if (solicitud.asociacion_Registro_Patronal) { formData.append('asociacion_Registro_Patronal', solicitud.asociacion_Registro_Patronal.toString()) }
        if (solicitud.solicitud_Usuario_Cuenta) { formData.append('solicitud_Usuario_Cuenta', solicitud.solicitud_Usuario_Cuenta) }




        return formData


    }





    private constuirFormData(solicitud: solicitudCreacionDTO) {

        const formData = new FormData();

        if (solicitud.profesional_Documento) {
            formData.append('profesional_Documento', solicitud.profesional_Documento)

        }
        if (solicitud.profesional_Nombre_Completo) {
            formData.append('profesional_Nombre_Completo', solicitud.profesional_Nombre_Completo)
        }
        if (solicitud.archivo_Cedula) {
            formData.append('Archivo_Cedula', solicitud.archivo_Cedula)
        }


        return formData
    }


    public crearSolicitud2(solicitud: solicitudCreacionDTO, cedula: File, certificado: File) {


        const formData = this.constuirFormData(solicitud);

        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        return this.http.post(urlNupre.solicitudes.crearSolicitudprueba, formData, {
            headers: headers
        })
    }


    public crearSolicitud3(solicitud: Solicitud_MedicoCreacionPruebaDTO, cedula: File, certificado: File) {

        const formData = this.constuirFormData2(solicitud, cedula, certificado);
        console.log(formData);







        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        console.log(formData);
        console.log('antes');
        return this.http.post(urlNupre.solicitudes.crearSolicitudprueba, formData, {
            headers: headers
        })
    }


    public getSolicitudesListadoFiltro(param: any): Observable<any> {
        var myJsonString = JSON.stringify(param);
        return this.http.get<Listado_Solicitud_Medico[]>(urlNupre.solicitudes.obtenerSolicitudesFiltradas + param, { headers: this.httpOptions.headers });

    }



    // ----Informacion relacionada el empleador 

    public obtenerCiudadanos(ciudadano: Ciudadano_FiltroDTO): Observable<ciudadano_consulta_DTOs> {

        const params = new HttpParams()
            .set('empleador_Registro_Patronal', ciudadano.empleador_Registro_Patronal!.toString())
            .set('cedula', ciudadano.cedula!);



        return this.http.get<ciudadano_consulta_DTOs>(urlNupre.ciudadano.obtenerCiudadano, {
            params: params
        })


    }





    getCiudadano(No_cedula: any): Observable<ciudadano_consulta_DTOs> {





        return this.http.get<ciudadano_consulta_DTOs>('https://localhost:7035/utilidades/obtenerCiudadano/' + No_cedula)
    }


    getNacionalidades(): Observable<Nacionalidad[]> {
        return this.http.get<Nacionalidad[]>
            (
                'https://localhost:7035/utilidades/obtenerNacionalidad'
            )
    }

    getProvincias(): Observable<Provincias[]> {
        return this.http.get<Provincias[]>(
            'https://localhost:7035/utilidades/obtenerProvincias'
        )
    }

    getMunicipios(): Observable<Municipio[]> {
        return this.http.get<Municipio[]>(
            'https://localhost:7035/utilidades/obtenerMunicipios'
        )
    }



    public getData(): Observable<any> {
        return this.http.get<Solicitudes_listado[]>('https://localhost:7035/solicitudes');
    }

    getAllSoliciudes(): Observable<Listado_Solicitud_Medico[]> {
        return this.http.get<Listado_Solicitud_Medico[]>('https://localhost:7035/solicitudes');
    }



    getApplications(filtro: Profesionales_Filtro_Listado): Observable<Listado_Solicitud_Medico[]> {



        const params = new HttpParams()
            .set('draw', filtro.draw!)
            .set('pageIndex', filtro.PageIndex!)
            .set('pageSize', filtro.PageSize!)
            .set('cantidad_Registros', filtro.Cantidad_Registros!)

            .set('orderBy0', filtro.orderBy0!)
            .set('search', filtro.Search!)
            .set('empleador_Registro_Patronal', filtro.Empleador_Registro_Patronal!)
            .set('cedula', filtro.Cedula!)
            .set('nombre', filtro.Nombre!)
            .set('estado_Numero', filtro.Estado_Numero!)
            .set('anioInicio', filtro.AnioInicio!)
            .set('anioFin', filtro.AnioFin!)
            .set('solicitud_Numero', filtro.Solicitud_Numero!);




        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });



        return this.http.get<Listado_Solicitud_Medico[]>(urlNupre.solicitudes.obtenerSolicitudesFiltradas,
            {
                params: params

            });


    }



    obtenerListadoDeProfesiones(tipo: number): Observable<Especialidades[]> {
        return this.http.get<Especialidades[]>(urlNupre.master.obtenerProfesiones_Especialidades + tipo);
    }

    obtenerTipoDeprofesiones(): Observable<Tipo_Especialidades[]> {

        return this.http.get<Tipo_Especialidades[]>(urlNupre.master.obtenerTodasLosTiposProfesiones);

    }






    //Titulacion 


    private constuirformDataTitulacion(titulacion: Profesional_TitulacionDTO) {


        const formData = new FormData();
        if (titulacion.Solicitud_Numero) {

            formData.append('solicitud_Numero', String(titulacion.Solicitud_Numero));
        }
        if (titulacion.Especialidad_Tipo_Numero) {
            formData.append('especialidad_Tipo_Numero', String(titulacion.Especialidad_Tipo_Numero));
        }
        if (titulacion.Especialidad_Profesion_Numero) {
            formData.append('especialidad_Numero', String(titulacion.Especialidad_Profesion_Numero));
        }
        if (titulacion.Especialidad_Periodo) {
            formData.append('especialidad_Periodo', titulacion.Especialidad_Periodo.toString());
        }
        if (titulacion.Documento_Codigo) {

            formData.append('documento_Codigo', titulacion.Documento_Codigo);
        }

        return formData;

    }

    public guardarTitulacion(param: Profesional_TitulacionDTO) {

        const formData = this.constuirformDataTitulacion(param);


        console.log(param);
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        return this.http.post(urlNupre.titulacion.guardartitulacion, formData, { headers: headers });
    }


    public listadoTitulacionPorSolicitud(numero_solcitiud: number): Observable<Profesional_Listado_titulacionDTO[]> {

        return this.http.get<Profesional_Listado_titulacionDTO[]>(urlNupre.titulacion.obtenerListadoTitulacionByNumeroSolicitud + numero_solcitiud)
    }


    //Asociaciones 

    obtenerListadoAsociacionesBySolicitudId(numero_solicitud: number): Observable<ProfesionalesAsociaciones[]> {
        return this.http.get<ProfesionalesAsociaciones[]>(urlNupre.asociaciones.obtenerListadoAsociaciones + numero_solicitud)
    }


    obtenerListadoAsociaciones(): Observable<ProfesionalesAsociacionesTipoCata[]> {
        return this.http.get<ProfesionalesAsociacionesTipoCata[]>(urlNupre.asociaciones.obtener_tipo_Asociaciones);
    }

    guardarAsociacion(param: CrearProfesionalesAsociaciones_DTO) {
        const formData = new FormData();

        formData.append('solicitud_Numero', String(param.solicitud_Numero));
        formData.append('asociacion_Numero', String(param.profesional_Asociacion_Codigo));
        formData.append('profesional_Asociacion_Codigo', String(param.asociacion_Codigo));
        formData.append('asociacion_Registro_Patronal', String(param.asociacion_Registro_Patronal));
        formData.append('Documento', param.Documento);



        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });
        return this.http.post(urlNupre.asociaciones.crearSolicitudAsociaciones, formData, { headers: headers })
    }


    someterSolicitud(numero_solicitud: number): Observable<any> {

        let param = '/' + numero_solicitud;

        return this.http.get(urlNupre.solicitudes.SometeSolicitud + param, { headers: this.httpOptions.headers });
    }



    //Generico 

    obtenerListadoEstado(): Observable<Solicitudes_Estados[]> {
        return this.http.get<Solicitudes_Estados[]>(urlNupre.Utilidades.obtener_Profesionales_Estado_Solicitudes);

    }

    obtenerDescripcionEstado(estado_numero: number): Observable<Solicitudes_Estados> {
        return this.http.get<Solicitudes_Estados>(urlNupre.Utilidades.obtener_Profesionales_Estado_Solicitudes_Descripcion + estado_numero);
    }




    //proceso 

    private _solicitud_Actividades_Progress: Solicitudes_Actividades_Progress[] = [];

    actividadesRealizadas: number = 0;

    get Actividades_Progress(): Solicitudes_Actividades_Progress[] {
        return this._solicitud_Actividades_Progress;
    }
    get SolicitudSometida(): boolean {
        return this.Actividades_Progress.find(
            actividad => actividad.actividad_Numero == activadesDict.SometerSolicitud)?.actividad_Completa == 1
    }


    ReadActividadProgressBar(solicitud_Numero: number) {


        return this.GetActividadProgressBar(solicitud_Numero)
            .subscribe(resp => {
                this._solicitud_Actividades_Progress = resp;
                this.actividadesRealizadas = this._solicitud_Actividades_Progress.filter(actividad => actividad.actividad_Completa).length;
            })
    }
    InsertActividadProgressBar(data: Solicitudes_Actividades_Trans_Set_ViewModel) {
        return this.PostActividadProgressBar(data)
            .subscribe(resp => {
                this.ReadActividadProgressBar(data.solicitud_Numero);
            })
    }

    GetHistorico(solicitud_Numero: number): Observable<[Historico[]]> {
        return this.http.get<[Historico[]]>(urlNupre.master.GetHistorico + `solicitud_Numero=${solicitud_Numero}`);
    }
    GetActividadProgressBar(solicitud_Numero: number): Observable<any[]> {

        return this.http.get<any[]>(urlNupre.ProgressBar.ProgressBar + solicitud_Numero);
    }
    PostActividadProgressBar(solicitudes_Actividades_Trans_Inserta: Solicitudes_Actividades_Trans_Set_ViewModel) {
        return this.http.post(
            urlNupre.master.PostProgressBar, solicitudes_Actividades_Trans_Inserta);
    }




    //localidades

    obtenerLocalides(solicitud_numero: number): Observable<localidades[]> {
        console.log(solicitud_numero)
        return this.http.get<localidades[]>(urlNupre.localidades.obtener_localides_Por_Solicitud + solicitud_numero)
    }


    
    guardarLocalidades(param: Localidates_create_DTO) {
        const formData = new FormData();

        formData.append('solicitud_Numero', String(param.solicitud_Numero));
        formData.append('prestadora_Numero', String(param.prestadora_Numero));
        formData.append('localidad_Direccion', String(param.localidad_Direccion));
        formData.append('municipio_Numero', String(param.municipio_Numero));
        formData.append('localidad_Telefono1', String(param.localidad_Telefono1));
        formData.append('localidad_Telefono2', String(param.localidad_Telefono2));
        formData.append('localidad_Detalle', String(param.localidad_Detalle));
        

        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });
        return this.http.post(urlNupre.localidades.guardar_localidad_medico, formData, { headers: headers })
    }


}
