import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  searchToken: string;

  contacts: Contact[]; // contacts: Array<Contact>;
  pageNum = 1;

  // since this constructor is called by Angular, Angular will either
  // create a new instance of ContactsService or get a reference of an
  // already existing one. This is called dependency injection.
  constructor(private service: ContactsService) {
    console.log('ContactListComponent instantiated!');
  }

  ngOnInit() {
    this.service.getAllContacts()
      .subscribe(data => this.contacts = data);
  }

  loadMore() {
    this.service.getAllContacts(++this.pageNum)
      .subscribe(data => this.contacts.push(...data));
  }

}
