import { Component, OnInit } from '@angular/core';
//--- sirve para navegar hacia otras paginas
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { 
  }

  ngOnInit() {
  }

  buscarHeroe(filtro:string){
          ///---navegar hacia una nueva pagina parecido a un link
     this._router.navigate(['/heroe/search/', filtro])
  }

}
