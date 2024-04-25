using System;
using System.Collections.Generic;

namespace NUPRE.Models;

public partial class ProfesionalesAsociacionesAsociadosTran
{
    public int ProfesionalNumero { get; set; }

    public int AsociacionRegistroPatronal { get; set; }

    public string ProfesionalAsociacionCodigo { get; set; } = null!;

    public string DocumentoCodigo { get; set; } = null!;

    public string ProfesionalAsociacionActivo { get; set; } = null!;

    public string RegistroEstado { get; set; } = null!;

    public string RegistroUsuario { get; set; } = null!;

    public DateTime RegistroFecha { get; set; }
}
