import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, Input, ViewContainerRef } from '@angular/core';
import { ChildDirective } from 'src/app/directives/child.directive';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  @Input()
  comp: Type<any> = ChildComponent

  @ViewChild(ChildDirective)
  childDir: ChildDirective

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log('this.cfr.resolveComponentFactory is', typeof this.cfr.resolveComponentFactory);
    let factory = this.cfr.resolveComponentFactory(this.comp);
    let ref = this.childDir.viewContainerRef;

    ref.clear();
    ref.createComponent(factory);
  }

}
