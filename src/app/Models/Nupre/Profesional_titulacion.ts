export class Profesional_titulacion {
    public Solicitud_Numero!: number;
    public Especialidad_Numero!: number;
    public Especialidad_Periodo!: string;
    public Documento_Codigo!: string;
    public Disposicion_Numero!: number;


    // public documento!: File[];

}


export class Profesional_TitulacionDTO {
    public Solicitud_Numero!: number;
    public Especialidad_Tipo_Numero!: number;
    public Especialidad_Profesion_Numero!: number;
    public Especialidad_Periodo!: string;
    public Documento_Codigo!: File;
    public Disposicion_Numero?: number;


}