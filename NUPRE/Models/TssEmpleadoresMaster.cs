using System;
using System.Collections.Generic;

namespace NUPRE.Models;

/// <summary>
/// Es un maestro donde se registran los datos de los empleadores empadronados en el  SDSS por la TSS, su fuente de datos la vista de publicadas por TSS diariamente.
/// </summary>
public partial class TssEmpleadoresMaster
{
    /// <summary>
    /// Es el número único que le asigna la Tesorería de la Seguridad Social a cada uno de los empleadores que se registran en dicha institución.    
    /// </summary>
    public int EmpleadorRegistroPatronal { get; set; }

    /// <summary>
    /// RNC (Registro Nacional Contribuyente) o Cédula del empleador.
    /// </summary>
    public string EmpleadorRncOCedula { get; set; } = null!;

    /// <summary>
    /// Es la razón social registrada por el empleador en la DGII, y que utiliza la Tesorería de la Seguridad Social en su registro de empleadores. Representa el nombre oficial de cada empresa o institución en el país.
    /// </summary>
    public string EmpleadorRazonSocial { get; set; } = null!;

    /// <summary>
    /// Nombre comercial del empleador.
    /// </summary>
    public string EmpleadorNombreComercial { get; set; } = null!;

    /// <summary>
    /// Nombre de la calle o carretera de la dirección donde está la sede o domicilio principal del empleador.
    /// </summary>
    public string EmpleadorDireccionCalle { get; set; } = null!;

    /// <summary>
    /// Número relacionado con la dirección donde está la sede o domicilio principal del empleador.
    /// </summary>
    public string EmpleadorDireccionNumero { get; set; } = null!;

    /// <summary>
    /// Nombre del edificio o residencial de la dirección donde está la sede o domicilio principal del empleador.
    /// </summary>
    public string EmpleadorDireccionEdificio { get; set; } = null!;

    /// <summary>
    /// Piso relacionado con la dirección donde está la sede o domicilio principal del empleador.
    /// </summary>
    public string EmpleadorDireccionPiso { get; set; } = null!;

    /// <summary>
    /// Sector de la dirección donde está la sede o domicilio principal del empleador.
    /// </summary>
    public string EmpleadorDireccionSector { get; set; } = null!;

    /// <summary>
    /// Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).
    /// </summary>
    public short MunicipioNumero { get; set; }

    /// <summary>
    /// Teléfono 1 del empleador.
    /// </summary>
    public string EmpleadorTelefono1 { get; set; } = null!;

    /// <summary>
    /// Teléfono 2 del empleador.
    /// </summary>
    public string EmpleadorTelefono2 { get; set; } = null!;

    /// <summary>
    /// Número único que identifica la actividad económica del catálogo de actividades económicas con la que se clasifican los empleadores.
    /// </summary>
    public int ActividadEconomicaNumero { get; set; }

    /// <summary>
    /// Código de la categoría de riesgo asignada a un empleador para establecer la taza de cotización con la que debe cotizar para el Seguro de Riesgos Laborales.
    /// </summary>
    public string CategoriaRiesgo { get; set; } = null!;

    /// <summary>
    /// Código que representa el Tipo de empresa según el sector al que pertenece (Pública centralizada, Pública No Centralizada, Privada y Mixta).
    /// </summary>
    public string EmpresaTipoCodigo { get; set; } = null!;

    /// <summary>
    /// Cantidad de trabajadores en nomina de un empleador actualmente.
    /// </summary>
    public int EmpleadorTotalTrabajadores { get; set; }

    /// <summary>
    /// Salario utilizado para cuantificar la cantidad de trabajadores  que perciben un mismo salario  bajo un grupo de criterios dentro de un consolidado (Tabla con datos calculados por grupos).
    /// </summary>
    public decimal EmpleadorSalarioSeguridadSocial { get; set; }

    /// <summary>
    /// Fecha en que la TSS realizo el registro.
    /// </summary>
    public DateTime EmpleadorFechaRegistroTss { get; set; }

    /// <summary>
    /// Fecha ultima en que la TSS actualizo el registro.
    /// </summary>
    public DateTime EmpleadorFechaActualizacionTss { get; set; }

    /// <summary>
    /// Indica si el empleador esta de Alta o de Baja en la TSS.
    /// </summary>
    public string EmpleadorEstatus { get; set; } = null!;

    /// <summary>
    /// Email del empleador.
    /// </summary>
    public string EmpleadorEmail { get; set; } = null!;

    /// <summary>
    /// Número único que identifica a cada entidad recaudadora en el SUIR TSS.
    /// </summary>
    public byte EntidadRecaudadoraNumero { get; set; }

    /// <summary>
    /// Numero de cuenta del banco del empleador.
    /// </summary>
    public string EmpleadorCuentaBanco { get; set; } = null!;

    /// <summary>
    /// RNC (Registro Nacional Contribuyente) o Cédula del empleador.
    /// </summary>
    public string EmpleadorRncOCedulaSfs { get; set; } = null!;

    /// <summary>
    /// Tipo de cuenta bancaria del empleador.
    /// </summary>
    public byte EmpleadorTipoCuenta { get; set; }

    /// <summary>
    /// Número único del sector económico según clasificación de la TSS para los empleadores (Gobierno, Salud, ONG, Zona Franca, etc.).
    /// </summary>
    public byte SectorEconomicoNumero { get; set; }

    /// <summary>
    /// Número único que identifica un sector salarial para los empleadores registrados en la TSS.
    /// </summary>
    public byte SectorSalarialNumero { get; set; }

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

    public virtual ComunesMunicipiosCatum MunicipioNumeroNavigation { get; set; } = null!;
}
