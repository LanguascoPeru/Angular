import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  //@Input() ->heroe  @Input() ->index son variables externas que vienen de otro componente (padre)
  @Input() heroe:any = [];
  @Input() index:number;

  mensajeBoton:string = "";
  constructor(private router:Router) { }

  ngOnInit() {
    if (this.index ==0) {
      this.mensajeBoton = "Regresar";
    }else{
      this.mensajeBoton = "Ver mas";
    }
  }

  verHeroe(){
        // ///---navegar hacia una nueva pagina parecido a un link
        // if (this.index ==0) {
        //   this.router.navigate(['/heroes'])
        // }else{
        //   this.router.navigate(['/heroe', this.index])
        // }
  }

}
