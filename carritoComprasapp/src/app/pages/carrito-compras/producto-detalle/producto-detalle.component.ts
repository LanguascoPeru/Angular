import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  constructor( private route:ActivatedRoute) { }

  ngOnInit() {
    const ID = this.route.snapshot.paramMap.get('id');

    if (ID ==='nuevo') {
     
    }else{
        console.log('entroo ' + ID );
    }

  }

}
