import { BaseRouteReuseStrategy } from "@angular/router";
import { environment } from "./environment.desarrollo";


export let urlNupre = {

    solicitudes: {
        getDetalleSolicitud: environment.baseUrlLocal + "api/ObtenerPorId/"
    },

    master: {
        GetHistorico: environment.baseUrlLocal + "api/GetHistorico?",
        PostProgressBar: environment.baseUrlLocal + "api/PostProgressBar",
        ProgressBar: environment.baseUrlLocal + "api/GetProgressBar?solicitudNumero=",


    }
}