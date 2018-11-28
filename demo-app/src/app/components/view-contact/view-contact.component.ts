import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contact = new Contact();

  // constructor should be limited for dependency injection
  constructor(private activatedRoute: ActivatedRoute,
    private service: ContactsService) {
  }

  // use ngOnInit for all other initializations
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(pathParams => {
      this.service.getOneContact(pathParams.id)
        .subscribe(contact => this.contact = contact);
    });
  }

}
