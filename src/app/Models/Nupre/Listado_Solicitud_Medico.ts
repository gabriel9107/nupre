import { FiltroBase } from "../FiltroBase"

export class Listado_Solicitud_Medico {
    profesionales_SolicitudesTranId?: number
    solicitud_Numero?: number
    solicitud_Fecha?: string
    profesional_Documento?: string
    profesional_Nombre_Completo?: string
    nacionalidad_Numero?: number
    profesional_Sexo?: string
    profesional_Exequatur?: string
    profesional_Direccion?: string
    municipio_Numero?: number
    profesional_Telefono1?: string
    profesional_Telefono2?: string
    profesional_Telefono3?: string
    profesional_Mail?: string
    solicitud_Estado_Numero?: number
    solicitud_Estado_Fecha?: string
    solicitud_Estado_Nota?: string
    solicitud_Usuario_Cuenta?: string
    solicitud_Actualizar_Datos?: string
    asociacion_Registro_Patronal?: number
    motivo_Numero?: number
    solicitud_Certificado_Numero?: string
    registro_Estado?: string
    registro_Usuario?: string
    registro_Fecha?: string
}


export class Profesionales_Filtro_Listado extends FiltroBase {
    public Empleador_Registro_Patronal?: number;
    public Cedula?: string;
    public Nombre?: string;
    public Estado_Numero?: number;
    public AnioInicio?: string;
    public AnioFin?: string;
    public Solicitud_Numero?: string;
}



export class Solicitud_basic_Informacion_DTO {

    solicitudNumero?: number
    solicitudFecha?: string
    profesionalDocumento?: string
    profesionalNombreCompleto?: string
    nacionalidadNumero?: number
    profesionalSexo?: string
    profesionalExequatur?: string
    profesional_Direccion?: string
    municipioNumero?: number
    profesionalTelefono1?: string
    profesionalTelefono2?: string
    profesionalTelefono3?: string
    profesionalMail?: string
    solicitudEstadoNumero?: number
    solicitudEstadoFecha?: string
    solicitudEstadoNota?: string
    solicitudUsuarioCuenta?: string
    solicitudActualizarDatos?: string
    asociacionRegistroPatronal?: number
    motivoNumero?: number
    solicitudCertificadoNumero?: string
    registroEstado?: string
    registroUsuario?: string
    registroFecha?: string

}

export class Solicitud_Medico_Detalle_DTO {

    solicitudNumero?: number
    solicitudFecha?: string
    profesionalDocumento?: string
    profesionalNombreCompleto?: string
    nacionalidadNumero?: number
    profesionalSexo?: string
    profesionalExequatur?: string
    profesional_Direccion?: string
    municipioNumero?: number
    profesionalTelefono1?: string
    profesionalTelefono2?: string
    profesionalTelefono3?: string
    profesionalMail?: string
    solicitudEstadoNumero?: number
    solicitudEstadoFecha?: string
    solicitudEstadoNota?: string
    solicitudUsuarioCuenta?: string
    solicitudActualizarDatos?: string
    asociacionRegistroPatronal?: number
    motivoNumero?: number
    solicitudCertificadoNumero?: string
    registroEstado?: string
    registroUsuario?: string
    registroFecha?: string

}





export class Solicitud_Medico_Detalle_View {

    solicitudNumero?: number
    solicitudFecha?: string
    profesionalDocumento?: string
    profesionalNombreCompleto?: string
    nacionalidadNumero?: number
    profesionalSexo?: string
    profesionalExequatur?: string
    profesional_Direccion?: string
    municipioNumero?: number
    profesionalTelefono1?: string
    profesionalTelefono2?: string
    profesionalTelefono3?: string
    profesionalMail?: string
    solicitudEstadoNumero?: number
    solicitudEstadoFecha?: string
    solicitudEstadoNota?: string
    solicitudUsuarioCuenta?: string
    solicitudActualizarDatos?: string
    asociacionRegistroPatronal?: number
    motivoNumero?: number
    solicitudCertificadoNumero?: string
    registroEstado?: string
    registroUsuario?: string
    registroFecha?: string

}
export interface solicitudCreacionDTO {
    profesional_Nombre_Completo?: string
    profesional_Documento?: string
    archivo_Cedula?: File
    // solicitud_Fecha?: string
    // nacionalidad_Numero?: number
    // profesional_Sexo?: string
    // profesional_Exequatur?: string
    // profesional_Direccion?: string
    // municipio_Numero?: number
    // profesional_Telefono1?: string
    // profesional_Telefono2?: string
    // profesional_Telefono3?: string
    // profesional_Mail?: string
    // solicitud_Estado_Numero?: number
    // solicitud_Estado_Fecha?: string
    // solicitud_Estado_Nota?: string
    // solicitud_Usuario_Cuenta?: string
    // solicitud_Actualizar_Datos?: string
    // asociacion_Registro_Patronal?: number
    // motivo_Numero?: number
    // solicitud_Certificado_Numero?: string
    // registro_Estado?: string
    // registro_Usuario?: string
    // registro_Fecha?: string
    // archivo_Exequatur?: File
}




export class Solicitud_MedicoCreacionPruebaDTO {
    profesional_Nombre_Completo?: string
    profesional_Documento?: string
    archivo_Cedula!: File
    archivo_Exequatur!: File
    nacionalidad_Numero!: number
    profesional_Sexo!: string
    profesional_Exequatur!: string
    profesional_Direccion!: string
    municipio_Numero!: number
    profesional_Telefono1!: string
    profesional_Telefono2?: string
    profesional_Telefono3?: string
    profesional_Mail!: string


    // Agregar al implementar autenticacion 
    // solicitud_Usuario_Cuenta?: string
    // asociacion_Registro_Patronal?: number





    // // solicitudNumero?: number
    // solicitudFecha?: string
    // nacionalidadNumero?: number
    // profesionalSexo?: string
    // profesionalExequatur?: string
    // profesional_Direccion?: string
    // municipioNumero?: number
    // profesionalTelefono1?: string
    // profesionalTelefono2?: string
    // profesionalTelefono3?: string
    // profesionalMail?: string
    // solicitudEstadoNumero?: number
    // solicitudEstadoFecha?: string
    // solicitudEstadoNota?: string
    // solicitudUsuarioCuenta?: string
    // solicitudActualizarDatos?: string
    // asociacionRegistroPatronal?: number
    // motivoNumero?: number
    // solicitudCertificadoNumero?: string
    // registroEstado?: string
    // registroUsuario?: string
    // registroFecha?: string

}






export class Solicitud_MedicoCreacionDTO {

    solicitudNumero?: number
    solicitudFecha?: string
    profesionalNombreCompleto?: string
    nacionalidadNumero?: number
    profesionalSexo?: string
    profesionalExequatur?: string
    profesional_Direccion?: string
    municipioNumero?: number
    profesionalTelefono1?: string
    profesionalTelefono2?: string
    profesionalTelefono3?: string
    profesionalMail?: string
    solicitudEstadoNumero?: number
    solicitudEstadoFecha?: string
    solicitudEstadoNota?: string
    solicitudUsuarioCuenta?: string
    solicitudActualizarDatos?: string
    asociacionRegistroPatronal?: number
    motivoNumero?: number
    solicitudCertificadoNumero?: string
    registroEstado?: string
    registroUsuario?: string
    registroFecha?: string
    profesionalDocumento?: string
    archivoExequatur?: string

}
