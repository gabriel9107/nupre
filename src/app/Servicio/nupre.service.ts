import { Injectable } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { Solicitudes_listado } from '../Models/Solicitudes_Listado';
import { urlNUPRE } from '../rutas/Rutas';
import { HttpClient } from "@angular/common/http";
import { Listado_Solicitud_Medico } from "../Models/Nupre/Listado_Solicitud_Medico";

@Injectable({
    providedIn: 'root'
})
export class NupreService {

    baseUrl: string = "https://localhost:7035"
    constructor(private http: HttpClient) {

    }


    getSolicitudesBasicas(): Observable<Listado_Solicitud_Medico[]> {

        const url: string = this.baseUrl + '/solicitudes';

        return this.http.get<Listado_Solicitud_Medico[]>('https://localhost:7035/solicitudes');


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
