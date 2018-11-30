import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact;
  contact1;
  contact2;

  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.contact = this.service.getContactById(12);
    
    this.service.getContactByIdAsync(12)
      .then(data => this.contact1 = data);

    this.service.getContactByIdHttp(12)
      .subscribe(data => this.contact2 = data);
  }

}
