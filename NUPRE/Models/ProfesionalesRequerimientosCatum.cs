using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesRequerimientosCatum
{
    /// <summary>
    /// Número único que identifica el requerimiento (Documento, Identificación, otros), que deben presentar las personas o entidades para un proceso de acreditación.
    /// </summary>
    public byte RequerimientoNumero { get; set; }

    /// <summary>
    /// Descripción del requerimiento (Documento, Identificación, otros), que deben presentar las personas o entidades para un proceso de acreditación.
    /// </summary>
    public string RequerimientoDescripcion { get; set; } = null!;

    /// <summary>
    /// Número de orden en que debe aparecer los requerimiento para un personas o entidades, en relación a la categoría de acreditación en un proceso de acreditación.
    /// </summary>
    public byte RequerimientoOrden { get; set; }

    public string RequerimientoObligatorio { get; set; } = null!;

    public string RequerimientoFechaVencimiento { get; set; } = null!;

    public byte AplicaNumero { get; set; }

    public string RequerimientoAplicaRenovacion { get; set; } = null!;

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

    public virtual ICollection<ProfesionalesRequerimientosTran> ProfesionalesRequerimientosTrans { get; set; } = new List<ProfesionalesRequerimientosTran>();

    public virtual ICollection<ProfesionalesSolicitudesRequerimientosTran> ProfesionalesSolicitudesRequerimientosTrans { get; set; } = new List<ProfesionalesSolicitudesRequerimientosTran>();
}
