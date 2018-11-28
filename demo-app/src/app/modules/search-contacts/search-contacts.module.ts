import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContactsComponent } from '../components/search-contacts/search-contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchContactsByCityComponent } from '../components/search-contacts-by-city/search-contacts-by-city.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsService } from '../services/contacts.service';
import { FormsModule } from '@angular/forms';

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'by-id',
    pathMatch: 'full'
  },
  {
    path: 'by-id',
    component: SearchContactsComponent
  },
  {
    path: 'by-city',
    component: SearchContactsByCityComponent
  }
];


@NgModule({
  declarations: [
    SearchContactsComponent,
    SearchContactsByCityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfig),
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    SearchContactsComponent,
    SearchContactsByCityComponent
  ],
  providers: [
    ContactsService
  ]
})
export class SearchContactsModule { }
