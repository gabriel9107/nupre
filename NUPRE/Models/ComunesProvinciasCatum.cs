using System;
using System.Collections.Generic;

namespace NUPRE.Models;

/// <summary>
/// Es un catálogo con los detalles de las provincias de la República Dominicana, según codificación de la JCE, su fuente de datos son los sistemas internos de la SISALRIL.
/// </summary>
public partial class ComunesProvinciasCatum
{
    /// <summary>
    /// Número único de la provincia según catálogo de la JCE.  (Donde está ubicado una entidad o persona, o sucedió un hecho).
    /// </summary>
    public short ProvinciaNumero { get; set; }

    /// <summary>
    /// Nombre de la provincia según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).
    /// </summary>
    public string ProvinciaNombre { get; set; } = null!;

    /// <summary>
    /// Número único de la región de salud  según clasificación del Ministerio de Salud. (Donde está ubicado una entidad o persona, o sucedió un hecho).
    /// </summary>
    public byte RegionSaludNumero { get; set; }

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

    public virtual ICollection<ComunesMunicipiosCatum> ComunesMunicipiosCata { get; set; } = new List<ComunesMunicipiosCatum>();
}
