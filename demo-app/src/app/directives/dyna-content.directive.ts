import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dyna-content]'
})
export class DynaContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
