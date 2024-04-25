using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesAsociacionesMaster
{
    public int AsociacionRegistroPatronal { get; set; }

    public string AsociacionRncOCedula { get; set; } = null!;

    public DateTime AsociacionFechaAcreditacion { get; set; }

    public string AsociacionSiglas { get; set; } = null!;

    public byte AsociacionEstadoNumero { get; set; }

    public DateTime AsociacionEstadoFecha { get; set; }

    public string AsociacionNota { get; set; } = null!;

    public int? SolicitudAsociacionNumero { get; set; }

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

    public virtual ICollection<ProfesionalesSolicitudesAsociacionesTran> ProfesionalesSolicitudesAsociacionesTrans { get; set; } = new List<ProfesionalesSolicitudesAsociacionesTran>();
}
