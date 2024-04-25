using System;
using System.Collections.Generic;

namespace NUPRE.Models;

/// <summary>
/// Es un maestro con la identificación básica de las PSS institucionales y Médicos, Está directamente relacionada con las tablas PRESTADORAS_MEDICOS_MASTER y PRESTADORAS_INSTITUCIONALES_MASTER, su fuente de datos son los sistemas internos de la SISALRIL.
/// </summary>
public partial class PrestadorasMaster
{
    /// <summary>
    /// Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).
    /// </summary>
    public int PrestadoraNumero { get; set; }

    /// <summary>
    /// Nombre del prestador de servicio de salud (PSS) que entrego los servicio (Institucional o Médico).
    /// </summary>
    public string PrestadoraNombre { get; set; } = null!;

    public string MedicoCedula { get; set; } = null!;

    /// <summary>
    /// Es  un número único que representa  la categoría  de los prestadores de servicio de salud (PSS),    Prestadora Institucional  o  Médico Independiente),  su objetivo es ser utilizados en futuras conversiones hacia el DATA WAREHOUSE.
    /// </summary>
    public byte PrestadoraCategoriaNumero { get; set; }

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
