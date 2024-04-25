using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesSolicitudesTran
{
    public int SolicitudNumero { get; set; }

    public DateTime SolicitudFecha { get; set; }

    public string ProfesionalDocumento { get; set; } = null!;

    /// <summary>
    /// Es nombre completo (Nombres  y Apellidos) de cada persona registrada en el padrón de ciudadanos de la TSS.
    /// </summary>
    public string ProfesionalNombreCompleto { get; set; } = null!;

    /// <summary>
    /// Número único que representa la nacionalidad de la persona o afiliado.
    /// </summary>
    public short NacionalidadNumero { get; set; }

    /// <summary>
    /// Sexo de la persona (Afiliado)  (F=femenino, M=masculino).
    /// </summary>
    public string ProfesionalSexo { get; set; } = null!;

    /// <summary>
    /// Número de Exequátur del Médico.
    /// </summary>
    public string ProfesionalExequatur { get; set; } = null!;

    public string ProfesionalDireccion { get; set; } = null!;

    /// <summary>
    /// Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).
    /// </summary>
    public short MunicipioNumero { get; set; }

    public string ProfesionalTelefono1 { get; set; } = null!;

    public string ProfesionalTelefono2 { get; set; } = null!;

    public string ProfesionalTelefono3 { get; set; } = null!;

    public string ProfesionalMail { get; set; } = null!;

    public byte SolicitudEstadoNumero { get; set; }

    public DateTime SolicitudEstadoFecha { get; set; }

    public string SolicitudEstadoNota { get; set; } = null!;

    public string SolicitudUsuarioCuenta { get; set; } = null!;

    public string SolicitudActualizarDatos { get; set; } = null!;

    public int AsociacionRegistroPatronal { get; set; }

    public byte MotivoNumero { get; set; }

    public string SolicitudCertificadoNumero { get; set; } = null!;

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

    public virtual TssNacionalidadesCatum NacionalidadNumeroNavigation { get; set; } = null!;

    public virtual ICollection<ProfesionalesMaster> ProfesionalesMasters { get; set; } = new List<ProfesionalesMaster>();

    public virtual ICollection<ProfesionalesSolicitudesAsociacionesTran> ProfesionalesSolicitudesAsociacionesTrans { get; set; } = new List<ProfesionalesSolicitudesAsociacionesTran>();

    public virtual ICollection<ProfesionalesSolicitudesEspecialidadesTran> ProfesionalesSolicitudesEspecialidadesTrans { get; set; } = new List<ProfesionalesSolicitudesEspecialidadesTran>();

    public virtual ICollection<ProfesionalesSolicitudesHistorico> ProfesionalesSolicitudesHistoricos { get; set; } = new List<ProfesionalesSolicitudesHistorico>();

    public virtual ICollection<ProfesionalesSolicitudesRequerimientosTran> ProfesionalesSolicitudesRequerimientosTrans { get; set; } = new List<ProfesionalesSolicitudesRequerimientosTran>();

    public virtual ProfesionalesSolicitudesEstadosCatum SolicitudEstadoNumeroNavigation { get; set; } = null!;
}
