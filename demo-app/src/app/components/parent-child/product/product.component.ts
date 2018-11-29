import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  value: any;
  
  constructor() { }

  ngOnInit() {
  }

}
