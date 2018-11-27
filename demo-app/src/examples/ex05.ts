import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { WelcomeComponent } from "./components/welcome.component";


// component (class + html + css)

@Component({
    selector: 'hello-world',
    template: '<h1 class="mycustom-h1">{{message}}</h1><welcome></welcome>',
    styles: [
        `.mycustom-h1 {
            text-align: center;
            color: red;
            background-color: pink;
        }`
    ]
})
class HelloWorldComponent {
    // class part of the component represents the data/behaviour
    // of the component, HTML part represents the DOM part of the 
    // component, and CSS represents the styling of DOM.
    private message: string;

    constructor() {
        console.log('HelloWorldComponent instantiated')
        this.message = 'Hello, World!';
    }
}



///------------------
@NgModule({
    // you have list all componets/directives/pipes part of this module
    declarations: [
        HelloWorldComponent,
        WelcomeComponent
    ],
    // list of all other modules (angular, 3rd party) that your module wants to use
    imports: [
        BrowserModule, // Handles all DOM manipulation
    ],
    bootstrap: [
        HelloWorldComponent,
        // WelcomeComponent, // without bootstrapping, a component cannot be used in the index.html
    ]
})
class AppModule { }


/////---------
// ask angular to bootstrap the module 'AppModule'

platformBrowserDynamic().bootstrapModule(AppModule);