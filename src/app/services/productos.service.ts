import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
// ❌ quita esto: import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  // TIPAR la promesa como Promise<void>
  private cargarProductos(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // añadir genérico <Producto[]>
      this.http.get<Producto[]>('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
        .subscribe({
          next: (resp) => {
            this.productos = resp ?? [];
            this.cargando = false;
            resolve();                // ok porque es Promise<void>
          },
          error: (err) => {
            this.cargando = false;
            reject(err);
          }
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-25cf9.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // cargar productos y luego filtrar
      this.cargarProductos().then(() => this.filtrarProductos(termino));
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = [];
    const q = (termino ?? '').toLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = (prod.titulo ?? '').toLowerCase();
      const categoriaLower = (prod.categoria ?? '').toLowerCase();
      if (categoriaLower.includes(q) || tituloLower.includes(q)) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
