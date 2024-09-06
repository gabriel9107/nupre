import { BaseRouteReuseStrategy } from "@angular/router";
import { environment } from "./environment.desarrollo";


export let urlNupre = {

    solicitudes: {
        obtenerTodasLasSolicitudes: environment.baseUrl + "solicitudes",

        getDetalleSolicitud: environment.baseUrlLocal + "solicitudes/obtenerSolicitudPorId/",


    },



    master: {
        obtenerProfesiones_Especialidades: environment.baseUrlLocal + "profesiones/obtenerProfesionesPorTipo/",
        obtenerTodasLosTiposProfesiones: environment.baseUrlLocal + "profesiones/obtenerTipoProfesiones",
        GetHistorico: environment.baseUrlLocal + "api/GetHistorico?",
        PostProgressBar: environment.baseUrlLocal + "api/PostProgressBar",
        ProgressBar: environment.baseUrlLocal + "api/GetProgressBar?solicitudNumero=",
    },
    Utilidades: {

    }
}