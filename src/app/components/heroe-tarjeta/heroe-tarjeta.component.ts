import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core'; //input mandar comp papa a hijo
import{ Router } from '@angular/router'; //para redireccionar a otra pag
//output y event emitter del hijo al padre input del padre al hijo

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
 @Input() heroe:any={}; //alguna de las propiedades puede venir de afuera recibir heroe de afuera
 @Input() index:number; //propiedad recibo de componente ṕapa

 @Output() heroeSeleccionado:EventEmitter<number>; // emite id nombre del evento que yo quiero que el padre este escuchando 
        
  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter(); 
   }

  ngOnInit(): void {
  }
  verHeroe(){
    //this.heroeSeleccionado.emit(this.index);
   // console.log(this.index);
   this.router.navigate(['/heroe',this.index]);
  }

}
