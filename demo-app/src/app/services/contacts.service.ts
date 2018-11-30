import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// npm install rxjs@6 rxjs-compat@6 --save
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:4000/contacts/';

@Injectable()
export class ContactsService {

  private contacts;

  // Note: HttpClient service is ued only in getContacts() method
  constructor(private http: Http, private hc: HttpClient) {
    console.log('ContactsService instantiated!');
  }

  // no pagination
  async getContacts() {
    const data = await this.hc.get(baseUrl).toPromise()
    return data;
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

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post(baseUrl, contact)
      .map(resp => resp.json() as Contact);
  }

  // http://localhost:4000/contacts/33
  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put(baseUrl + contact.id, contact)
      .map(resp => resp.json() as Contact);
  }
}
