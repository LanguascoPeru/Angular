import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input() nuevoColor:string = ""; 
  constructor(private elementRef :ElementRef) { 
      console.log('llamando a la directiva de resaltados');
      // elementRef.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave') mouseSalio(){
    this.elementRef.nativeElement.style.backgroundColor=null;
  }

  private resaltar(nuevoColor:string){
    this.elementRef.nativeElement.style.backgroundColor=nuevoColor;
  }



}
