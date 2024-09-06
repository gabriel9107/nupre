export interface Especialidades {
    especialidad_Numero: number;
    especialidad_Descripcion: string;
    especialidad_Tipo_Numero: number;
    especialidad_Profesion_Numero: number;
    registro_Estado: string;
    registro_Usuario: string;
    registro_Fecha: Date;
}

export interface Tipo_Especialidades {
    especialidad_Tipo_Numero: number
    especialidad_Tipo_Descripcion: string
    especialidad_Tipo_Explicacion: string
    registro_Estado: string
    registro_Usuario: string
    registro_Fecha: string
}
