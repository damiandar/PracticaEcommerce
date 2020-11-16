using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Machi.Models;

namespace Machi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductosController: ControllerBase
    {
        private readonly TiendaDbContext _context;

        public ProductosController(TiendaDbContext context){
            _context=context;
        }
        [HttpGet]
        public List<Producto> GetProductos(){
            return _context.Producto.ToList();
        }
    }
}