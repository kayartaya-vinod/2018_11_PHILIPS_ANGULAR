import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact;

  constructor(private service: ContactsService, private router: Router) { }

  ngOnInit() {
    this.contact = new Contact();
  }

  save() {
    this.service.addContact(this.contact)
      .subscribe(contact => {
        this.router.navigate(['/contacts', contact.id])
      }, err => {
        console.log('There was an error while saving data', err);
      }, ()=>{
        console.log('subscription completed!');
      });
  }

}
