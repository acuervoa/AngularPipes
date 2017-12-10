import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  activar:boolean;

  constructor(){
    this.activar = false;
  }

  transform(value: string, activar:boolean = true): string {

    let newString:string = '';

    if (activar) {
      // newString.replace('/./i','*');
      for(let i=0;i<=value.length;i++) {
        newString += '*';
      }
    }else{
      newString = value;
    }

    return newString;
  }

}
