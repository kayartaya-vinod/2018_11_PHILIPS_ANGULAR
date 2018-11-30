import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Http  } from '@angular/http';


const url = 'http://localhost:5000/test'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private socket;

  constructor(private http: Http) { }

  getImageData(): Observable<any> {
    return this.http.get('http://localhost:5000/base64-pic')
  }

  postMessage(message): void {
    if (this.socket) {
      this.socket.emit('msg', message)
    }
  }

  getAllMessages(): Observable<any> {

    return new Observable(observer => {
      this.socket = io(url); // serverside 'connect' event is fired

      // regisgter for event listeners
      this.socket.on('msg', data => {
        observer.next(data); // send data as stream to the subscribers
      });

      this.socket.on('connect', data => {
        observer.next(data); // send data as stream to the subscribers
      });

    });
  }

}
