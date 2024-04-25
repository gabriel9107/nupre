using System;
using System.Collections.Generic;

namespace NUPRE.Models;

/// <summary>
/// Es un catálogo de las nacionalidades, su fuente de actualización es la TSS.
/// </summary>
public partial class TssNacionalidadesCatum
{
    /// <summary>
    /// Número único que representa la nacionalidad de la persona o afiliado.
    /// </summary>
    public short NacionalidadNumero { get; set; }

    /// <summary>
    /// Descripción de la nacionalidad de la persona o afiliado.
    /// </summary>
    public string NacionalidadDescripcion { get; set; } = null!;

    /// <summary>
    /// Es el nombre del pais correspondiente a la nacionalidad de la persona o afiliado.
    /// </summary>
    public string NacionalidadPaisNombre { get; set; } = null!;

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

    public virtual ICollection<ProfesionalesSolicitudesTran> ProfesionalesSolicitudesTrans { get; set; } = new List<ProfesionalesSolicitudesTran>();
}
