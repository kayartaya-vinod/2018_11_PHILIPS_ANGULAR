import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Contact>, searchToken?: string, fields?: Array<string>): Array<Contact> {
    if (!searchToken) return value;
    if (!value || value.length == 0) return value;

    if (!fields || fields.length == 0) {
      fields = Object.keys(value[0]);
    }

    // fields is an array supplied by user or creted above

    return value.filter(c => this.searchInFields(c, fields, searchToken));

  }

  searchInFields(obj, fields, token): boolean {
    const re = new RegExp(token, 'i');
    for (let i = 0; i < fields.length; i++) {
      let fld = fields[i];
      if (re.test(obj[fld])) {
        return true;
      }
    }
    return false;
  }

}
