export interface ProfesionalesAsociacionesTipoCata {
    asociacion_Numero: number;
    asociacion: string;
    descripcion: string;
    // registro_Estado: string;
    // registro_Usuario: string;
    // registro_Fecha: Date;
}

export class CrearProfesionalesAsociaciones_DTO {
    solicitud_Numero!: number;
    asociacion_Codigo!: number;
    profesional_Asociacion_Codigo!: string;
    Documento!: File;
}

export class ProfesionalesAsociaciones {
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