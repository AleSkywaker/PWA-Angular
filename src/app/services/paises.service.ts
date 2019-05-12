import { PaisInterface } from './../interfaces/pais.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private paises: PaisInterface[] = [];

  constructor(private http: HttpClient) { }

  getPaises(): Promise<PaisInterface[]>{

    if (this.getPaises.length > 0){
       return Promise.resolve(this.paises)
    }
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
     .subscribe(  (paises:PaisInterface[]) =>{
        console.log(paises);
        this.paises = paises;
     })
  }
}
