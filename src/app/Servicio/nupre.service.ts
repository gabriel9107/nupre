import { Injectable } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { Solicitudes_listado } from '../Models/Solicitudes_Listado';
import { urlNUPRE } from '../rutas/Rutas';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Listado_Solicitud_Medico } from "../Models/Nupre/Listado_Solicitud_Medico";

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


    getSolicitudesBasicas(): Observable<Listado_Solicitud_Medico[]> {

        const url: string = this.baseUrl + '/solicitudes';

        return this.http.get<Listado_Solicitud_Medico[]>('https://localhost:7035/solicitudes');


    }


    SolicitudDetalle(Solicitud_Numero: any): Observable<any> {
        let param = 'Solicitud_Numero=' + Solicitud_Numero;
        return this.http.get('https://localhost:7035/solicitudes' + param, { headers: this.httpOptions.headers });

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
