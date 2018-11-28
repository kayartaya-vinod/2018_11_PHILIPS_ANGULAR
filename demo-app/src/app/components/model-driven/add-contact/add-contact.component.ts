import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;
  isEdit = false;

  constructor(private service: ContactsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl(''),
      gender: new FormControl('Male'),
      email: new FormControl(''),
      phone: new FormControl('', [Validators.pattern(/^\d{10,13}$/)])
    });

    this.activatedRoute.params.subscribe(pathParams => {
      if ('id' in pathParams) {
        this.isEdit = true;
        this.service.getOneContact(pathParams['id'])
          .subscribe(contact => this.contactForm.setValue(contact));
      }
    });
  }

  save() {
    let c = this.contactForm.value;
    let method = 'addContact';
    if (this.isEdit) {
      method = 'updateContact';
    }

    this.service[method](c)
      .subscribe(contact => this.router.navigate(['/contacts', contact.id]));
  }
}
