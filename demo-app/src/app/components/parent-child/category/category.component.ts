import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()
  value:any;

  constructor() { }

  ngOnInit() {
    // console.log('value is', this.value);
  }
}
