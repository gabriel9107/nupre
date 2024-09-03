import { BaseRouteReuseStrategy } from "@angular/router";
import { environment } from "./environment.desarrollo";


export let urlNupre = {
    master: {
        GetHistorico: environment.baseUrl + "api/GetHistorico?",
        PostProgressBar: environment.baseUrl + "api/PostProgressBar",
        ProgressBar: environment.baseUrl + "api/GetProgressBar?solicitudNumero=",


    }
}