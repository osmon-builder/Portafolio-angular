import { Injectable, provideBrowserGlobalErrorListeners } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
@Injectable({ providedIn: 'root' })
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];


  constructor(private http: HttpClient) {
    this.cargarProductos();              // <-- ¡llamar al método!
  }

  private cargarProductos(): void {
    this.http
      .get<Producto[]>(
        'https://angular-portafolio-html-ab148-default-rtdb.firebaseio.com/productos_idx.json'
      )
      .subscribe({
        next: (response) => {
          console.log('productos:', response);
          this.productos = response;
          this.cargando = false

        
        },
        error: (err) => {
          console.error('Error cargando productos:', err);
        },
      });
  }
}
