using System;
using System.Collections.Generic;

namespace NUPRE.Models;

/// <summary>
/// Es un catálogo que contiene las especialidades medicas, clasifica el maestro de PSS Médicos, su fuente de datos son los sistemas internos de la SISALRIL.
/// </summary>
public partial class ProfesionalesEspecialidadesCatum
{
    /// <summary>
    /// Numero de la especialidad médica. 
    /// </summary>
    public short EspecialidadNumero { get; set; }

    /// <summary>
    /// Descripción de la especialidad médica.
    /// </summary>
    public string EspecialidadDescripcion { get; set; } = null!;

    public byte EspecialidadTipoNumero { get; set; }

    public short EspecialidadProfesionNumero { get; set; }

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

    public virtual ProfesionalesEspecialidadesTiposCatum EspecialidadTipoNumeroNavigation { get; set; } = null!;
}
