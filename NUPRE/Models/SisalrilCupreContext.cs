using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace NUPRE.Models;

public partial class SisalrilCupreContext : DbContext
{
    public SisalrilCupreContext()
    {
    }

    public SisalrilCupreContext(DbContextOptions<SisalrilCupreContext> options)
        : base(options)
    {
    }

    public virtual DbSet<ComunesDocumentosMaster> ComunesDocumentosMasters { get; set; }

    public virtual DbSet<ComunesMunicipiosCatum> ComunesMunicipiosCata { get; set; }

    public virtual DbSet<ComunesProvinciasCatum> ComunesProvinciasCata { get; set; }

    public virtual DbSet<PrestadorasMaster> PrestadorasMasters { get; set; }

    public virtual DbSet<PrestadorasMedicosMaster> PrestadorasMedicosMasters { get; set; }

    public virtual DbSet<ProfesionalesAsociacionesAsociadosEstadosCatum> ProfesionalesAsociacionesAsociadosEstadosCata { get; set; }

    public virtual DbSet<ProfesionalesAsociacionesAsociadosTran> ProfesionalesAsociacionesAsociadosTrans { get; set; }

    public virtual DbSet<ProfesionalesAsociacionesEstadosCatum> ProfesionalesAsociacionesEstadosCata { get; set; }

    public virtual DbSet<ProfesionalesAsociacionesMaster> ProfesionalesAsociacionesMasters { get; set; }

    public virtual DbSet<ProfesionalesAuditoresSolicitudesTran> ProfesionalesAuditoresSolicitudesTrans { get; set; }

    public virtual DbSet<ProfesionalesDisposicionesTiposCatum> ProfesionalesDisposicionesTiposCata { get; set; }

    public virtual DbSet<ProfesionalesDisposicionesTran> ProfesionalesDisposicionesTrans { get; set; }

    public virtual DbSet<ProfesionalesEspecialidadesCatum> ProfesionalesEspecialidadesCata { get; set; }

    public virtual DbSet<ProfesionalesEspecialidadesEstadosCatum> ProfesionalesEspecialidadesEstadosCata { get; set; }

    public virtual DbSet<ProfesionalesEspecialidadesTiposCatum> ProfesionalesEspecialidadesTiposCata { get; set; }

    public virtual DbSet<ProfesionalesEspecialidadesTran> ProfesionalesEspecialidadesTrans { get; set; }

    public virtual DbSet<ProfesionalesEstadosCatum> ProfesionalesEstadosCata { get; set; }

    public virtual DbSet<ProfesionalesMaster> ProfesionalesMasters { get; set; }

    public virtual DbSet<ProfesionalesMotivosCatum> ProfesionalesMotivosCata { get; set; }

    public virtual DbSet<ProfesionalesRequerimientosCatum> ProfesionalesRequerimientosCata { get; set; }

    public virtual DbSet<ProfesionalesRequerimientosEstadosCatum> ProfesionalesRequerimientosEstadosCata { get; set; }

