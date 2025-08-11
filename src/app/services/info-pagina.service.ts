import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {} as infoPagina;
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio de InfoPagina listo');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(): void {
    // Leer archivo JSON local
    this.http.get<infoPagina>('assets/data/data-pagina.json')
      .subscribe((response) => {
        this.cargada = true;
        this.info = response;
      });
  }

  private cargarEquipo(): void {
    // Leer JSON desde Firebase
    this.http.get<any[]>('https://angular-portafolio-html-ab148-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((response) => {
        this.equipo = response;
        //console.log(response);
      });
  }
}
