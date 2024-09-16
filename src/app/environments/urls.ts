import { BaseRouteReuseStrategy } from "@angular/router";
import { environment } from "./environment.desarrollo";


export let urlNupre = {

    solicitudes: {

        crearSolicitud: environment.baseUrlLocal + "crearSolicituDocumento",
        obtenerTodasLasSolicitudes: environment.baseUrl + "solicitudes",
        obtenerSolicitudesFiltradas: environment.baseUrlLocal + "solicitudesFiltro",

        getDetalleSolicitud: environment.baseUrlLocal + "solicitudes/obtenerSolicitudPorId/",


    },

    titulacion: {
        guardartitulacion: environment.baseUrlLocal + "titulacion/guardarTitulacion/",
        obtenerListadoTitulacionByNumeroSolicitud: environment.baseUrlLocal + "titulacion/listadoTitulacion/",

    },
    master: {
        obtenerProfesiones_Especialidades: environment.baseUrlLocal + "profesiones/obtenerProfesionesPorTipo/",
        obtenerTodasLosTiposProfesiones: environment.baseUrlLocal + "profesiones/obtenerTipoProfesiones",

        GetHistorico: environment.baseUrlLocal + "api/GetHistorico?",
        PostProgressBar: environment.baseUrlLocal + "api/PostProgressBar",
        ProgressBar: environment.baseUrlLocal + "api/GetProgressBar?solicitudNumero=",


    },
    Utilidades: {
        obtener_Profesionales_Estado_Solicitudes: environment.baseUrlLocal + "utilidades/obtenerListadoEstado",
        obtener_Profesionales_Estado_Solicitudes_Descripcion: environment.baseUrlLocal + "utilidades//ObtenerDescripcionEstado/",
    }
}