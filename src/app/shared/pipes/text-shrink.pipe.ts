import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShrink',
  standalone: false,
})
export class TextShrinkPipe implements PipeTransform {

  transform(value: string, ): string {
    let result = value
    if(result.length > 50) {
      result = value.slice(0, 50) + '...';
      return result
    }
    return result
  }

}
