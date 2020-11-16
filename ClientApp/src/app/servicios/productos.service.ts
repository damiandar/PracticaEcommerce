import { Injectable, Inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { IProducto } from '../models/iproducto'; 

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiURL= this.baseUrl + 'api/productos';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:
  string) {}

  getProductos(): Observable<IProducto[]>{ 
    return this.http.get<IProducto[]> (this.apiURL);
  }
  
}
