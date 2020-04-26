import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service'   //usar servicio creado
import{ Router } from '@angular/router'; //para redireccionar a otra pag
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[]=[];
  constructor( private _heroesService: HeroesService ,
               private router: Router
    
    
    ) {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('Init');
    this.heroes = this._heroesService.getHeroes(); //recuperamos data
    console.log(this.heroes);
  }

  verHeroe(index:number){
    console.log(index);
    this.router.navigate(['/heroe',index]);
  }
}
