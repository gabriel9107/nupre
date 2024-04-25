using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesSolicitudesAsociacionesTran
{
    public int SolicitudNumero { get; set; }

    public int AsociacionRegistroPatronal { get; set; }

    public string ProfesionalAsociacionCodigo { get; set; } = null!;

    public string DocumentoCodigo { get; set; } = null!;

    public byte AsociacionAsociadoEstadoNumero { get; set; }

    public DateTime AsociacionAsociadoEstadoFecha { get; set; }

    public string AsociacionAsociadoEstadoNota { get; set; } = null!;

    public byte MotivoNumero { get; set; }

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

    public virtual ProfesionalesAsociacionesMaster AsociacionRegistroPatronalNavigation { get; set; } = null!;

    public virtual ICollection<ProfesionalesSolicitudesAsociacionesHistorico> ProfesionalesSolicitudesAsociacionesHistoricos { get; set; } = new List<ProfesionalesSolicitudesAsociacionesHistorico>();

    public virtual ProfesionalesSolicitudesTran SolicitudNumeroNavigation { get; set; } = null!;
}
