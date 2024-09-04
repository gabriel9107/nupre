import { Injectable } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { Solicitudes_listado } from '../Models/Solicitudes_Listado';
import { urlNUPRE } from '../rutas/Rutas';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Listado_Solicitud_Medico, Solicitud_Medico_Detalle_DTO, Solicitud_Medico_Detalle_View, Solicitud_MedicoCreacionDTO } from "../Models/Nupre/Listado_Solicitud_Medico";
import { environment } from "../environments/environment";
import { Municipio, Nacionalidad, Provincias } from "../Models/Nupre/comun_models";
import { ciudadano_consulta_DTOs } from "../Models/Nupre/ciudadano_mastert";
import { urlNupre } from "../environments/urls";

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


    // ----Informacion relacionada el empleador 

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



    nupreSolicitudDetalle(solicitudNumero: number): Observable<Solicitud_Medico_Detalle_View> {

        const url: string = this.baseUrl + '/solicitudes';

        // https://localhost:7035/solicitudes

        return this.http.get<Solicitud_Medico_Detalle_View>('https://localhost:7035/solicitudes');
    }


    obtenerDetalelSolicitudbyId(solicitudNumero: number): Observable<Solicitud_Medico_Detalle_DTO> {

        return this.http.get<Solicitud_Medico_Detalle_DTO>(urlNupre.solicitudes.getDetalleSolicitud + solicitudNumero);
    }




    getSolicitudesBasicas(): Observable<Listado_Solicitud_Medico[]> {

        const url: string = this.baseUrl + '/solicitudes';

        return this.http.get<Listado_Solicitud_Medico[]>('https://localhost:7035/solicitudes');


    }




    SolicitudDetalle(Solicitud_Numero: any): Observable<any> {
        let param = 'Solicitud_Numero=' + Solicitud_Numero;
        return this.http.get('https://localhost:7035/solicitudes/obtenerSolicitudPorId/1', { headers: this.httpOptions.headers });

    }


    public crearSolicitud(solicitud: Solicitud_MedicoCreacionDTO) {
        console.log('servicios');
        console.log(solicitud);
        return this.http.post('https://localhost:7035/solicitudes', solicitud)
    }


    public getData(): Observable<any> {
        return this.http.get<Solicitudes_listado[]>('https://localhost:7035/solicitudes');
    }

    getAllSoliciudes(): Observable<Listado_Solicitud_Medico[]> {
        return this.http.get<Listado_Solicitud_Medico[]>('https://localhost:7035/solicitudes');
    }


    getprofesionalesList(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl + 'solicitudes/obtenertodas');
    }
}
