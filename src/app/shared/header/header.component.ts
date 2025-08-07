import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'], // ✅ aquí lo agregas
  imports: [RouterModule]
})
export class HeaderComponent implements OnInit{

  constructor( public _servicio: InfoPaginaService){}

  ngOnInit(): void {
    
  }
}

