using System;
using System.Collections.Generic;

namespace NUPRE.Models;

/// <summary>
/// Es un maestro con los detalles de todos los ciudadanos del SDS, su fuente directa de datos son las actualización es la TSS, su fuentes indirectas son  el padrón de cedulados de la JCE y los menores registrados a través del SUIR. 
/// </summary>
public partial class TssCiudadanosMaster
{
    /// <summary>
    /// Número único que identifica a una persona dentro del SDSS, sobre la cual se nos reporta o registramos un hecho o situación.
    /// </summary>
    public long CiudadanoNss { get; set; }

    /// <summary>
    /// Es el nombre propio de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoNombres { get; set; } = null!;

    /// <summary>
    /// Es el primer apellido de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoPrimerApellido { get; set; } = null!;

    /// <summary>
    /// Es el segundo apellido de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoSegundoApellido { get; set; } = null!;

    /// <summary>
    /// Es el código de estado civil de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string EstadoCivilCodigo { get; set; } = null!;

    /// <summary>
    /// Es la fecha de nacimiento de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoFechaNacimiento { get; set; } = null!;

    /// <summary>
    /// Es la fecha de nacimiento de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public DateTime CiudadanoFechaNacimientoDti { get; set; }

    /// <summary>
    /// Es único número de documento de identificación oficial (Cedula, residencia, Pasaporte, etc.) de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoNoDocumento { get; set; } = null!;

    /// <summary>
    /// Es el código que identifica el tipo de documento de identificación oficial (Cedula, residencia, Pasaporte, etc.) para los casos requeridos de las personas registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string DocumentoTipoCodigo { get; set; } = null!;

    /// <summary>
    /// Sexo de la persona (Afiliado)  (F=femenino, M=masculino).
    /// </summary>
    public string CiudadanoSexo { get; set; } = null!;

    /// <summary>
    /// Número único de la provincia según catálogo de la JCE.  (Donde está ubicado una entidad o persona, o sucedió un hecho).
    /// </summary>
    public short ProvinciaNumero { get; set; }

    /// <summary>
    /// Es el código único que representa el tipo de sangre de la persona  registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public byte SangreTipoNumero { get; set; }

    /// <summary>
    /// Es el número único que representa la causa de inhabilidad de un documento de identificación (Generalmente Cédula) la cual tiene algún impedimento por la JCE y registrado en el padrón de ciudadanos de la TSS. Dicho número se repite según el tipo de causa.
    /// </summary>
    public short CausaInhabilidadNumero { get; set; }

    /// <summary>
    /// Número único que representa la nacionalidad de la persona o afiliado.
    /// </summary>
    public short NacionalidadNumero { get; set; }

    /// <summary>
    /// Es único número de documento de identificación oficial (Cedula, residencia, Pasaporte, etc.) de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoNoDocumentoAnterior { get; set; } = null!;

    /// <summary>
    /// Indica si el NSS del ciudadano esta activo o anulado.
    /// </summary>
    public string CiudadanoNssEstatus { get; set; } = null!;

    /// <summary>
    /// Tipo de causa de inhabilidad de un documento de identificación (Generalmente Cédula) la cual tiene algún impedimento por la JCE y registrado en el padrón de ciudadanos de la TSS. Dicho número se repite según el tipo de causa.
    /// </summary>
    public string CausaTipoCodigo { get; set; } = null!;

    /// <summary>
    /// Numero de municipio del acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoActaNacimientoMunicipio { get; set; } = null!;

    /// <summary>
    /// Año correspondiente al acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoActaNacimientoAnio { get; set; } = null!;

    /// <summary>
    /// Número de acta  del documento de acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoActaNacimientoNumero { get; set; } = null!;

    /// <summary>
    /// Número de folio  del acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoActaNacimientoFolio { get; set; } = null!;

    /// <summary>
    /// Número de libro del acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoActaNacimientoLibro { get; set; } = null!;

    /// <summary>
    /// Número de la oficialía civil correspondiente al  acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoActaNacimientoOficialia { get; set; } = null!;

    /// <summary>
    /// Fecha ultima en que la TSS actualizo el registro del ciudadano.
    /// </summary>
    public DateTime FechaActualizacionTss { get; set; }

    /// <summary>
    /// Es la cédula de identidad y electoral del ciudadano con el formato que incluye los guiones.
    /// </summary>
    public string CiudadanoCedulaFormateada { get; set; } = null!;

    /// <summary>
    /// Es nombre completo (Nombres  y Apellidos) de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string CiudadanoNombreCompleto { get; set; } = null!;

    /// <summary>
    /// Campo donde se unifican todos los campos del acta de nacimiento como una sola cadena, su fin es facilitar la validación en procesos de carga de afilados a planes alternativos.
    /// </summary>
    public string CiudadanoActaNacimientoUnida { get; set; } = null!;

    /// <summary>
    /// Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).
    /// </summary>
    public string RegistroEstado { get; set; } = null!;

    /// <summary>
    /// suser_sname()
    /// </summary>
    public string RegistroUsuario { get; set; } = null!;

    /// <summary>
    /// Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.
    /// </summary>
    public DateTime RegistroFecha { get; set; }
}
