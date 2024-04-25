using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesRequerimientosTran
{
    /// <summary>
    /// Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).
    /// </summary>
    public int ProfesionalNumero { get; set; }

    /// <summary>
    /// Número único que identifica el requerimiento (Documento, Identificación, otros), que deben presentar las personas o entidades para un proceso de acreditación.
    /// </summary>
    public byte RequerimientoNumero { get; set; }

    /// <summary>
    /// Es el código único que representa el documento dentro del sistema.
    /// </summary>
    public string DocumentoCodigo { get; set; } = null!;

    public DateTime? RequerimientoFechaVence { get; set; }

    public short DisposicionNumero { get; set; }

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

    public virtual ProfesionalesRequerimientosCatum RequerimientoNumeroNavigation { get; set; } = null!;
}
