import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { JavaComponent } from '../courses/java/java.component';
import { DotnetComponent } from '../courses/dotnet/dotnet.component';
import { PythonComponent } from '../courses/python/python.component';
import { DynaContentDirective } from 'src/app/directives/dyna-content.directive';

@Component({
  selector: 'dynamic-components-demo',
  templateUrl: './dynamic-components-demo.component.html',
  styleUrls: ['./dynamic-components-demo.component.css']
})
export class DynamicComponentsDemoComponent implements OnInit {

  components: Array<any>

  @ViewChild(DynaContentDirective)
  dynaContent: DynaContentDirective;

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    this.components = [
      {
        buttonLabel: 'Java',
        component: JavaComponent
      },
      {
        buttonLabel: 'Microsoft .Net',
        component: DotnetComponent
      },
      {
        buttonLabel: 'Python',
        component: PythonComponent
      }
    ];

    console.log(this.dynaContent);
  }

  loadComponent(comp:any) {
    let factory = this.cfr.resolveComponentFactory(comp);
    let ref = this.dynaContent.viewContainerRef;

    ref.clear();
    ref.createComponent(factory);
  }
}
