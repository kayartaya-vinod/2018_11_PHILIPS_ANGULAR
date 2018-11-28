import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Contact>, searchToken?: string): Array<Contact> {
    if (!searchToken) return value;
    if (!value) return value;

    const re = new RegExp(searchToken, 'i');
    return value.filter(c => re.test(c.name));
  }

}
