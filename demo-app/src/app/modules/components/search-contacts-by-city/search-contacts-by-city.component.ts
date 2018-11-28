import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'search-contacts-by-city',
  templateUrl: './search-contacts-by-city.component.html',
  styleUrls: ['./search-contacts-by-city.component.css']
})
export class SearchContactsByCityComponent implements OnInit {

  city: string;
  contacts = [];

  constructor(private service: ContactsService) { }

  ngOnInit() {
  }
  
  fetchData() {
    this.service.searchByCity(this.city).subscribe(data => this.contacts = data);
  }

}
