import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rotateString',
  pure : false
})
export class RotateStringPipe implements PipeTransform {

  transform(inpstring: string, direction: string, iterations : number): string {
    let rotatedString = "";
    let rotateDirection = direction.charAt(0).toLowerCase();
    if(iterations>inpstring.length){
      iterations %= inpstring.length;
    }

    if (rotateDirection=='r'||rotateDirection=='l') {
      for (let index = 0; index < iterations; index++) {
        if (rotateDirection=='r') {
          rotatedString = inpstring.charAt(inpstring.length-1);
          rotatedString += inpstring.substr(0, inpstring.length-1);
        }else{
          rotatedString = inpstring.substr(1, inpstring.length-1);
          rotatedString += inpstring.charAt(0);
        }
        return rotatedString;
      }
    }else{
      rotatedString = inpstring;
    }
    return rotatedString;
  }
}
