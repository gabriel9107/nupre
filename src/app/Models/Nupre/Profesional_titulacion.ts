export class Profesional_titulacion {
    public Solicitud_Numero!: number;
    public Especialidad_Numero!: number;
    public Especialidad_Periodo!: Date;
    public Documento_Codigo!: string;
    public Disposicion_Numero!: number;


    // public documento!: File[];

}


export class Profesional_Listado_titulacionDTO {
    public id?: number;
    public solicitud_Numero!: number;
    public especialidad_Numero?: number;
    public especialidad_Descripcion!: string;
    public registro_Fecha!: Date;
    public registro_Estado!: string;
    public especialidad_Periodo!: Date;
    public especialidad_Estado_Numero!: number;
    public sspecialidad_Tipo_Numero!: string;

}
export interface Titulacion {
    id: number;
    Solicitud_Numero: number;
    Especialidad_Tipo_Numero: number;
    Especialidad_Profesion_Numero: number;
    Especialidad_Periodo: Date;
    // public Disposicion_Numero?: number;
    Documento_Codigo: File;

}


export class Profesional_TitulacionDTO {
    id?: number;
    public Solicitud_Numero!: number;
    public Especialidad_Tipo_Numero!: number;
    public Especialidad_Profesion_Numero!: number;
    public Especialidad_Periodo!: Date;
    // public Disposicion_Numero?: number;
    public Documento_Codigo?: File;


}