import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  constructor(
    public paisesService : PaisesService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
  }

}
