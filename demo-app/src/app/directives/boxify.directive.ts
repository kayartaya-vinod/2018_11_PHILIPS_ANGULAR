import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBoxify]'
})
export class BoxifyDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.el);
    let style = this.el.nativeElement.style;
    style.border = '1px solid navy';
    style.padding = '5px';
    style.marginRight = '5px';
    style.borderRadius = '5px';
  }
}
