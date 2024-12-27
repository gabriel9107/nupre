import { BaseRouteReuseStrategy } from "@angular/router";
import { environment } from "./environment.desarrollo";


export let urlNupre = {




    solicitudes: {

        SometeSolicitud: environment.baseUrlLocal + "solicitudes/someterSolicitud?solicitud=",

        // crearSolicitud: environment.baseUrlLocal + "solicitudes/crearSolicituDocumento",

        crearSolicitud: environment.baseUrlLocal + "solicitudes/crear",
        editarSolicitud: environment.baseUrlLocal + "solicitudes/actualizar",

        obtenerSolicitudesFiltradas: environment.baseUrlLocal + "solicitudes/obtenerSolicitud?solicitud=",
        obtenerTodasLasSolicitudes: environment.baseUrl + "solicitudes",


        getDetalleSolicitud: environment.baseUrlLocal + "solicitudes/obtenerSolicitudPorId/",
        descargarDocumento: environment.baseUrlLocal + "solicitudes/downloadFile/"



    },
    ProgressBar: {
        ProgressBar: environment.baseUrlLocal + "Actividades/GetProgressBar?solicitudNumero=",

    },

    titulacion: {
        guardartitulacion: environment.baseUrlLocal + "titulacion/guardarTitulacion/",
        obtenerListadoTitulacionByNumeroSolicitud: environment.baseUrlLocal + "titulacion/listadoTitulacion/",
        obtenerTitulacionById: environment.baseUrlLocal + "titulacion/obtenerTitulacionByNumeroSolicitud/",
        editarTitulacion: environment.baseUrlLocal + "titulacion/actualizar",


    },
    master: {

        obtenerNacionalidades: environment.baseUrlLocal + "utilidades/obtenerNacionalidad",
        obtenerProvincias: environment.baseUrlLocal + "utilidades/obtenerProvincias",
        obtenerMunicipios: environment.baseUrlLocal + "utilidades/obtenerMunicipios",
        obtenerProfesiones_Especialidades: environment.baseUrlLocal + "profesiones/obtenerProfesionesPorTipo/",
        obtenerTodasLosTiposProfesiones: environment.baseUrlLocal + "profesiones/obtenerTipoProfesiones",

        GetHistorico: environment.baseUrlLocal + "Actividades/GetHistorico?",
        PostProgressBar: environment.baseUrlLocal + "Actividades/PostProgressBar",
        ProgressBar: environment.baseUrlLocal + "Actividades/GetProgressBar?solicitudNumero=",


    },
    asociaciones: {

        crearSolicitudAsociaciones: environment.baseUrlLocal + "asociaciones/crear",


        obtener_tipo_Asociaciones: environment.baseUrlLocal + "asociaciones/obtenerListadoAsociaciones",
        obterAsociacion: environment.baseUrlLocal + "asociacion/obtenerAsociacionesPorId",

        obtenerListadoAsociaciones: environment.baseUrlLocal + "asociaciones/ListadoAsociaciones?solicitud_numero=",
        editarAsociacion: environment.baseUrlLocal + "asociaciones/actualizar",

    },

    ciudadano: {
        obtenerCiudadano: environment.baseUrlLocal + "ciudadano/obtenerCiudadanoFiltro",
    },

    Utilidades: {
        obtener_Profesionales_Estado_Solicitudes: environment.baseUrlLocal + "utilidades/obtenerListadoEstado",
        obtener_Profesionales_Estado_Solicitudes_Descripcion: environment.baseUrlLocal + "utilidades//ObtenerDescripcionEstado/",
        obtener_Prestadoras: environment.baseUrlLocal + "utilidades/obtenerListadoPrestadores"
    },
    localidades: {
        obtener_localides_Por_Solicitud: environment.baseUrlLocal + "localidades/obtenerListado?id=",
        guardar_localidad_medico: environment.baseUrlLocal + "localidades/crearLocalidad",
        actualizar_localidades_medico: environment.baseUrlLocal + "localidades/actualizar"

    },


}