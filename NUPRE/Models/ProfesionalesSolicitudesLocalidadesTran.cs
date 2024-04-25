using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesSolicitudesLocalidadesTran
{
    /// <summary>
    /// Número único de la Solicitud.
    /// </summary>
    public int SolicitudNumero { get; set; }

    public int LocalidadSecuencia { get; set; }

    /// <summary>
    /// Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).
    /// </summary>
    public int PrestadoraNumero { get; set; }

    /// <summary>
    /// Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).
    /// </summary>
    public short MunicipioNumero { get; set; }

    public string LocalidadDireccion { get; set; } = null!;

    public string LocalidadDetalle { get; set; } = null!;

    public string LocalidadTelefono1 { get; set; } = null!;

    public string LocalidadTelefono2 { get; set; } = null!;

    public string LocalidadPrestadoraNombre { get; set; } = null!;

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
