import { FiltroBase } from "./FiltroBase";
import { Listado_Solicitud_Medico } from "./Nupre/Listado_Solicitud_Medico";

export class Solicitudes_listado extends FiltroBase {
    public recordsTotal?: number;
    public recordsFiltered?: number;
    public Draw?: number;
    public data?: Listado_Solicitud_Medico[];


}