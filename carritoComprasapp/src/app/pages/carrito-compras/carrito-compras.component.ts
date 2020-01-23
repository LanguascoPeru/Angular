import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  productos:any=[];

  constructor() {
    for (let index = 1; index <= 7; index++) {
      this.productos.push({
        'id':index,
        'titulo':'Iphone 1 64GB',
        'imagen' : 'assets/images/imagen'+index+'.jpg',
        'marcar':'APPLE',
        'precio' : Math.floor(Math.random() * 1000)
      })    
    }
   }

  ngOnInit() {
  }
  
  recibiendoFiltros($event) {  

    let productosFilter :any =[];

    for (let obj of this.productos){
        if (obj.precio > $event.filtroIni && obj.precio <= $event.filtroFin ) {
          productosFilter.push(obj);
        }
    }
    this.productos = productosFilter;

  }

}
