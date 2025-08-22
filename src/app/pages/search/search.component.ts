import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
})
export class SearchComponent implements OnInit {

  termino = '';

  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.termino = params['termino'] ?? '';
      console.log('buscando:', this.termino);
      this.productosService.buscarProducto(this.termino);
    });
  }
}
