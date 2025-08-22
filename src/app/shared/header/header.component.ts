import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [RouterModule],
})
export class HeaderComponent implements OnInit {

  constructor(
    public _servicio: InfoPaginaService,
    private router: Router   // ✅ se inyecta aquí
  ) {}

  ngOnInit(): void {}

  buscarProducto(termino: string) {
    if (!termino || termino.trim().length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }
}
