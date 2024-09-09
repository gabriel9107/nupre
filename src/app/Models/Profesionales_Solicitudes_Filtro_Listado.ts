// export class Profesionales_Solicitudes_Filtro_Listado  extends{

export class Profesionales_Solicitudes_Filtro_Listado {
    public Empleador_Registro_Patronal?: number;
    public Cedula?: string;
    public Nombre?: string;
    public Estado_Numero?: number;
    public AnioInicio?: string;
    public AnioFin?: string;
    public Solicitud_Numero?: string;
}
export abstract class FiltroBase {
    public draw?: number;
    public PageIndex?: number;
    public PageSize?: number;
    public Cantidad_Registros?: number;
    public orderBy0?: string;
    public Search?: string;
}