    public virtual DbSet<ProfesionalesRequerimientosTran> ProfesionalesRequerimientosTrans { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesAsociacionesHistorico> ProfesionalesSolicitudesAsociacionesHistoricos { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesAsociacionesTran> ProfesionalesSolicitudesAsociacionesTrans { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesEspecialidadesHistorico> ProfesionalesSolicitudesEspecialidadesHistoricos { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesEspecialidadesTran> ProfesionalesSolicitudesEspecialidadesTrans { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesEstadosCatum> ProfesionalesSolicitudesEstadosCata { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesHistorico> ProfesionalesSolicitudesHistoricos { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesLocalidadesTran> ProfesionalesSolicitudesLocalidadesTrans { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesRequerimientosHistorico> ProfesionalesSolicitudesRequerimientosHistoricos { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesRequerimientosTran> ProfesionalesSolicitudesRequerimientosTrans { get; set; }

    public virtual DbSet<ProfesionalesSolicitudesTran> ProfesionalesSolicitudesTrans { get; set; }

    public virtual DbSet<TssCiudadanosMaster> TssCiudadanosMasters { get; set; }

    public virtual DbSet<TssEmpleadoresMaster> TssEmpleadoresMasters { get; set; }

    public virtual DbSet<TssNacionalidadesCatum> TssNacionalidadesCata { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=preprodsrv;Initial Catalog=SisalrilCupre;User ID=preprod;Password=preprod2020;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ComunesDocumentosMaster>(entity =>
        {
            entity.HasKey(e => e.DocumentoCodigo).HasName("PK_Documentos_Master");

            entity.ToTable("Comunes_Documentos_Master", tb => tb.HasComment("Es un maestro que contiene las informaciones de los documentos para ser relacionados con diferentes tablas del sistema como prueba documental o certificación del registro,  su fuente de datos es la tabla de documentos del sistema ARCHI."));

            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Es el código único que representa el documento dentro del sistema.")
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.DocumentoAsunto)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasComment("Es el asunto principal en el contenido del documento.")
                .HasColumnName("Documento_Asunto");
            entity.Property(e => e.DocumentoRuta)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasComment("Es la ruta del servidor y carpeta donde se encuentra almacenado el documento.")
                .HasColumnName("Documento_Ruta");
            entity.Property(e => e.DocumentoTema)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasComment("Es el detalle del tema con el cual está relacionado el documento.")
                .HasColumnName("Documento_Tema");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<ComunesMunicipiosCatum>(entity =>
        {
            entity.HasKey(e => e.MunicipioNumero).HasName("PK_Municipios_Cata");

            entity.ToTable("Comunes_Municipios_Cata", tb => tb.HasComment("Es un catálogo de los municipios de la República Dominicana, según codificación de la JCS, su fuente de alimentación son las vistas estadísticas de UNIPAGO."));

            entity.Property(e => e.MunicipioNumero)
                .ValueGeneratedNever()
                .HasComment("Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Municipio_Numero");
            entity.Property(e => e.MunicipioNombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Nombre del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Municipio_Nombre");
            entity.Property(e => e.MunicipioProvinciaNombre)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasDefaultValue("Pendiente")
                .HasColumnName("Municipio_Provincia_Nombre");
            entity.Property(e => e.ProvinciaNumero)
                .HasComment("Número único de la provincia según catálogo de la JCE.  (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Provincia_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");

            entity.HasOne(d => d.ProvinciaNumeroNavigation).WithMany(p => p.ComunesMunicipiosCata)
                .HasForeignKey(d => d.ProvinciaNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Municipios_Cata_Provincias_Cata");
        });

        modelBuilder.Entity<ComunesProvinciasCatum>(entity =>
        {
            entity.HasKey(e => e.ProvinciaNumero).HasName("PK_Provincias_Cata");

            entity.ToTable("Comunes_Provincias_Cata", tb => tb.HasComment("Es un catálogo con los detalles de las provincias de la República Dominicana, según codificación de la JCE, su fuente de datos son los sistemas internos de la SISALRIL."));

            entity.Property(e => e.ProvinciaNumero)
                .ValueGeneratedNever()
                .HasComment("Número único de la provincia según catálogo de la JCE.  (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Provincia_Numero");
            entity.Property(e => e.ProvinciaNombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Nombre de la provincia según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Provincia_Nombre");
            entity.Property(e => e.RegionSaludNumero)
                .HasComment("Número único de la región de salud  según clasificación del Ministerio de Salud. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Region_Salud_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<PrestadorasMaster>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Prestadoras_Master", tb => tb.HasComment("Es un maestro con la identificación básica de las PSS institucionales y Médicos, Está directamente relacionada con las tablas PRESTADORAS_MEDICOS_MASTER y PRESTADORAS_INSTITUCIONALES_MASTER, su fuente de datos son los sistemas internos de la SISALRIL."));

            entity.Property(e => e.MedicoCedula)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasDefaultValue("")
                .HasColumnName("Medico_Cedula");
            entity.Property(e => e.PrestadoraCategoriaNumero)
                .HasComment("Es  un número único que representa  la categoría  de los prestadores de servicio de salud (PSS),    Prestadora Institucional  o  Médico Independiente),  su objetivo es ser utilizados en futuras conversiones hacia el DATA WAREHOUSE.")
                .HasColumnName("Prestadora_Categoria_Numero");
            entity.Property(e => e.PrestadoraNombre)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasDefaultValue("N/E")
                .HasComment("Nombre del prestador de servicio de salud (PSS) que entrego los servicio (Institucional o Médico).")
                .HasColumnName("Prestadora_Nombre");
            entity.Property(e => e.PrestadoraNumero)
                .ValueGeneratedOnAdd()
                .HasComment("Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).")
                .HasColumnName("Prestadora_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<PrestadorasMedicosMaster>(entity =>
        {
            entity.HasKey(e => e.PrestadoraNumero).HasName("PK_Prestadoras_Medicos_Master_1");

            entity.ToTable("Prestadoras_Medicos_Master", tb => tb.HasComment("Es un maestro con los detalles de las Prestadoras de Servicios de Salud (PSS) Médicos, su fuente de datos son los sistemas internos de la SISALRIL."));

            entity.Property(e => e.PrestadoraNumero)
                .ValueGeneratedNever()
                .HasComment("Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).")
                .HasColumnName("Prestadora_Numero");
            entity.Property(e => e.EspecialidadNumero1)
                .HasComment("Numero de la especialidad médica. ")
                .HasColumnName("Especialidad_Numero_1");
            entity.Property(e => e.EspecialidadNumero2)
                .HasComment("Numero de la especialidad médica. ")
                .HasColumnName("Especialidad_Numero_2");
            entity.Property(e => e.EspecialidadNumero3)
                .HasComment("Numero de la especialidad médica. ")
                .HasColumnName("Especialidad_Numero_3");
            entity.Property(e => e.MedicoCedula)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasComment("Es único número de documento de identificación oficial (Cedula, residencia, Pasaporte, etc.) de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Medico_Cedula");
            entity.Property(e => e.MedicoCelular)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasComment("Teléfono móvil del prestador de servicio de salud.")
                .HasColumnName("Medico_Celular");
            entity.Property(e => e.MedicoDireccion)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasComment("Dirección donde está la sede o domicilio principal del prestador de servicio de salud.")
                .HasColumnName("Medico_Direccion");
            entity.Property(e => e.MedicoExequatur)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Número de Exequátur del Médico.")
                .HasColumnName("Medico_Exequatur");
            entity.Property(e => e.MedicoMail)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Email del prestador de servicio de salud.")
                .HasColumnName("Medico_Mail");
            entity.Property(e => e.MedicoNss).HasColumnName("Medico_NSS");
            entity.Property(e => e.MedicoTelefonoConsultorio)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasComment("Teléfono del consultorio del prestador de servicio de salud.")
                .HasColumnName("Medico_Telefono_Consultorio");
            entity.Property(e => e.MedicoTelefonoExtencion)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Teléfono del consultorio del prestador de servicio de salud.")
                .HasColumnName("Medico_Telefono_Extencion");
            entity.Property(e => e.MedicoTelefonoResidencia)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasComment("Teléfono de la residencia del prestador de servicio de salud.")
                .HasColumnName("Medico_Telefono_Residencia");
            entity.Property(e => e.MunicipioNumero)
                .HasComment("Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Municipio_Numero");
            entity.Property(e => e.PrestadoraTipoNumero)
                .HasComment("Es un número único que identifica el tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Prestadora_Tipo_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");

            entity.HasOne(d => d.MunicipioNumeroNavigation).WithMany(p => p.PrestadorasMedicosMasters)
                .HasForeignKey(d => d.MunicipioNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Prestadoras_Medicos_Master_Comunes_Municipios_Cata");
        });

        modelBuilder.Entity<ProfesionalesAsociacionesAsociadosEstadosCatum>(entity =>
        {
            entity.HasKey(e => e.AsociacionAsociadoEstadoNumero);

            entity.ToTable("Profesionales_Asociaciones_Asociados_Estados_Cata");

            entity.Property(e => e.AsociacionAsociadoEstadoNumero).HasColumnName("Asociacion_Asociado_Estado_Numero");
            entity.Property(e => e.AsociacionAsociadoEstadoDescripcion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Asociado_Estado_Descripcion");
            entity.Property(e => e.AsociacionAsociadoEstadoExplicacion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Asociado_Estado_Explicacion");
            entity.Property(e => e.AsociacionAsociadoEstadoMensaje)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Asociado_Estado_Mensaje");
            entity.Property(e => e.AsociacionAsociadoEstadoNota)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Asociacion_Asociado_Estado_Nota");
            entity.Property(e => e.AsociacionAsociadoEstadoPendiente)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Asociacion_Asociado_Estado_Pendiente");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<ProfesionalesAsociacionesAsociadosTran>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Profesionales_Asociaciones_Asociados_Trans");

            entity.Property(e => e.AsociacionRegistroPatronal).HasColumnName("Asociacion_Registro_Patronal");
            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.ProfesionalAsociacionActivo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Profesional_Asociacion_Activo");
            entity.Property(e => e.ProfesionalAsociacionCodigo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Profesional_Asociacion_Codigo");
            entity.Property(e => e.ProfesionalNumero).HasColumnName("Profesional_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<ProfesionalesAsociacionesEstadosCatum>(entity =>
        {
            entity.HasKey(e => e.AsociacionEstadoNumero);

            entity.ToTable("Profesionales_Asociaciones_Estados_Cata");

            entity.Property(e => e.AsociacionEstadoNumero).HasColumnName("Asociacion_Estado_Numero");
            entity.Property(e => e.AsociacionEstadoAsociadoMensaje)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Estado_Asociado_Mensaje");
            entity.Property(e => e.AsociacionEstadoDescripcion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Estado_Descripcion");
            entity.Property(e => e.AsociacionEstadoExplicacion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Estado_Explicacion");
            entity.Property(e => e.AsociacionEstadoMensaje)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Estado_Mensaje");
            entity.Property(e => e.AsociacionEstadoNota)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Asociacion_Estado_Nota");
            entity.Property(e => e.AsociacionEstadoPendiente)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Asociacion_Estado_Pendiente");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<ProfesionalesAsociacionesMaster>(entity =>
        {
            entity.HasKey(e => e.AsociacionRegistroPatronal).HasName("PK_Profesionales_Asociaciones_Master_1");

            entity.ToTable("Profesionales_Asociaciones_Master");

            entity.Property(e => e.AsociacionRegistroPatronal)
                .ValueGeneratedNever()
                .HasColumnName("Asociacion_Registro_Patronal");
            entity.Property(e => e.AsociacionEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Asociacion_Estado_Fecha");
            entity.Property(e => e.AsociacionEstadoNumero).HasColumnName("Asociacion_Estado_Numero");
            entity.Property(e => e.AsociacionFechaAcreditacion)
                .HasColumnType("datetime")
                .HasColumnName("Asociacion_Fecha_Acreditacion");
            entity.Property(e => e.AsociacionNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Nota");
            entity.Property(e => e.AsociacionRncOCedula)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("Asociacion_RNC_o_Cedula");
            entity.Property(e => e.AsociacionSiglas)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Siglas");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.SolicitudAsociacionNumero).HasColumnName("Solicitud_Asociacion_Numero");
        });

        modelBuilder.Entity<ProfesionalesAuditoresSolicitudesTran>(entity =>
        {
            entity.HasKey(e => e.SolicitudAuditorNumero).HasName("PK_Profesionales_Solicitudes_Auditores_Trans");

            entity.ToTable("Profesionales_Auditores_Solicitudes_Trans");

            entity.Property(e => e.SolicitudAuditorNumero)
                .ValueGeneratedNever()
                .HasColumnName("Solicitud_Auditor_Numero");
            entity.Property(e => e.ProfesionalNumero)
                .HasComment("Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).")
                .HasColumnName("Profesional_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.SolicitudEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Solicitud_Estado_Fecha");
            entity.Property(e => e.SolicitudEstadoNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Solicitud_Estado_Nota");
            entity.Property(e => e.SolicitudEstadoNumero).HasColumnName("Solicitud_Estado_Numero");
            entity.Property(e => e.SolicitudFecha)
                .HasColumnType("datetime")
                .HasColumnName("Solicitud_Fecha");
            entity.Property(e => e.SolicitudUsuarioCuenta)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("Solicitud_Usuario_Cuenta");

            entity.HasOne(d => d.ProfesionalNumeroNavigation).WithMany(p => p.ProfesionalesAuditoresSolicitudesTrans)
                .HasForeignKey(d => d.ProfesionalNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Auditores_Trans_Profesionales_Master");

            entity.HasOne(d => d.SolicitudEstadoNumeroNavigation).WithMany(p => p.ProfesionalesAuditoresSolicitudesTrans)
                .HasForeignKey(d => d.SolicitudEstadoNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Auditores_Trans_Profesionales_Solicitudes_Estados_Cata");
        });

        modelBuilder.Entity<ProfesionalesDisposicionesTiposCatum>(entity =>
        {
            entity.HasKey(e => e.DisposicionTipoNumero).HasName("PK_Profesionales_Disposiciones_Tipos_Trans");

            entity.ToTable("Profesionales_Disposiciones_Tipos_Cata");

            entity.Property(e => e.DisposicionTipoNumero).HasColumnName("Disposicion_Tipo_Numero");
            entity.Property(e => e.AplicaNumero).HasColumnName("Aplica_Numero");
            entity.Property(e => e.DisposicionTipoDescripcion)
                .HasMaxLength(80)
                .IsUnicode(false)
                .HasColumnName("Disposicion_Tipo_Descripcion");
            entity.Property(e => e.DisposicionTipoExamenes)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Disposicion_Tipo_Examenes");
            entity.Property(e => e.DisposicionTipoExplicacion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasComment("Es la explicación del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Disposicion_Tipo_Explicacion");
            entity.Property(e => e.DisposicionTipoRequerimientos)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Disposicion_Tipo_Requerimientos");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<ProfesionalesDisposicionesTran>(entity =>
        {
            entity.HasKey(e => e.DisposicionNumero);

            entity.ToTable("Profesionales_Disposiciones_Trans");

            entity.Property(e => e.DisposicionNumero).HasColumnName("Disposicion_Numero");
            entity.Property(e => e.DisposicionDetalle)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("Disposicion_Detalle");
            entity.Property(e => e.DisposicionFecha)
                .HasColumnType("datetime")
                .HasColumnName("Disposicion_Fecha");
            entity.Property(e => e.DisposicionTipoNumero).HasColumnName("Disposicion_Tipo_Numero");
            entity.Property(e => e.PeriodoNumero).HasColumnName("Periodo_Numero");
            entity.Property(e => e.ProfesionalNumero)
                .HasComment("Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).")
                .HasColumnName("Profesional_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");

            entity.HasOne(d => d.DisposicionTipoNumeroNavigation).WithMany(p => p.ProfesionalesDisposicionesTrans)
                .HasForeignKey(d => d.DisposicionTipoNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Disposiciones_Trans_Profesionales_Disposiciones_Tipos_Trans");
        });

        modelBuilder.Entity<ProfesionalesEspecialidadesCatum>(entity =>
        {
            entity.HasKey(e => e.EspecialidadNumero);

            entity.ToTable("Profesionales_Especialidades_Cata", tb => tb.HasComment("Es un catálogo que contiene las especialidades medicas, clasifica el maestro de PSS Médicos, su fuente de datos son los sistemas internos de la SISALRIL."));

            entity.Property(e => e.EspecialidadNumero)
                .ValueGeneratedNever()
                .HasComment("Numero de la especialidad médica. ")
                .HasColumnName("Especialidad_Numero");
            entity.Property(e => e.EspecialidadDescripcion)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasComment("Descripción de la especialidad médica.")
                .HasColumnName("Especialidad_Descripcion");
            entity.Property(e => e.EspecialidadProfesionNumero).HasColumnName("Especialidad_Profesion_Numero");
            entity.Property(e => e.EspecialidadTipoNumero).HasColumnName("Especialidad_Tipo_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");

            entity.HasOne(d => d.EspecialidadTipoNumeroNavigation).WithMany(p => p.ProfesionalesEspecialidadesCata)
                .HasForeignKey(d => d.EspecialidadTipoNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Especialidades_Cata_Profesionales_Especialidades_Tipos_Cata");
        });

        modelBuilder.Entity<ProfesionalesEspecialidadesEstadosCatum>(entity =>
        {
            entity.HasKey(e => e.EspecialidadEstadoNumero);

            entity.ToTable("Profesionales_Especialidades_Estados_Cata");

            entity.Property(e => e.EspecialidadEstadoNumero).HasColumnName("Especialidad_Estado_Numero");
            entity.Property(e => e.EspecialidadEstadoDescripcion)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Es la descripción del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Especialidad_Estado_Descripcion");
            entity.Property(e => e.EspecialidadEstadoExplicacion)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasComment("Es la explicación del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Especialidad_Estado_Explicacion");
            entity.Property(e => e.EspecialidadEstadoMensaje)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("Especialidad_Estado_Mensaje");
            entity.Property(e => e.EspecialidadEstadoNota)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Especialidad_Estado_Nota");
            entity.Property(e => e.EspecialidadEstadoPendiente)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Especialidad_Estado_Pendiente");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<ProfesionalesEspecialidadesTiposCatum>(entity =>
        {
            entity.HasKey(e => e.EspecialidadTipoNumero);

            entity.ToTable("Profesionales_Especialidades_Tipos_Cata");

            entity.Property(e => e.EspecialidadTipoNumero).HasColumnName("Especialidad_Tipo_Numero");
            entity.Property(e => e.EspecialidadTipoDescripcion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Es la descripción del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Especialidad_Tipo_Descripcion");
            entity.Property(e => e.EspecialidadTipoExplicacion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasComment("Es la explicación del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Especialidad_Tipo_Explicacion");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<ProfesionalesEspecialidadesTran>(entity =>
        {
            entity.HasKey(e => new { e.ProfesionalNumero, e.EspecialidadNumero });

            entity.ToTable("Profesionales_Especialidades_Trans");

            entity.Property(e => e.ProfesionalNumero)
                .HasComment("Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).")
                .HasColumnName("Profesional_Numero");
            entity.Property(e => e.EspecialidadNumero)
                .HasComment("Numero de la especialidad médica. ")
                .HasColumnName("Especialidad_Numero");
            entity.Property(e => e.DisposicionNumero).HasColumnName("Disposicion_Numero");
            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.EspecialidadPeriodo).HasColumnName("Especialidad_Periodo");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");

            entity.HasOne(d => d.ProfesionalNumeroNavigation).WithMany(p => p.ProfesionalesEspecialidadesTrans)
                .HasForeignKey(d => d.ProfesionalNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Especialidades_Trans_Profesionales_Master1");
        });

        modelBuilder.Entity<ProfesionalesEstadosCatum>(entity =>
        {
            entity.HasKey(e => e.ProfesionalEstadoNumero);

            entity.ToTable("Profesionales_Estados_Cata");

            entity.Property(e => e.ProfesionalEstadoNumero).HasColumnName("Profesional_Estado_Numero");
            entity.Property(e => e.ProfesionalEstadoDescripcion)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Es la descripción del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Profesional_Estado_Descripcion");
            entity.Property(e => e.ProfesionalEstadoExplicacion)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasComment("Es la explicación del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Profesional_Estado_Explicacion");
            entity.Property(e => e.ProfesionalEstadoMensaje)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("Profesional_Estado_Mensaje");
            entity.Property(e => e.ProfesionalEstadoNota)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Profesional_Estado_Nota");
            entity.Property(e => e.ProfesionalEstadoPendiente)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Profesional_Estado_Pendiente");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroEstado1)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado1");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroFecha1)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha1");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.RegistroUsuario1)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario1");
        });

        modelBuilder.Entity<ProfesionalesMaster>(entity =>
        {
            entity.HasKey(e => e.ProfesionalNumero);

            entity.ToTable("Profesionales_Master");

            entity.Property(e => e.ProfesionalNumero)
                .ValueGeneratedNever()
                .HasComment("Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).")
                .HasColumnName("Profesional_Numero");
            entity.Property(e => e.MunicipioNumero)
                .HasComment("Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Municipio_Numero");
            entity.Property(e => e.NacionalidadNumero)
                .HasComment("Número único que representa la nacionalidad de la persona o afiliado.")
                .HasColumnName("Nacionalidad_Numero");
            entity.Property(e => e.ProfesionalAcreditadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Profesional_Acreditado_Fecha");
            entity.Property(e => e.ProfesionalAuditor)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Profesional_Auditor");
            entity.Property(e => e.ProfesionalAuditorAcreditadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Profesional_Auditor_Acreditado_Fecha");
            entity.Property(e => e.ProfesionalDireccion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("Profesional_Direccion");
            entity.Property(e => e.ProfesionalDocumento)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("Profesional_Documento");
            entity.Property(e => e.ProfesionalEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Profesional_Estado_Fecha");
            entity.Property(e => e.ProfesionalEstadoNumero).HasColumnName("Profesional_Estado_Numero");
            entity.Property(e => e.ProfesionalExequatur)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Número de Exequátur del Médico.")
                .HasColumnName("Profesional_Exequatur");
            entity.Property(e => e.ProfesionalMail)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("Profesional_Mail");
            entity.Property(e => e.ProfesionalNombreCompleto)
                .HasMaxLength(80)
                .IsUnicode(false)
                .HasComment("Es nombre completo (Nombres  y Apellidos) de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Profesional_Nombre_Completo");
            entity.Property(e => e.ProfesionalNss).HasColumnName("Profesional_NSS");
            entity.Property(e => e.ProfesionalSexo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Sexo de la persona (Afiliado)  (F=femenino, M=masculino).")
                .HasColumnName("Profesional_Sexo");
            entity.Property(e => e.ProfesionalTelefono1)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Profesional_Telefono_1");
            entity.Property(e => e.ProfesionalTelefono2)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Profesional_Telefono_2");
            entity.Property(e => e.ProfesionalTelefono3)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Profesional_Telefono_3");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.SolicitudAuditorNumero).HasColumnName("Solicitud_Auditor_Numero");
            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");

            entity.HasOne(d => d.MunicipioNumeroNavigation).WithMany(p => p.ProfesionalesMasters)
                .HasForeignKey(d => d.MunicipioNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Master_Comunes_Municipios_Cata");

            entity.HasOne(d => d.NacionalidadNumeroNavigation).WithMany(p => p.ProfesionalesMasters)
                .HasForeignKey(d => d.NacionalidadNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Master_TSS_Nacionalidades_Cata");

            entity.HasOne(d => d.ProfesionalEstadoNumeroNavigation).WithMany(p => p.ProfesionalesMasters)
                .HasForeignKey(d => d.ProfesionalEstadoNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Master_Profesionales_Estados_Cata");

            entity.HasOne(d => d.SolicitudAuditorNumeroNavigation).WithMany(p => p.ProfesionalesMasters)
                .HasForeignKey(d => d.SolicitudAuditorNumero)
                .HasConstraintName("FK_Profesionales_Master_Profesionales_Solicitudes_Auditores_Trans");

            entity.HasOne(d => d.SolicitudNumeroNavigation).WithMany(p => p.ProfesionalesMasters)
                .HasForeignKey(d => d.SolicitudNumero)
                .HasConstraintName("FK_Profesionales_Master_Profesionales_Solicitudes_Trans");
        });

        modelBuilder.Entity<ProfesionalesMotivosCatum>(entity =>
        {
            entity.HasKey(e => e.MotivoNumero);

            entity.ToTable("Profesionales_Motivos_Cata");

            entity.Property(e => e.MotivoNumero)
                .ValueGeneratedOnAdd()
                .HasColumnName("Motivo_Numero");
            entity.Property(e => e.MotivoAsociacion)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("N")
                .IsFixedLength()
                .HasColumnName("Motivo_Asociacion");
            entity.Property(e => e.MotivoDescripcion)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Motivo_Descripcion");
            entity.Property(e => e.MotivoEspecialidad)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("N")
                .IsFixedLength()
                .HasColumnName("Motivo_Especialidad");
            entity.Property(e => e.MotivoExplicacion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("Motivo_Explicacion");
            entity.Property(e => e.MotivoRequerimiento)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("N")
                .IsFixedLength()
                .HasColumnName("Motivo_Requerimiento");
            entity.Property(e => e.MotivoSolicitud)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("N")
                .IsFixedLength()
                .HasColumnName("Motivo_Solicitud");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<ProfesionalesRequerimientosCatum>(entity =>
        {
            entity.HasKey(e => e.RequerimientoNumero);

            entity.ToTable("Profesionales_Requerimientos_Cata");

            entity.Property(e => e.RequerimientoNumero)
                .HasComment("Número único que identifica el requerimiento (Documento, Identificación, otros), que deben presentar las personas o entidades para un proceso de acreditación.")
                .HasColumnName("Requerimiento_Numero");
            entity.Property(e => e.AplicaNumero).HasColumnName("Aplica_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.RequerimientoAplicaRenovacion)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("N")
                .IsFixedLength()
                .HasColumnName("Requerimiento_Aplica_Renovacion");
            entity.Property(e => e.RequerimientoDescripcion)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasComment("Descripción del requerimiento (Documento, Identificación, otros), que deben presentar las personas o entidades para un proceso de acreditación.")
                .HasColumnName("Requerimiento_Descripcion");
            entity.Property(e => e.RequerimientoFechaVencimiento)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Requerimiento_Fecha_Vencimiento");
            entity.Property(e => e.RequerimientoObligatorio)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Requerimiento_Obligatorio");
            entity.Property(e => e.RequerimientoOrden)
                .HasComment("Número de orden en que debe aparecer los requerimiento para un personas o entidades, en relación a la categoría de acreditación en un proceso de acreditación.")
                .HasColumnName("Requerimiento_Orden");
        });

        modelBuilder.Entity<ProfesionalesRequerimientosEstadosCatum>(entity =>
        {
            entity.HasKey(e => e.RequerimientoEstadoNumero).HasName("PK_Profesional_Requerimientos_Estados_Cata");

            entity.ToTable("Profesionales_Requerimientos_Estados_Cata");

            entity.Property(e => e.RequerimientoEstadoNumero).HasColumnName("Requerimiento_Estado_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.RequerimientoEstadoDescripcion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Requerimiento_Estado_Descripcion");
            entity.Property(e => e.RequerimientoEstadoExplicacion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("Requerimiento_Estado_Explicacion");
            entity.Property(e => e.RequerimientoEstadoMensaje)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("Requerimiento_Estado_Mensaje");
            entity.Property(e => e.RequerimientoEstadoNota)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Requerimiento_Estado_Nota");
            entity.Property(e => e.RequerimientoEstadoPendiente)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Requerimiento_Estado_Pendiente");
        });

        modelBuilder.Entity<ProfesionalesRequerimientosTran>(entity =>
        {
            entity.HasKey(e => new { e.ProfesionalNumero, e.RequerimientoNumero });

            entity.ToTable("Profesionales_Requerimientos_Trans");

            entity.Property(e => e.ProfesionalNumero)
                .HasComment("Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).")
                .HasColumnName("Profesional_Numero");
            entity.Property(e => e.RequerimientoNumero)
                .HasComment("Número único que identifica el requerimiento (Documento, Identificación, otros), que deben presentar las personas o entidades para un proceso de acreditación.")
                .HasColumnName("Requerimiento_Numero");
            entity.Property(e => e.DisposicionNumero).HasColumnName("Disposicion_Numero");
            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Es el código único que representa el documento dentro del sistema.")
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.RequerimientoFechaVence)
                .HasColumnType("datetime")
                .HasColumnName("Requerimiento_Fecha_Vence");

            entity.HasOne(d => d.ProfesionalNumeroNavigation).WithMany(p => p.ProfesionalesRequerimientosTrans)
                .HasForeignKey(d => d.ProfesionalNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Requerimientos_Trans_Profesionales_Master");

            entity.HasOne(d => d.RequerimientoNumeroNavigation).WithMany(p => p.ProfesionalesRequerimientosTrans)
                .HasForeignKey(d => d.RequerimientoNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Requerimientos_Trans_Profesionales_Requerimientos_Cata");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesAsociacionesHistorico>(entity =>
        {
            entity.HasKey(e => new { e.SolicitudNumero, e.AsociacionRegistroPatronal, e.RegistroFechaHistorico });

            entity.ToTable("Profesionales_Solicitudes_Asociaciones_Historico");

            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");
            entity.Property(e => e.AsociacionRegistroPatronal).HasColumnName("Asociacion_Registro_Patronal");
            entity.Property(e => e.RegistroFechaHistorico)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha_Historico");
            entity.Property(e => e.AsociacionAsociadoEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Asociacion_Asociado_Estado_Fecha");
            entity.Property(e => e.AsociacionAsociadoEstadoNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Asociado_Estado_Nota");
            entity.Property(e => e.AsociacionAsociadoEstadoNumero).HasColumnName("Asociacion_Asociado_Estado_Numero");
            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.MotivoNumero).HasColumnName("Motivo_Numero");
            entity.Property(e => e.ProfesionalAsociacionCodigo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Profesional_Asociacion_Codigo");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");

            entity.HasOne(d => d.ProfesionalesSolicitudesAsociacionesTran).WithMany(p => p.ProfesionalesSolicitudesAsociacionesHistoricos)
                .HasForeignKey(d => new { d.SolicitudNumero, d.AsociacionRegistroPatronal })
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Asociaciones_Historico_Profesionales_Solicitudes_Asociaciones_Trans");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesAsociacionesTran>(entity =>
        {
            entity.HasKey(e => new { e.SolicitudNumero, e.AsociacionRegistroPatronal }).HasName("PK_Profesionales_Solicitudes_Asociaciones_Trans_1");

            entity.ToTable("Profesionales_Solicitudes_Asociaciones_Trans");

            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");
            entity.Property(e => e.AsociacionRegistroPatronal).HasColumnName("Asociacion_Registro_Patronal");
            entity.Property(e => e.AsociacionAsociadoEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Asociacion_Asociado_Estado_Fecha");
            entity.Property(e => e.AsociacionAsociadoEstadoNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Asociacion_Asociado_Estado_Nota");
            entity.Property(e => e.AsociacionAsociadoEstadoNumero).HasColumnName("Asociacion_Asociado_Estado_Numero");
            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.MotivoNumero).HasColumnName("Motivo_Numero");
            entity.Property(e => e.ProfesionalAsociacionCodigo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Profesional_Asociacion_Codigo");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");

            entity.HasOne(d => d.AsociacionRegistroPatronalNavigation).WithMany(p => p.ProfesionalesSolicitudesAsociacionesTrans)
                .HasForeignKey(d => d.AsociacionRegistroPatronal)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Asociaciones_Trans_Profesionales_Asociaciones_Master");

            entity.HasOne(d => d.SolicitudNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesAsociacionesTrans)
                .HasForeignKey(d => d.SolicitudNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Asociaciones_Trans_Profesionales_Solicitudes_Trans");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesEspecialidadesHistorico>(entity =>
        {
            entity.HasKey(e => new { e.SolicitudNumero, e.EspecialidadNumero, e.RegistroFechaHistorico });

            entity.ToTable("Profesionales_Solicitudes_Especialidades_Historico");

            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");
            entity.Property(e => e.EspecialidadNumero)
                .HasComment("Numero de la especialidad médica. ")
                .HasColumnName("Especialidad_Numero");
            entity.Property(e => e.RegistroFechaHistorico)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha_Historico");
            entity.Property(e => e.DisposicionNumero).HasColumnName("Disposicion_Numero");
            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.EspecialidadEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Especialidad_Estado_Fecha");
            entity.Property(e => e.EspecialidadEstadoNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Especialidad_Estado_Nota");
            entity.Property(e => e.EspecialidadEstadoNumero).HasColumnName("Especialidad_Estado_Numero");
            entity.Property(e => e.EspecialidadPeriodo).HasColumnName("Especialidad_Periodo");
            entity.Property(e => e.MotivoNumero).HasColumnName("Motivo_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");

            entity.HasOne(d => d.ProfesionalesSolicitudesEspecialidadesTran).WithMany(p => p.ProfesionalesSolicitudesEspecialidadesHistoricos)
                .HasForeignKey(d => new { d.SolicitudNumero, d.EspecialidadNumero })
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Especialidades_Historico_Profesionales_Solicitudes_Especialidades_Trans");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesEspecialidadesTran>(entity =>
        {
            entity.HasKey(e => new { e.SolicitudNumero, e.EspecialidadNumero });

            entity.ToTable("Profesionales_Solicitudes_Especialidades_Trans");

            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");
            entity.Property(e => e.EspecialidadNumero)
                .HasComment("Numero de la especialidad médica. ")
                .HasColumnName("Especialidad_Numero");
            entity.Property(e => e.DisposicionNumero).HasColumnName("Disposicion_Numero");
            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.EspecialidadEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Especialidad_Estado_Fecha");
            entity.Property(e => e.EspecialidadEstadoNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Especialidad_Estado_Nota");
            entity.Property(e => e.EspecialidadEstadoNumero).HasColumnName("Especialidad_Estado_Numero");
            entity.Property(e => e.EspecialidadPeriodo).HasColumnName("Especialidad_Periodo");
            entity.Property(e => e.MotivoNumero).HasColumnName("Motivo_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");

            entity.HasOne(d => d.EspecialidadEstadoNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesEspecialidadesTrans)
                .HasForeignKey(d => d.EspecialidadEstadoNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Especialidades_Trans_Profesionales_Especialidades_Estados_Cata");

            entity.HasOne(d => d.SolicitudNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesEspecialidadesTrans)
                .HasForeignKey(d => d.SolicitudNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Especialidades_Trans_Profesionales_Solicitudes_Trans");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesEstadosCatum>(entity =>
        {
            entity.HasKey(e => e.SolicitudEstadoNumero);

            entity.ToTable("Profesionales_Solicitudes_Estados_Cata");

            entity.Property(e => e.SolicitudEstadoNumero).HasColumnName("Solicitud_Estado_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.SolicitudEstadoDescripcion)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Es la descripción del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Solicitud_Estado_Descripcion");
            entity.Property(e => e.SolicitudEstadoExplicacion)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasComment("Es la explicación del tipo de prestador de servicio de salud (PSS),  (Centros Diagnósticos Especializado, Centro Ambulatorio General, Hospital General, etc.).")
                .HasColumnName("Solicitud_Estado_Explicacion");
            entity.Property(e => e.SolicitudEstadoMensaje)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("Solicitud_Estado_Mensaje");
            entity.Property(e => e.SolicitudEstadoNota)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Solicitud_Estado_Nota");
            entity.Property(e => e.SolicitudEstadoPendiente)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Solicitud_Estado_Pendiente");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesHistorico>(entity =>
        {
            entity.HasKey(e => new { e.SolicitudNumero, e.RegistroFechaHistorico });

            entity.ToTable("Profesionales_Solicitudes_Historico");

            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");
            entity.Property(e => e.RegistroFechaHistorico)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha_Historico");
            entity.Property(e => e.MotivoNumero).HasColumnName("Motivo_Numero");
            entity.Property(e => e.MunicipioNumero)
                .HasComment("Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Municipio_Numero");
            entity.Property(e => e.NacionalidadNumero)
                .HasComment("Número único que representa la nacionalidad de la persona o afiliado.")
                .HasColumnName("Nacionalidad_Numero");
            entity.Property(e => e.ProfesionalDireccion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("Profesional_Direccion");
            entity.Property(e => e.ProfesionalDocumento)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("Profesional_Documento");
            entity.Property(e => e.ProfesionalExequatur)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Número de Exequátur del Médico.")
                .HasColumnName("Profesional_Exequatur");
            entity.Property(e => e.ProfesionalMail)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("Profesional_Mail");
            entity.Property(e => e.ProfesionalNombreCompleto)
                .HasMaxLength(80)
                .IsUnicode(false)
                .HasComment("Es nombre completo (Nombres  y Apellidos) de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Profesional_Nombre_Completo");
            entity.Property(e => e.ProfesionalSexo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Sexo de la persona (Afiliado)  (F=femenino, M=masculino).")
                .HasColumnName("Profesional_Sexo");
            entity.Property(e => e.ProfesionalTelefono1)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Profesional_Telefono_1");
            entity.Property(e => e.ProfesionalTelefono2)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Profesional_Telefono_2");
            entity.Property(e => e.ProfesionalTelefono3)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Profesional_Telefono_3");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.SolicitudActualizarDatos)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("N")
                .IsFixedLength()
                .HasColumnName("Solicitud_Actualizar_Datos");
            entity.Property(e => e.SolicitudCertificadoNumero)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasDefaultValue("")
                .HasColumnName("Solicitud_Certificado_Numero");
            entity.Property(e => e.SolicitudEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Solicitud_Estado_Fecha");
            entity.Property(e => e.SolicitudEstadoNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Solicitud_Estado_Nota");
            entity.Property(e => e.SolicitudEstadoNumero).HasColumnName("Solicitud_Estado_Numero");
            entity.Property(e => e.SolicitudFecha)
                .HasColumnType("datetime")
                .HasColumnName("Solicitud_Fecha");
            entity.Property(e => e.SolicitudUsuarioCuenta)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("Solicitud_Usuario_Cuenta");

            entity.HasOne(d => d.SolicitudNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesHistoricos)
                .HasForeignKey(d => d.SolicitudNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Historico_Profesionales_Solicitudes_Trans");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesLocalidadesTran>(entity =>
        {
            entity.HasKey(e => new { e.SolicitudNumero, e.LocalidadSecuencia });

            entity.ToTable("Profesionales_Solicitudes_Localidades_Trans");

            entity.Property(e => e.SolicitudNumero)
                .HasComment("Número único de la Solicitud.")
                .HasColumnName("Solicitud_Numero");
            entity.Property(e => e.LocalidadSecuencia)
                .ValueGeneratedOnAdd()
                .HasColumnName("Localidad_Secuencia");
            entity.Property(e => e.LocalidadDetalle)
                .HasMaxLength(300)
                .IsUnicode(false)
                .HasColumnName("Localidad_Detalle");
            entity.Property(e => e.LocalidadDireccion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("Localidad_Direccion");
            entity.Property(e => e.LocalidadPrestadoraNombre)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasDefaultValue("N/A")
                .HasColumnName("Localidad_Prestadora_Nombre");
            entity.Property(e => e.LocalidadTelefono1)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Localidad_Telefono_1");
            entity.Property(e => e.LocalidadTelefono2)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Localidad_Telefono_2");
            entity.Property(e => e.MunicipioNumero)
                .HasComment("Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Municipio_Numero");
            entity.Property(e => e.PrestadoraNumero)
                .HasComment("Número único del prestador de servicio de salud que entrego los servicio (Institucional o Médico).")
                .HasColumnName("Prestadora_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesRequerimientosHistorico>(entity =>
        {
            entity.HasKey(e => new { e.SolicitudNumero, e.RequerimientoNumero, e.RegistroFechaHistorico });

            entity.ToTable("Profesionales_Solicitudes_Requerimientos_Historico");

            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");
            entity.Property(e => e.RequerimientoNumero)
                .HasComment("Número único que identifica el requerimiento (Documento, Identificación, otros), que deben presentar las personas o entidades para un proceso de acreditación.")
                .HasColumnName("Requerimiento_Numero");
            entity.Property(e => e.RegistroFechaHistorico)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha_Historico");
            entity.Property(e => e.DisposicionNumero).HasColumnName("Disposicion_Numero");
            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Es el código único que representa el documento dentro del sistema.")
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.MotivoNumero).HasColumnName("Motivo_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.RequerimientoEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Requerimiento_Estado_Fecha");
            entity.Property(e => e.RequerimientoEstadoNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Requerimiento_Estado_Nota");
            entity.Property(e => e.RequerimientoEstadoNumero).HasColumnName("Requerimiento_Estado_Numero");
            entity.Property(e => e.RequerimientoFechaVence)
                .HasColumnType("datetime")
                .HasColumnName("Requerimiento_Fecha_Vence");
            entity.Property(e => e.RequerimientoPresentado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Requerimiento_Presentado");

            entity.HasOne(d => d.ProfesionalesSolicitudesRequerimientosTran).WithMany(p => p.ProfesionalesSolicitudesRequerimientosHistoricos)
                .HasForeignKey(d => new { d.SolicitudNumero, d.RequerimientoNumero })
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Requerimientos_Historico_Profesionales_Solicitudes_Requerimientos_Trans");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesRequerimientosTran>(entity =>
        {
            entity.HasKey(e => new { e.SolicitudNumero, e.RequerimientoNumero });

            entity.ToTable("Profesionales_Solicitudes_Requerimientos_Trans");

            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");
            entity.Property(e => e.RequerimientoNumero)
                .HasComment("Número único que identifica el requerimiento (Documento, Identificación, otros), que deben presentar las personas o entidades para un proceso de acreditación.")
                .HasColumnName("Requerimiento_Numero");
            entity.Property(e => e.DisposicionNumero).HasColumnName("Disposicion_Numero");
            entity.Property(e => e.DocumentoCodigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Es el código único que representa el documento dentro del sistema.")
                .HasColumnName("Documento_Codigo");
            entity.Property(e => e.MotivoNumero).HasColumnName("Motivo_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.RequerimientoEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Requerimiento_Estado_Fecha");
            entity.Property(e => e.RequerimientoEstadoNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Requerimiento_Estado_Nota");
            entity.Property(e => e.RequerimientoEstadoNumero).HasColumnName("Requerimiento_Estado_Numero");
            entity.Property(e => e.RequerimientoFechaVence)
                .HasColumnType("datetime")
                .HasColumnName("Requerimiento_Fecha_Vence");
            entity.Property(e => e.RequerimientoPresentado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Requerimiento_Presentado");

            entity.HasOne(d => d.RequerimientoEstadoNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesRequerimientosTrans)
                .HasForeignKey(d => d.RequerimientoEstadoNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Requerimientos_Trans_Profesionales_Requerimientos_Estados_Cata");

            entity.HasOne(d => d.RequerimientoNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesRequerimientosTrans)
                .HasForeignKey(d => d.RequerimientoNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Requerimientos_Trans_Profesionales_Requerimientos_Cata");

            entity.HasOne(d => d.SolicitudNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesRequerimientosTrans)
                .HasForeignKey(d => d.SolicitudNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Requerimientos_Trans_Profesionales_Solicitudes_Trans");
        });

        modelBuilder.Entity<ProfesionalesSolicitudesTran>(entity =>
        {
            entity.HasKey(e => e.SolicitudNumero);

            entity.ToTable("Profesionales_Solicitudes_Trans");

            entity.Property(e => e.SolicitudNumero).HasColumnName("Solicitud_Numero");
            entity.Property(e => e.AsociacionRegistroPatronal).HasColumnName("Asociacion_Registro_Patronal");
            entity.Property(e => e.MotivoNumero).HasColumnName("Motivo_Numero");
            entity.Property(e => e.MunicipioNumero)
                .HasComment("Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Municipio_Numero");
            entity.Property(e => e.NacionalidadNumero)
                .HasComment("Número único que representa la nacionalidad de la persona o afiliado.")
                .HasColumnName("Nacionalidad_Numero");
            entity.Property(e => e.ProfesionalDireccion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("Profesional_Direccion");
            entity.Property(e => e.ProfesionalDocumento)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("Profesional_Documento");
            entity.Property(e => e.ProfesionalExequatur)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Número de Exequátur del Médico.")
                .HasColumnName("Profesional_Exequatur");
            entity.Property(e => e.ProfesionalMail)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("Profesional_Mail");
            entity.Property(e => e.ProfesionalNombreCompleto)
                .HasMaxLength(80)
                .IsUnicode(false)
                .HasComment("Es nombre completo (Nombres  y Apellidos) de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Profesional_Nombre_Completo");
            entity.Property(e => e.ProfesionalSexo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Sexo de la persona (Afiliado)  (F=femenino, M=masculino).")
                .HasColumnName("Profesional_Sexo");
            entity.Property(e => e.ProfesionalTelefono1)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Profesional_Telefono_1");
            entity.Property(e => e.ProfesionalTelefono2)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Profesional_Telefono_2");
            entity.Property(e => e.ProfesionalTelefono3)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Profesional_Telefono_3");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.SolicitudActualizarDatos)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("N")
                .IsFixedLength()
                .HasColumnName("Solicitud_Actualizar_Datos");
            entity.Property(e => e.SolicitudCertificadoNumero)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasDefaultValue("")
                .HasColumnName("Solicitud_Certificado_Numero");
            entity.Property(e => e.SolicitudEstadoFecha)
                .HasColumnType("datetime")
                .HasColumnName("Solicitud_Estado_Fecha");
            entity.Property(e => e.SolicitudEstadoNota)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("Solicitud_Estado_Nota");
            entity.Property(e => e.SolicitudEstadoNumero).HasColumnName("Solicitud_Estado_Numero");
            entity.Property(e => e.SolicitudFecha)
                .HasColumnType("datetime")
                .HasColumnName("Solicitud_Fecha");
            entity.Property(e => e.SolicitudUsuarioCuenta)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("Solicitud_Usuario_Cuenta");

            entity.HasOne(d => d.MunicipioNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesTrans)
                .HasForeignKey(d => d.MunicipioNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Trans_Comunes_Municipios_Cata");

            entity.HasOne(d => d.NacionalidadNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesTrans)
                .HasForeignKey(d => d.NacionalidadNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Trans_TSS_Nacionalidades_Cata");

            entity.HasOne(d => d.SolicitudEstadoNumeroNavigation).WithMany(p => p.ProfesionalesSolicitudesTrans)
                .HasForeignKey(d => d.SolicitudEstadoNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profesionales_Solicitudes_Trans_Profesionales_Solicitudes_Estados_Cata");
        });

        modelBuilder.Entity<TssCiudadanosMaster>(entity =>
        {
            entity.HasKey(e => e.CiudadanoNss).IsClustered(false);

            entity.ToTable("TSS_Ciudadanos_Master", tb => tb.HasComment("Es un maestro con los detalles de todos los ciudadanos del SDS, su fuente directa de datos son las actualización es la TSS, su fuentes indirectas son  el padrón de cedulados de la JCE y los menores registrados a través del SUIR. "));

            entity.Property(e => e.CiudadanoNss)
                .ValueGeneratedNever()
                .HasComment("Número único que identifica a una persona dentro del SDSS, sobre la cual se nos reporta o registramos un hecho o situación.")
                .HasColumnName("Ciudadano_NSS");
            entity.Property(e => e.CausaInhabilidadNumero)
                .HasComment("Es el número único que representa la causa de inhabilidad de un documento de identificación (Generalmente Cédula) la cual tiene algún impedimento por la JCE y registrado en el padrón de ciudadanos de la TSS. Dicho número se repite según el tipo de causa.")
                .HasColumnName("Causa_Inhabilidad_Numero");
            entity.Property(e => e.CausaTipoCodigo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Tipo de causa de inhabilidad de un documento de identificación (Generalmente Cédula) la cual tiene algún impedimento por la JCE y registrado en el padrón de ciudadanos de la TSS. Dicho número se repite según el tipo de causa.")
                .HasColumnName("Causa_Tipo_codigo");
            entity.Property(e => e.CiudadanoActaNacimientoAnio)
                .HasMaxLength(4)
                .IsUnicode(false)
                .HasComment("Año correspondiente al acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Acta_Nacimiento_Anio");
            entity.Property(e => e.CiudadanoActaNacimientoFolio)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasComment("Número de folio  del acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Acta_Nacimiento_Folio");
            entity.Property(e => e.CiudadanoActaNacimientoLibro)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasComment("Número de libro del acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Acta_Nacimiento_Libro");
            entity.Property(e => e.CiudadanoActaNacimientoMunicipio)
                .HasMaxLength(6)
                .IsUnicode(false)
                .HasComment("Numero de municipio del acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Acta_Nacimiento_Municipio");
            entity.Property(e => e.CiudadanoActaNacimientoNumero)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasComment("Número de acta  del documento de acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Acta_Nacimiento_Numero");
            entity.Property(e => e.CiudadanoActaNacimientoOficialia)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasComment("Número de la oficialía civil correspondiente al  acta de nacimiento de la persona  registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Acta_Nacimiento_Oficialia");
            entity.Property(e => e.CiudadanoActaNacimientoUnida)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Campo donde se unifican todos los campos del acta de nacimiento como una sola cadena, su fin es facilitar la validación en procesos de carga de afilados a planes alternativos.")
                .HasColumnName("Ciudadano_Acta_Nacimiento_Unida");
            entity.Property(e => e.CiudadanoCedulaFormateada)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Es la cédula de identidad y electoral del ciudadano con el formato que incluye los guiones.")
                .HasColumnName("Ciudadano_Cedula_Formateada");
            entity.Property(e => e.CiudadanoFechaNacimiento)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasComment("Es la fecha de nacimiento de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Fecha_Nacimiento");
            entity.Property(e => e.CiudadanoFechaNacimientoDti)
                .HasComment("Es la fecha de nacimiento de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnType("datetime")
                .HasColumnName("Ciudadano_Fecha_Nacimiento_DTI");
            entity.Property(e => e.CiudadanoNoDocumento)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasComment("Es único número de documento de identificación oficial (Cedula, residencia, Pasaporte, etc.) de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_No_Documento");
            entity.Property(e => e.CiudadanoNoDocumentoAnterior)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasComment("Es único número de documento de identificación oficial (Cedula, residencia, Pasaporte, etc.) de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_No_Documento_Anterior");
            entity.Property(e => e.CiudadanoNombreCompleto)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasComment("Es nombre completo (Nombres  y Apellidos) de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Nombre_Completo");
            entity.Property(e => e.CiudadanoNombres)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Es el nombre propio de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Nombres");
            entity.Property(e => e.CiudadanoNssEstatus)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Indica si el NSS del ciudadano esta activo o anulado.")
                .HasColumnName("Ciudadano_NSS_Estatus");
            entity.Property(e => e.CiudadanoPrimerApellido)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Es el primer apellido de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Primer_Apellido");
            entity.Property(e => e.CiudadanoSegundoApellido)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasComment("Es el segundo apellido de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Ciudadano_Segundo_Apellido");
            entity.Property(e => e.CiudadanoSexo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Sexo de la persona (Afiliado)  (F=femenino, M=masculino).")
                .HasColumnName("Ciudadano_Sexo");
            entity.Property(e => e.DocumentoTipoCodigo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Es el código que identifica el tipo de documento de identificación oficial (Cedula, residencia, Pasaporte, etc.) para los casos requeridos de las personas registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Documento_Tipo_Codigo");
            entity.Property(e => e.EstadoCivilCodigo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Es el código de estado civil de cada persona registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Estado_Civil_Codigo");
            entity.Property(e => e.FechaActualizacionTss)
                .HasComment("Fecha ultima en que la TSS actualizo el registro del ciudadano.")
                .HasColumnType("datetime")
                .HasColumnName("Fecha_Actualizacion_TSS");
            entity.Property(e => e.NacionalidadNumero)
                .HasComment("Número único que representa la nacionalidad de la persona o afiliado.")
                .HasColumnName("Nacionalidad_Numero");
            entity.Property(e => e.ProvinciaNumero)
                .HasComment("Número único de la provincia según catálogo de la JCE.  (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Provincia_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValue("sa")
                .HasComment("suser_sname()")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.SangreTipoNumero)
                .HasComment("Es el código único que representa el tipo de sangre de la persona  registrada en el padrón de ciudadanos de la TSS.")
                .HasColumnName("Sangre_Tipo_Numero");
        });

        modelBuilder.Entity<TssEmpleadoresMaster>(entity =>
        {
            entity.HasKey(e => e.EmpleadorRegistroPatronal);

            entity.ToTable("TSS_Empleadores_Master", tb => tb.HasComment("Es un maestro donde se registran los datos de los empleadores empadronados en el  SDSS por la TSS, su fuente de datos la vista de publicadas por TSS diariamente."));

            entity.Property(e => e.EmpleadorRegistroPatronal)
                .ValueGeneratedNever()
                .HasComment("Es el número único que le asigna la Tesorería de la Seguridad Social a cada uno de los empleadores que se registran en dicha institución.    ")
                .HasColumnName("Empleador_Registro_Patronal");
            entity.Property(e => e.ActividadEconomicaNumero)
                .HasComment("Número único que identifica la actividad económica del catálogo de actividades económicas con la que se clasifican los empleadores.")
                .HasColumnName("Actividad_Economica_Numero");
            entity.Property(e => e.CategoriaRiesgo)
                .HasMaxLength(3)
                .IsUnicode(false)
                .HasComment("Código de la categoría de riesgo asignada a un empleador para establecer la taza de cotización con la que debe cotizar para el Seguro de Riesgos Laborales.")
                .HasColumnName("Categoria_Riesgo");
            entity.Property(e => e.EmpleadorCuentaBanco)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasComment("Numero de cuenta del banco del empleador.")
                .HasColumnName("Empleador_Cuenta_Banco");
            entity.Property(e => e.EmpleadorDireccionCalle)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasComment("Nombre de la calle o carretera de la dirección donde está la sede o domicilio principal del empleador.")
                .HasColumnName("Empleador_Direccion_Calle");
            entity.Property(e => e.EmpleadorDireccionEdificio)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasComment("Nombre del edificio o residencial de la dirección donde está la sede o domicilio principal del empleador.")
                .HasColumnName("Empleador_Direccion_Edificio");
            entity.Property(e => e.EmpleadorDireccionNumero)
                .HasMaxLength(12)
                .IsUnicode(false)
                .HasComment("Número relacionado con la dirección donde está la sede o domicilio principal del empleador.")
                .HasColumnName("Empleador_Direccion_Numero");
            entity.Property(e => e.EmpleadorDireccionPiso)
                .HasMaxLength(2)
                .IsUnicode(false)
                .HasComment("Piso relacionado con la dirección donde está la sede o domicilio principal del empleador.")
                .HasColumnName("Empleador_Direccion_Piso");
            entity.Property(e => e.EmpleadorDireccionSector)
                .HasMaxLength(80)
                .IsUnicode(false)
                .HasComment("Sector de la dirección donde está la sede o domicilio principal del empleador.")
                .HasColumnName("Empleador_Direccion_Sector");
            entity.Property(e => e.EmpleadorEmail)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasComment("Email del empleador.")
                .HasColumnName("Empleador_EMAIL");
            entity.Property(e => e.EmpleadorEstatus)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Indica si el empleador esta de Alta o de Baja en la TSS.")
                .HasColumnName("Empleador_Estatus");
            entity.Property(e => e.EmpleadorFechaActualizacionTss)
                .HasComment("Fecha ultima en que la TSS actualizo el registro.")
                .HasColumnType("datetime")
                .HasColumnName("Empleador_Fecha_Actualizacion_TSS");
            entity.Property(e => e.EmpleadorFechaRegistroTss)
                .HasComment("Fecha en que la TSS realizo el registro.")
                .HasColumnType("datetime")
                .HasColumnName("Empleador_Fecha_Registro_TSS");
            entity.Property(e => e.EmpleadorNombreComercial)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasComment("Nombre comercial del empleador.")
                .HasColumnName("Empleador_Nombre_Comercial");
            entity.Property(e => e.EmpleadorRazonSocial)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasComment("Es la razón social registrada por el empleador en la DGII, y que utiliza la Tesorería de la Seguridad Social en su registro de empleadores. Representa el nombre oficial de cada empresa o institución en el país.")
                .HasColumnName("Empleador_Razon_Social");
            entity.Property(e => e.EmpleadorRncOCedula)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasComment("RNC (Registro Nacional Contribuyente) o Cédula del empleador.")
                .HasColumnName("Empleador_RNC_o_Cedula");
            entity.Property(e => e.EmpleadorRncOCedulaSfs)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasComment("RNC (Registro Nacional Contribuyente) o Cédula del empleador.")
                .HasColumnName("Empleador_RNC_o_Cedula_SFS");
            entity.Property(e => e.EmpleadorSalarioSeguridadSocial)
                .HasComment("Salario utilizado para cuantificar la cantidad de trabajadores  que perciben un mismo salario  bajo un grupo de criterios dentro de un consolidado (Tabla con datos calculados por grupos).")
                .HasColumnType("decimal(14, 2)")
                .HasColumnName("Empleador_Salario_Seguridad_Social");
            entity.Property(e => e.EmpleadorTelefono1)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasComment("Teléfono 1 del empleador.")
                .HasColumnName("Empleador_Telefono_1");
            entity.Property(e => e.EmpleadorTelefono2)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasComment("Teléfono 2 del empleador.")
                .HasColumnName("Empleador_Telefono_2");
            entity.Property(e => e.EmpleadorTipoCuenta)
                .HasComment("Tipo de cuenta bancaria del empleador.")
                .HasColumnName("Empleador_Tipo_Cuenta");
            entity.Property(e => e.EmpleadorTotalTrabajadores)
                .HasComment("Cantidad de trabajadores en nomina de un empleador actualmente.")
                .HasColumnName("Empleador_Total_Trabajadores");
            entity.Property(e => e.EmpresaTipoCodigo)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasComment("Código que representa el Tipo de empresa según el sector al que pertenece (Pública centralizada, Pública No Centralizada, Privada y Mixta).")
                .HasColumnName("Empresa_Tipo_Codigo");
            entity.Property(e => e.EntidadRecaudadoraNumero)
                .HasComment("Número único que identifica a cada entidad recaudadora en el SUIR TSS.")
                .HasColumnName("Entidad_Recaudadora_Numero");
            entity.Property(e => e.MunicipioNumero)
                .HasComment("Número único del municipio según catálogo de la JCE. (Donde está ubicado una entidad o persona, o sucedió un hecho).")
                .HasColumnName("Municipio_Numero");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
            entity.Property(e => e.SectorEconomicoNumero)
                .HasComment("Número único del sector económico según clasificación de la TSS para los empleadores (Gobierno, Salud, ONG, Zona Franca, etc.).")
                .HasColumnName("Sector_Economico_Numero");
            entity.Property(e => e.SectorSalarialNumero)
                .HasComment("Número único que identifica un sector salarial para los empleadores registrados en la TSS.")
                .HasColumnName("Sector_Salarial_Numero");

            entity.HasOne(d => d.MunicipioNumeroNavigation).WithMany(p => p.TssEmpleadoresMasters)
                .HasForeignKey(d => d.MunicipioNumero)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_TSS_Empleadores_Master_Comunes_Municipios_Cata");
        });

        modelBuilder.Entity<TssNacionalidadesCatum>(entity =>
        {
            entity.HasKey(e => e.NacionalidadNumero);

            entity.ToTable("TSS_Nacionalidades_Cata", tb => tb.HasComment("Es un catálogo de las nacionalidades, su fuente de actualización es la TSS."));

            entity.Property(e => e.NacionalidadNumero)
                .ValueGeneratedNever()
                .HasComment("Número único que representa la nacionalidad de la persona o afiliado.")
                .HasColumnName("Nacionalidad_Numero");
            entity.Property(e => e.NacionalidadDescripcion)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasComment("Descripción de la nacionalidad de la persona o afiliado.")
                .HasColumnName("Nacionalidad_Descripcion");
            entity.Property(e => e.NacionalidadPaisNombre)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasComment("Es el nombre del pais correspondiente a la nacionalidad de la persona o afiliado.")
                .HasColumnName("Nacionalidad_Pais_Nombre");
            entity.Property(e => e.RegistroEstado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasDefaultValue("A")
                .IsFixedLength()
                .HasComment("Representa el estado en que se encuentra un registro en una tabla (A=Activo, I=Inactivo).")
                .HasColumnName("Registro_Estado");
            entity.Property(e => e.RegistroFecha)
                .HasDefaultValueSql("(getdate())")
                .HasComment("Indica la fecha de cuando se insertó o se actualizó un registro en una tabla.")
                .HasColumnType("datetime")
                .HasColumnName("Registro_Fecha");
            entity.Property(e => e.RegistroUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("(suser_sname())")
                .HasComment("Indica el usuario que ejecutó la operación de insertar o actualizar un registro en una tabla.")
                .HasColumnName("Registro_Usuario");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
