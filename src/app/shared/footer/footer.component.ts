import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit{

constructor( public _servicio: InfoPaginaService){}

  ngOnInit(): void {
    
  }
}
