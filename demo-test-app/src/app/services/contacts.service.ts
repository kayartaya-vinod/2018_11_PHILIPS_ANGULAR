import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContactById(id) {
    return { name: 'Vinod', city: 'Bangalore', email: 'vinod@vinod.co' }
  }

  getContactByIdAsync(id) {
    return new Promise((resolve, reject) => {
      resolve({ name: 'Vinod', city: 'Bangalore', email: 'vinod@vinod.co' });
    });
  }

  getContactByIdHttp(id): Observable<any> {
    return this.http.get('http://localhost:4000/contacts/' + id);
  }

}
