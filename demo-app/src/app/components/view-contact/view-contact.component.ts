import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contact = new Contact();
  flag = true;
  // constructor should be limited for dependency injection
  constructor() {
    // console.log('ViewContactComponent instantiated!');
  }

  // use ngOnInit for all other initializations
  ngOnInit(): void {
    // console.log('ViewContactComponent initialized using ngOnInit()!');
    this.contact.name = 'Vinod';
    this.contact.city = 'Bangalore';
    this.contact.email = 'vinod@vinod.co';
    this.contact.phone = '9731424784';
  }
  
  // <button (click)="changeDetails()" >Change details</button>
  changeDetails(): void {
    if (this.flag) {
      this.contact.name = 'John Doe';
      this.contact.city = 'Dallas';
      this.contact.email = 'johndoe@example.com';
      this.contact.phone = '5556424722';
    }
    else {
      this.contact.name = 'Vinod';
      this.contact.city = 'Bangalore';
      this.contact.email = 'vinod@vinod.co';
      this.contact.phone = '9731424784';
    }
    this.flag = !this.flag;
  }
}
