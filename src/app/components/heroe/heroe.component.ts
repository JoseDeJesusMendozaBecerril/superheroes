import { Component, OnInit } from '@angular/core';
import {ActivatedRoute }from '@angular/router';
import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe:any={};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService
    ){






    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']) //aqui tengo el id que viene en la url que recibo
      this.heroe = this._heroeService.getHeroe(params['id']); //uso funcion del servicio recuperar heroe
      
    })








  }

  
  
  
}
