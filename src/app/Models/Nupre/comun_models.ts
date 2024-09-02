export interface Provincias {
    provinciaNumero: number
    provinciaNombre: string
    // regionSaludNumero: number
    // registroEstado: string
    // registroUsuario: string
    // registroFecha: string
    // comunesMunicipiosCata: any[]
}


export interface Nacionalidad {
    nacionalidad_Numero: number,
    nacionalidad_Descripcion: string,
    nacionalidad_Pais_Nombre: string,
    // registro_Estado": "A",
    // registro_Usuario": "sa",
    // registro_Fecha": "2008-03-02T08:54:12.04"
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