using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesEstadosCatum
{
    public byte ProfesionalEstadoNumero { get; set; }

    /// <summary>
    /// Es la descripción del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).
    /// </summary>
    public string ProfesionalEstadoDescripcion { get; set; } = null!;

    /// <summary>
    /// Es la explicación del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).
    /// </summary>
    public string ProfesionalEstadoExplicacion { get; set; } = null!;

    public string ProfesionalEstadoPendiente { get; set; } = null!;

    /// <summary>
    /// Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).
    /// </summary>
    public string RegistroEstado1 { get; set; } = null!;

    /// <summary>
    /// Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.
    /// </summary>
    public string RegistroUsuario1 { get; set; } = null!;

    /// <summary>
    /// Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.
    /// </summary>
    public DateTime RegistroFecha1 { get; set; }

    public string ProfesionalEstadoNota { get; set; } = null!;

    public string ProfesionalEstadoMensaje { get; set; } = null!;

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

    public virtual ICollection<ProfesionalesMaster> ProfesionalesMasters { get; set; } = new List<ProfesionalesMaster>();
}
