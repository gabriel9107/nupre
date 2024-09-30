export interface ciudadano_consulta_DTOs {
    ciudadanoNss: number
    ciudadanoNombres: string
    ciudadanoPrimerApellido: string
    ciudadanoSegundoApellido: string
    estadoCivilCodigo: string
    ciudadanoFechaNacimiento: string
    ciudadanoFechaNacimientoDti: string
    ciudadanoNoDocumento: string
    documentoTipoCodigo: string
    ciudadanoSexo: string
    provinciaNumero: number
    sangreTipoNumero: number
    causaInhabilidadNumero: number
    nacionalidadNumero: number
    ciudadanoNoDocumentoAnterior: string
    ciudadanoNssEstatus: string
    causaTipoCodigo: string
    ciudadanoActaNacimientoMunicipio: string
    ciudadanoActaNacimientoAnio: string
    ciudadanoActaNacimientoNumero: string
    ciudadanoActaNacimientoFolio: string
    ciudadanoActaNacimientoLibro: string
    ciudadanoActaNacimientoOficialia: string
    fechaActualizacionTss: string
    ciudadanoCedulaFormateada: string
    ciudadanoNombreCompleto: string
    ciudadanoActaNacimientoUnida: string
    registroEstado: string
    registroUsuario: string
    registroFecha: string
}


export class Ciudadano_FiltroDTO {

    empleador_Registro_Patronal?: number
    cedula!: string
}