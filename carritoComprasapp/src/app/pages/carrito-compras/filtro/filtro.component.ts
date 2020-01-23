import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  filtroIni: number = 100;
  filtroFin: number = 500; 
  @Output() filtroEvent = new EventEmitter<{filtroIni: number, filtroFin: number}>();

  constructor() { }

    ngOnInit() {
  } 

  filtrarProductos() {
    this.filtroEvent.emit({filtroIni: this.filtroIni, filtroFin: this.filtroFin});
  }

}
