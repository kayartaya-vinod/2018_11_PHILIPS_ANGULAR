import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { ContactsService } from './services/contacts.service';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import routeConfig from './app.routing';
import { TitlePipe } from './pipes/title.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AddContactComponent } from './components/template-driven/add-contact/add-contact.component';
import { AddContactComponent as AddContactModelDriven } from './components/model-driven/add-contact/add-contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { JavaComponent } from './components/courses/java/java.component';
import { PythonComponent } from './components/courses/python/python.component';
import { DotnetComponent } from './components/courses/dotnet/dotnet.component';
import { HibernateComponent } from './components/courses/java/hibernate/hibernate.component';
import { SpringComponent } from './components/courses/java/spring/spring.component';
import { SearchContactsByCityComponent } from './modules/components/search-contacts-by-city/search-contacts-by-city.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ViewContactComponent,
    ContactListComponent,
    HomeComponent,
    PageNotFoundComponent,
    TitlePipe,
    FilterPipe,
    AddContactComponent,
    AddContactModelDriven,
    CoursesComponent,
    JavaComponent,
    PythonComponent,
    DotnetComponent,
    HibernateComponent,
    SpringComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routeConfig, { useHash: false })
  ],
  providers: [
    // register all services (injectables) here:
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
