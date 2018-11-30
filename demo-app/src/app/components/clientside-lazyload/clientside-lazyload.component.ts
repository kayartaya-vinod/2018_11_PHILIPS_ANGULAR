import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'clientside-lazyload',
  templateUrl: './clientside-lazyload.component.html',
  styleUrls: ['./clientside-lazyload.component.css']
})
export class ClientsideLazyloadComponent implements OnInit {

  contacts;
  _contacts;
  pageSize = 10;

  constructor(private service: ContactsService) { }

  async ngOnInit() {
    this._contacts = await this.service.getContacts();
    this.contacts = [...this._contacts.splice(0, this.pageSize)]
  }

  loadMore() {
    this.contacts = [...this.contacts, ...this._contacts.splice(0, this.pageSize)]
  }

}
