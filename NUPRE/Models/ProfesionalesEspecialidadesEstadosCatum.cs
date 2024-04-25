using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesEspecialidadesEstadosCatum
{
    public byte EspecialidadEstadoNumero { get; set; }

    /// <summary>
    /// Es la descripción del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).
    /// </summary>
    public string EspecialidadEstadoDescripcion { get; set; } = null!;

    /// <summary>
    /// Es la explicación del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).
    /// </summary>
    public string EspecialidadEstadoExplicacion { get; set; } = null!;

    public string EspecialidadEstadoPendiente { get; set; } = null!;

    public string EspecialidadEstadoNota { get; set; } = null!;

    public string EspecialidadEstadoMensaje { get; set; } = null!;

    /// <summary>
    /// Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).
    /// </summary>
    public string RegistroEstado { get; set; } = null!;

    /// <summary>
    /// Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.
    /// </summary>
    public string RegistroUsuario { get; set; } = null!;

    /// <summary>
    /// Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.
    /// </summary>
    public DateTime RegistroFecha { get; set; }

    public virtual ICollection<ProfesionalesSolicitudesEspecialidadesTran> ProfesionalesSolicitudesEspecialidadesTrans { get; set; } = new List<ProfesionalesSolicitudesEspecialidadesTran>();
}
