import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private readonly base = 'https://angular-html-25cf9.firebaseio.com';

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  // Carga el índice de productos (promesa tipada)
  private cargarProductos(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get<Producto[]>(`${this.base}/productos_idx.json`)
        .subscribe({
          next: (resp) => {
            this.productos = resp ?? [];
            this.cargando = false;
            resolve();
          },
          error: (err) => {
            this.cargando = false;
            reject(err);
          }
        });
    });
  }

  // ⬅️ Tipado correcto del detalle de producto
  getProducto(id: string): Observable<ProductoDescripcion> {
    return this.http.get<ProductoDescripcion>(`${this.base}/productos/${id}.json`);
  }

  buscarProducto(termino: string): void {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => this.filtrarProductos(termino));
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string): void {
    const q = (termino ?? '').toLowerCase();
    this.productosFiltrado = this.productos.filter((p) => {
      const titulo = (p.titulo ?? '').toLowerCase();
      const categoria = (p.categoria ?? '').toLowerCase();
      return titulo.includes(q) || categoria.includes(q);
    });
  }
}
