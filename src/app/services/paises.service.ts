import { PaisInterface } from './../interfaces/pais.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private paises: PaisInterface[] = [];

  constructor(private http: HttpClient) { }

  getPaises(){
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
     .subscribe(  (paises:PaisInterface[]) =>{
        console.log(paises);
        this.paises = paises;
     })
  }
}
