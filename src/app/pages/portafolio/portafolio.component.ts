// src/app/pages/portafolio/portafolio.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  standalone: true,
  selector: 'app-portafolio',
  templateUrl: './portafolio.html',
  styleUrls: ['./portafolio.css'],
  imports: [CommonModule, RouterModule] // <- para *ngFor y routerLink
})
export class PortafolioComponent {
  // IMPORTANTÍSIMO: inyectar aquí
  constructor(public productosService: ProductosService) {}
}

