using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Machi.Models
{

    [Table("tbl_producto")]
    public class Producto
    {
        public int Id{get;set;}
        public string Nombre{get;set;}
        
    }
}