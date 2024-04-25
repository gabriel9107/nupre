import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Solicitudes_listado } from '../Models/Solicitudes_Listado';
import { urlNUPRE } from '../rutas/Rutas';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class NupreService {

    baseUrl: string = "https://localhost:7296"
    constructor(private http: HttpClient) {

    }

    getAllSoliciudes(): Observable<Solicitudes_listado[]> {
        return this.http.get<Solicitudes_listado[]>(urlNUPRE.solicitudes.GetSolicitudes);
    }
}
