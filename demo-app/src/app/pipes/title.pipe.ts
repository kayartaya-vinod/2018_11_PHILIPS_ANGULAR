import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string): any {
    switch (value.toLowerCase()) {
      case 'male':
      case 'm':
        return 'Mr.';
      case 'female':
      case 'f':
        return 'Miss.'
    }
    return null;
  }

}
