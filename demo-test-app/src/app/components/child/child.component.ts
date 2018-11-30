import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  cfr: ComponentFactoryResolver;
  
  constructor() { }

  ngOnInit() {
  }

}
