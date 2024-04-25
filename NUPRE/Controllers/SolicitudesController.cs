using Microsoft.AspNetCore.Mvc;
using NUPRE.Models;

namespace NUPRE.Controllers
{
    [ApiController]
    [Route("/api/solicitud")]
    public class SolicitudesController : ControllerBase
    {
        private readonly SisalrilCupreContext _context;
        public SolicitudesController(SisalrilCupreContext context)
        {
                _context = context; 
        }

        [HttpGet(Name = "GetSolicitudes")]
        public  IActionResult GetSolicitudesActivas() {
            var consulta = _context.ProfesionalesSolicitudesTrans.Where(x => x.RegistroEstado == "A").ToList();
            return Ok(consulta);
        }


        ////Guardar solicitudes de NUPRE
        //[HttpPost(Name ="GuardarSolicitudes")]
        //public async Task<ActionResult> GuardarSolicitudes(ProfesionalesSolicitudesTran solicitud)
        //{
        //    _context.Add(solicitud);
        //    await _context.SaveChangesAsync();
        //    return Ok();    
        //}
        //[HttpGet(Name = "obtenerProfesionales")]
        //public IActionResult GetProfesionales()
        //{
        //    return Ok(_context.ProfesionalesSolicitudesEspecialidadesTrans.Where(x => x.EspecialidadEstadoNota == "A").ToList());   
        //}
        //[HttpGet(Name = "obtenerEspecilidades")]
        //public IActionResult Especialidades()
        //{
        //    return Ok(_context.ProfesionalesSolicitudesEspecialidadesTrans.Where(x => x.EspecialidadEstadoNota == "A").ToList());

        //}
        //[HttpGet(Name = "ObtenerAsociaciones")]
        //public IActionResult Asociaciones()
        //{
        //    return Ok(_context.ProfesionalesSolicitudesEspecialidadesTrans.Where(x => x.EspecialidadEstadoNota == "A").ToList());
        //}
        //[HttpGet(Name = "GetPrestadoras")]
        //public IActionResult Prestadoras()
        //{
        //    return Ok(_context.ProfesionalesSolicitudesEspecialidadesTrans.Where(x => x.EspecialidadEstadoNota == "A").ToList());
        //}
        ////public IActionResult GetProfesionales()
        ////{
        ////    return Ok(_context.ProfesionalesSolicitudesEspecialidadesTrans.Where(x => x.EspecialidadEstadoNota == "A").ToList());
        ////}




    }
}
