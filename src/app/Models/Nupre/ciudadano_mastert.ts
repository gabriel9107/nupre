export interface ciudadano_consulta_DTOs {
    ciudadano_Nss: number
    ciudadano_Nombres: string
    ciudadano_Primer_Apellido: string
    ciudadano_Segundo_Apellido: string
    estado_Civil_Codigo: string
    ciudadano_Fecha_Nacimiento: string
    ciudadano_Fecha_NacimientoDti: string
    ciudadano_No_Documento: string
    documento_TipoCodigo: string
    ciudadano_Sexo: string
    provincia_Numero: number
    sangre_Tipo_Numero: number

    nacionalidad_Numero: number
    ciudadano_No_DocumentoAnterior: string
    ciudadanoNssEstatus: string
    causaTipoCodigo: string
    ciudadano_Acta_Nacimiento_Municipio: string
    ciudadanoActaNacimientoAnio: string
    ciudadanoActaNacimientoNumero: string
    ciudadanoActaNacimientoFolio: string
    ciudadanoActaNacimientoLibro: string
    ciudadanoActaNacimientoOficialia: string
    fechaActualizacionTss: string
    ciudadanoCedulaFormateada: string
    ciudadano_Nombre_Completo: string
    ciudadanoActaNacimientoUnida: string
    registroEstado: string
    registroUsuario: string
    registroFecha: string
}


export class Ciudadano_FiltroDTO {

    empleador_Registro_Patronal?: number
    cedula!: string
}