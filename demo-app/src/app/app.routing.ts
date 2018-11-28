import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ViewContactComponent } from "./components/view-contact/view-contact.component";
import { AddContactComponent } from "./components/template-driven/add-contact/add-contact.component";
import { AddContactComponent as AddContactModelDriven } from "./components/model-driven/add-contact/add-contact.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        component: ContactListComponent
    },
    {
        path: 'contacts/:id',
        component: ViewContactComponent
    },
    {
        path: 'add-contact/template-driven',
        component: AddContactComponent
    },
    {
        path: 'add-contact/model-driven',
        component: AddContactModelDriven
    },
    {
        // make sure that this Route config is the last one
        path: '**',
        component: PageNotFoundComponent
    },
];

export default routeConfig;