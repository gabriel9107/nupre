using System;
using System.Collections.Generic;

namespace NUPRE.Models;

/// <summary>
/// Es un maestro que contiene las informaciones de los documentos para ser relacionados con diferentes tablas del sistema como prueba documental o certificación del registro,  su fuente de datos es la tabla de documentos del sistema ARCHI.
/// </summary>
public partial class ComunesDocumentosMaster
{
    /// <summary>
    /// Es el código único que representa el documento dentro del sistema.
    /// </summary>
    public string DocumentoCodigo { get; set; } = null!;

    /// <summary>
    /// Es la ruta del servidor y carpeta donde se encuentra almacenado el documento.
    /// </summary>
    public string DocumentoRuta { get; set; } = null!;

    /// <summary>
    /// Es el detalle del tema con el cual está relacionado el documento.
    /// </summary>
    public string DocumentoTema { get; set; } = null!;

    /// <summary>
    /// Es el asunto principal en el contenido del documento.
    /// </summary>
    public string DocumentoAsunto { get; set; } = null!;

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
