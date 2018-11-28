import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ViewContactComponent } from "./components/view-contact/view-contact.component";

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
        // make sure that this Route config is the last one
        path: '**',
        component: PageNotFoundComponent
    },
];

export default routeConfig;