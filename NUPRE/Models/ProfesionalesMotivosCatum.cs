using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesMotivosCatum
{
    public byte MotivoNumero { get; set; }

    public string MotivoDescripcion { get; set; } = null!;

    public string MotivoExplicacion { get; set; } = null!;

    public string MotivoSolicitud { get; set; } = null!;

    public string MotivoRequerimiento { get; set; } = null!;

    public string MotivoEspecialidad { get; set; } = null!;

    public string MotivoAsociacion { get; set; } = null!;

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
}
