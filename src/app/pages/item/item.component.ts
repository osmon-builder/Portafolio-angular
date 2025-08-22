import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';                 // ⬅️ importa esto
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.html',
  styleUrls: ['./item.css'],
  imports: [CommonModule],                                      // ⬅️ y añádelo aquí
})
export class ItemComponent implements OnInit {
  producto?: ProductoDescripcion;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      this.productosService.getProducto(id)
        .subscribe(p => this.producto = p);
    });
  }
}
