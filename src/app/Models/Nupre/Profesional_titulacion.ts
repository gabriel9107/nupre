export class Profesional_titulacion {
    public Solicitud_Numero!: number;
    public Especialidad_Numero!: number;
    public Especialidad_Periodo!: string;
    public Documento_Codigo!: string;
    public Disposicion_Numero!: number;


    // public documento!: File[];

}


export class Profesional_Listado_titulacionDTO {
    public solicitud_Numero!: number;
    public especialidad_Descripcion!: string;
    public registro_Fecha!: Date;
    public registro_Estado!: string;
    public especialidad_Periodo!: string;
    public especialidad_Estado_Numero!: number;
    public sspecialidad_Tipo_Numero!: string;

}


export class Profesional_TitulacionDTO {
    public Solicitud_Numero!: number;
    public Especialidad_Tipo_Numero!: number;
    public Especialidad_Profesion_Numero!: number;
    public Especialidad_Periodo!: string;
    // public Disposicion_Numero?: number;
    public Documento_Codigo?: File;


}