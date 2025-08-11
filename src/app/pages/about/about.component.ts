import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Importar CommonModule
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [CommonModule] // 👈 Agregar aquí
})
export class AboutComponent implements OnInit {
  constructor(public infoService: InfoPaginaService) {}

  ngOnInit(): void {}
}

