export class localidades {

    solicitud_Numero!: number
    localidad_Secuencia!: number
    prestadora_Numero!: number
    municipio_Numero!: number
    localidad_Direccion!: string
    localidad_Detalle?: string
    localidad_Telefono1!: string
    localidad_Telefono2?: string
    localidad_Prestadora_Nombre?: string
    registro_Estado!: string
    registro_Usuario!: string
    registro_Fecha!: string
}


export class Localidates_create_DTO {
    solicitud_Numero!: number
    prestadora_Numero!: number
    municipio_Numero!: number
    localidad_Direccion!: string
    localidad_Detalle?: string
    localidad_Telefono1!: string
    localidad_Telefono2?: string
    registro_Usuario!: string
    registro_Fecha!: string
}


export class Localidates_Edit_DTO {
    Localidad_Secuencia?: number;
    prestadora_Numero!: number
    solicitud_Numero!: number
    municipio_Numero!: number
    localidad_Direccion!: string
    localidad_Detalle?: string
    localidad_Telefono1!: string
    localidad_Telefono2?: string
    registro_Usuario!: string

}