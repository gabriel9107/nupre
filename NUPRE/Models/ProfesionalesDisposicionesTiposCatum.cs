using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesDisposicionesTiposCatum
{
    public byte DisposicionTipoNumero { get; set; }

    public byte AplicaNumero { get; set; }

    public string DisposicionTipoDescripcion { get; set; } = null!;

    /// <summary>
    /// Es la explicación del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).
    /// </summary>
    public string DisposicionTipoExplicacion { get; set; } = null!;

    public string DisposicionTipoRequerimientos { get; set; } = null!;

    public string DisposicionTipoExamenes { get; set; } = null!;

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

    public virtual ICollection<ProfesionalesDisposicionesTran> ProfesionalesDisposicionesTrans { get; set; } = new List<ProfesionalesDisposicionesTran>();
}
