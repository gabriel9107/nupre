export interface Provincias {
    provinciaNumero: number
    provinciaNombre: string
    regionSaludNumero: number
    registroEstado: string
    registroUsuario: string
    registroFecha: string
    comunesMunicipiosCata: any[]
}

export interface Municipio {
    municipioNumero: number
    municipioNombre: string
    provinciaNumero: number
    municipioProvinciaNombre: string
    registroEstado: string
    registroUsuario: string
    registroFecha: string

}