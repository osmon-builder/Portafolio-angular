import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  constructor(private http: HttpClient){

    console.log('Servicio de IinfoPagina listo');

    //leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (Response: infoPagina) =>{

      this.cargada = true;
      this.info = Response
      console.log(Response);

    })


  }
  
}
