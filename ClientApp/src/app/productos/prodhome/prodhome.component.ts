import { Component, OnChanges,Input,Output, EventEmitter } from '@angular/core';
import { IProducto } from 'src/app/models/iproducto';
import {ProductosService} from '../../servicios/productos.service'

@Component({
  selector: 'app-prodhome',
  templateUrl: './prodhome.component.html',
  styleUrls: ['./prodhome.component.css',
  '../../../../node_modules/font-awesome/css/font-awesome.css']
})
export class ProdhomeComponent implements OnChanges {
  @Input() prodDetalle:IProducto;
  @Output() controlClikeado: EventEmitter<number>=new EventEmitter<number>();
  prod:IProducto;

  constructor(private ProductosService: ProductosService){}
  
 
  
  ngOnChanges(): void {
    this.prod=this.prodDetalle;
  }

  onClickCard():void{
    alert("Handler Hijo: " +this.prod.nombre);
    this.controlClikeado.emit(this.prod.id);
  }

  

}
