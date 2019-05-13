import { PaisInterface } from './../../interfaces/pais.interface';
import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: PaisInterface[] = [];

  constructor( public paisesService : PaisesService) { }

  ngOnInit() {
    this.paisesService.getPaises()
      .then(paises =>  this.paises = paises )
  }

}
