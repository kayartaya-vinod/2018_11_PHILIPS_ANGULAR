import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:4000/contacts/';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  searchById(id: number): Observable<any> {
    return this.http.get(baseUrl + id); // returns an Observable of response body, by default
  }

  searchByCity(city: string) : Observable<any>{
    let options = { params: { city } };
    // return this.http.get(baseUrl, options);
    return this.http.get(baseUrl, options);
  }
}
