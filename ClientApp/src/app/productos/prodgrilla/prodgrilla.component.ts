import { Component, OnInit,OnChanges,Input } from '@angular/core';
import { IProducto } from 'src/app/models/iproducto';
import {ProductosService} from '../../servicios/productos.service'

@Component({
  selector: 'app-prodgrilla',
  templateUrl: './prodgrilla.component.html',
  styleUrls: ['./prodgrilla.component.css']
})
export class ProdgrillaComponent implements OnInit {

  ListadoProductos: IProducto[];
  constructor(private servProd: ProductosService){}
  
  ngOnInit() { 
      this.cargarData();
    } 
  
  cargarData(){
      this.servProd.getProductos()
      .subscribe(result => this.ListadoProductos= result,
      error=> console.error(error)); 
    }
  
  onDetalleClicked(message:number) : void {           
      alert("Handler Padre " + message)      
  } 

}
