import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// npm install rxjs@6 rxjs-compat@6 --save
import { Contact } from '../models/contact';

const baseUrl = 'http://localhost:4000/contacts/';

@Injectable()
export class ContactsService {

  constructor(private http: Http) {
    console.log('ContactsService instantiated!');
  }

  getAllContacts(pageNum = 1): Observable<Array<Contact>> {
    const options = {
      params: {
        _page: pageNum,
        _limit: 10
      }
    };

    return this.http.get(baseUrl, options)
      .map(resp => resp.json() as Contact[]);
  }

  getOneContact(id: number): Observable<Contact> {
    return this.http.get(baseUrl + id)
      .map(resp => resp.json() as Contact);
  }
}
