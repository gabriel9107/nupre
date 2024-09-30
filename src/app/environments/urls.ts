import { BaseRouteReuseStrategy } from "@angular/router";
import { environment } from "./environment.desarrollo";


export let urlNupre = {




    solicitudes: {



        crearSolicitud: environment.baseUrlLocal + "solicitudes/crearSolicituDocumento",

        crearSolicitudprueba: environment.baseUrlLocal + "solicitudes/prueba",

        obtenerSolicitudesFiltradas: environment.baseUrlLocal + "solicitudes/obtenerSolicitud/",
        obtenerTodasLasSolicitudes: environment.baseUrl + "solicitudes",


        getDetalleSolicitud: environment.baseUrlLocal + "solicitudes/obtenerSolicitudPorId/",


    },
    ProgressBar: {
        ProgressBar: environment.baseUrlLocal + "GetProgressBar",

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
    asociaciones: {

        crearSolicitudAsociaciones: environment.baseUrlLocal + "asociaciones/",


        obtener_tipo_Asociaciones: environment.baseUrlLocal + "asociaciones/obtenerListadoAsociaciones",
        obterAsociacion: environment.baseUrlLocal + "asociacion/obtenerAsociacionesPorId",

        obtenerListadoAsociaciones: environment.baseUrlLocal + "asociaciones/ListadoAsociaciones"

    },

    ciudadano: {
        obtenerCiudadano: environment.baseUrlLocal + "ciudadano/obtenerCiudadanoFiltro",
    },

    Utilidades: {
        obtener_Profesionales_Estado_Solicitudes: environment.baseUrlLocal + "utilidades/obtenerListadoEstado",
        obtener_Profesionales_Estado_Solicitudes_Descripcion: environment.baseUrlLocal + "utilidades//ObtenerDescripcionEstado/",
    }

}