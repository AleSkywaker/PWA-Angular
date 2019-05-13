import { PaisInterface } from './../../interfaces/pais.interface';
import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: PaisInterface[] = [];

  constructor( 
    public paisesService : PaisesService,
    private activatedRoute : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit() {
    this.paisesService.getPaises()
      .then(paises =>  this.paises = paises )
  }

}
