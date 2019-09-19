import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constrasenia'
})
export class ConstraseniaPipe implements PipeTransform {
  transform(value: any,opcion:boolean=true): any {

    if (opcion) {
      let nombres = value.split("");
      for (let i in nombres){
          nombres[i]= '*' + nombres[i].substring(1);
      }
      return nombres.join("");
    }else{
      return value ;
    }
  }

}
