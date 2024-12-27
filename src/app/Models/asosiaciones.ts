import { ciudadano_consulta_DTOs } from "./Nupre/ciudadano_mastert";

export interface ProfesionalesAsociacionesTipoCata {
    asociacion_Numero: number;
    asociacion_Nombre: string;
    asociacion: string;
    descripcion: string;
    // registro_Estado: string;
    // registro_Usuario: string;
    // registro_Fecha: Date;
}

export class CrearProfesionalesAsociaciones_DTO {
    asociacion_Numero_Socio!: string;
    solicitud_Numero!: number;
    asociacion_Registro_Patronal?: number;
    profesional_Asociacion_Codigo!: string;
    Documento!: File;
    Registro_Usuario!: string;

}

export class EditarProfesionalesAsociaciones_DTO {
    asociacion_ID!:number;
    asociacion_Numero_Socio!: string;
    solicitud_Numero!: number;
    asociacion_Registro_Patronal?: number;
    profesional_Asociacion_Codigo!: string;
    Documento!: File;
    Registro_Usuario!: string;



}

export class ProfesionalesAsociaciones {
    asociacion_Nombre?: string;
    asociacion_Numero_Socio!: string;
    solicitud_Numero!: number;
    asociacion_ID?: number;
    asociacion_Registro_Patronal!: number;
    profesional_Asociacion_Codigo!: string;
    documento_Codigo!: string;
    asociacion_Asociado_Estado_Numero!: number;
    asociacion_Asociado_Estado_Fecha?: Date;
    asociacion_Asociado_Estado_Nota?: string;
    motivo_Numero?: number;
    registro_Estado?: string;
    registro_Usuario?: string;
    registro_Fecha?: Date;
}


export class Profesionales_Asociacon_Trans_view {


    afiliadoMaster!: ciudadano_consulta_DTOs;
    solicitud_Numero!: number;
    asociacion_Registro_Patronal!: number;
    profesional_Asociacion_Codigo!: string;
    documento_Codigo!: string;
    asociacion_Asociado_Estado_Numero!: number;
    asociacion_Asociado_Estado_Fecha?: Date;
    asociacion_Asociado_Estado_Nota?: string;
    motivo_Numero?: number;
    registro_Estado?: string;
    registro_Usuario?: string;
    registro_Fecha?: Date;
}