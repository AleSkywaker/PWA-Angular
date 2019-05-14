import { PaisInterface } from "./../interfaces/pais.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PaisesService {
  
  private paises: PaisInterface[] = [];

  constructor(private http: HttpClient) {}

  getPaises(): Promise<PaisInterface[]> {
    if (this.getPaises.length > 0) {
      return Promise.resolve(this.paises);
    }

    return new Promise(resolve => {
      this.http
        .get("https://restcountries.eu/rest/v2/lang/es")
        .subscribe((paises: PaisInterface[]) => {
          console.log(paises);
          this.paises = paises;
          resolve(paises);
        });
    });
  }


  getPais(id:string){

    if(this.paises.length > 0){
      // Hay paises en este array
      const pais = this.paises.find( p => p.alpha3Code === id);
      
    }

  }
}
