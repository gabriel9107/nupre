using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesAuditoresSolicitudesTran
{
    public int SolicitudAuditorNumero { get; set; }

    public DateTime SolicitudFecha { get; set; }

    /// <summary>
    /// Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).
    /// </summary>
    public int ProfesionalNumero { get; set; }

    public byte SolicitudEstadoNumero { get; set; }

    public DateTime SolicitudEstadoFecha { get; set; }

    public string SolicitudEstadoNota { get; set; } = null!;

    public string SolicitudUsuarioCuenta { get; set; } = null!;

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

    public virtual ProfesionalesMaster ProfesionalNumeroNavigation { get; set; } = null!;

    public virtual ICollection<ProfesionalesMaster> ProfesionalesMasters { get; set; } = new List<ProfesionalesMaster>();

    public virtual ProfesionalesSolicitudesEstadosCatum SolicitudEstadoNumeroNavigation { get; set; } = null!;
}
