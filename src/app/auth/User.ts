



export interface User {
    UsuarioCuenta: string,
    UsuarioCedula: string,
    EntidadNombre: string,
    UsuarioNss: number,
    UsuarioTipo: number,
    UsuarioRegistroPatronal: number,
    EmpleadorNumero: number,
    InstitucionNumero: number,
    UsuarioNombres: string,
    ArsNumero: number,
    PrestadoraNumero: number,
    roles: rol[]
}

export interface rol {
    Usuario_Rol_Numero: number,
    Usuario_Rol_Descripcion: string,
}
export interface UsuarioInfo {
    usuario_Tipo_Descripcion: string;
    registro_Fecha: Date;
}