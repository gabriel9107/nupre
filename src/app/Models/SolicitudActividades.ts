export class Solicitudes_Actividades_Progress {
    public actividad_Numero?: number;
    public actividad_Descripcion?: string;
    public proceso_Orden?: number;
    public actividad_Completada?: number;
    public porcentaje?: number;
}
export interface Solicitudes_Actividades_Trans_Set_ViewModel {
    solicitud_Numero: number;
    solicitud_Tipo_Numero: number;
    actividad_Numero: number;
    lactante_Nombre?: string;
    registro_Usuario?: '';
    enfermedad_Licencia_Secuencia?: number
}
export interface Historico {
    evento_Historico_Descripcion: string;
    evento_Historico_Fecha: Date;
    usuario_Cuenta: string;
}