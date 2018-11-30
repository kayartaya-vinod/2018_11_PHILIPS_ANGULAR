import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[childDirective]'
})
export class ChildDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
