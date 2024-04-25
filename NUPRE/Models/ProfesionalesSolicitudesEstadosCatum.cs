using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesSolicitudesEstadosCatum
{
    public byte SolicitudEstadoNumero { get; set; }

    /// <summary>
    /// Es la descripción del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).
    /// </summary>
    public string SolicitudEstadoDescripcion { get; set; } = null!;

    /// <summary>
    /// Es la explicación del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).
    /// </summary>
    public string SolicitudEstadoExplicacion { get; set; } = null!;

    public string SolicitudEstadoPendiente { get; set; } = null!;

    public string SolicitudEstadoNota { get; set; } = null!;

    public string SolicitudEstadoMensaje { get; set; } = null!;

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

    public virtual ICollection<ProfesionalesAuditoresSolicitudesTran> ProfesionalesAuditoresSolicitudesTrans { get; set; } = new List<ProfesionalesAuditoresSolicitudesTran>();

    public virtual ICollection<ProfesionalesSolicitudesTran> ProfesionalesSolicitudesTrans { get; set; } = new List<ProfesionalesSolicitudesTran>();
}
