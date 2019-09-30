import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef :ElementRef) { 
      console.log('llamando a la directiva de resaltados');
      elementRef.nativeElement.style.backgroundColor="yellow";
  }

}
