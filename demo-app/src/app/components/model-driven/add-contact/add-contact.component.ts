import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private service: ContactsService, private router: Router) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl(''),
      gender: new FormControl('Male'),
      email: new FormControl(''),
      phone: new FormControl('', [Validators.pattern(/^\d{10,13}$/)])
    });

    // this.contactForm.setValue({
    //   name: 'Arun',
    //   city: 'Shimoga',
    //   gender: 'Male',
    //   email: '',
    //   phone: ''
    // });

    // this.contactForm.controls.email.setValue('arun@exmaple.com');
  }

  save() {
    this.service.addContact(this.contactForm.value)
      .subscribe(contact => this.router.navigate(['/contacts', contact.id]));
  }

}
