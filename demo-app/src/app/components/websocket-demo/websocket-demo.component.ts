import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'websocket-demo',
  templateUrl: './websocket-demo.component.html',
  styleUrls: ['./websocket-demo.component.css']
})
export class WebsocketDemoComponent implements OnInit {

  message: string;
  messages: Observable<string>;
  imgData: string;

  constructor(private service: MessageService) { }

  ngOnInit() {
    // this is an obserable and the subscription happens in HTML tepmlate
    // at *ngFor="let msg of messages | async"
    this.messages = this.service.getAllMessages();
    this.service.getImageData().subscribe(resp => {
      this.imgData = resp._body
    });
  }

  // button handler
  postMessage() {
    this.service.postMessage(this.message);
    this.message = '';
  }
}
