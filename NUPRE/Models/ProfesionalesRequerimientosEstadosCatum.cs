using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesRequerimientosEstadosCatum
{
    public byte RequerimientoEstadoNumero { get; set; }

    public string RequerimientoEstadoDescripcion { get; set; } = null!;

    public string RequerimientoEstadoExplicacion { get; set; } = null!;

    public string RequerimientoEstadoPendiente { get; set; } = null!;

    public string RequerimientoEstadoNota { get; set; } = null!;

    public string RequerimientoEstadoMensaje { get; set; } = null!;

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

    public virtual ICollection<ProfesionalesSolicitudesRequerimientosTran> ProfesionalesSolicitudesRequerimientosTrans { get; set; } = new List<ProfesionalesSolicitudesRequerimientosTran>();
}
