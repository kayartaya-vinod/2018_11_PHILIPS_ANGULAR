import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ViewContactComponent } from "./components/view-contact/view-contact.component";
import { AddContactComponent } from "./components/template-driven/add-contact/add-contact.component";
import { AddContactComponent as AddContactModelDriven } from "./components/model-driven/add-contact/add-contact.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { JavaComponent } from "./components/courses/java/java.component";
import { DotnetComponent } from "./components/courses/dotnet/dotnet.component";
import { PythonComponent } from "./components/courses/python/python.component";
import { SpringComponent } from "./components/courses/java/spring/spring.component";
import { HibernateComponent } from "./components/courses/java/hibernate/hibernate.component";
import { RxjsTestComponent } from "./components/rxjs-test/rxjs-test.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'search-contacts',
        loadChildren: './modules/search-contacts/search-contacts.module#SearchContactsModule'
    },
    {
        path: 'rxjs-test',
        component: RxjsTestComponent
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
        path: 'contacts/:id/edit',
        component: AddContactModelDriven
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
        path: 'courses',
        component: CoursesComponent,
        children: [
            {
                path: 'java',
                component: JavaComponent,
                children: [
                    {
                        path: 'spring',
                        component: SpringComponent
                    },
                    {
                        path: 'hibernate',
                        component: HibernateComponent
                    },
                ]
            },
            {
                path: 'dotnet',
                component: DotnetComponent
            },
            {
                path: 'python',
                component: PythonComponent
            },
        ]
    },
    {
        // make sure that this Route config is the last one
        path: '**',
        component: PageNotFoundComponent
    },
];

export default routeConfig;