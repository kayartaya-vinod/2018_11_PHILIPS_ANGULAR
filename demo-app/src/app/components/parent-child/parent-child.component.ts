import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        name: 'Beverages',
        description: 'Drinks, milk, coffee, tea etc.',
        products: [
          {
            name: 'Chai',
            price: 17.24
          },
          {
            name: 'Chang',
            price: 123.4
          },
          {
            name: 'Coca cola',
            price: 20.0
          }
        ]
      },
      {
        name: 'Computer spares',
        description: 'HDD, Pendrive, etc',
        products: [
          {
            name: '64GB Pendrive',
            price: 299.9
          },
          {
            name: 'Charging cable',
            price: 89.8
          }
        ]
      }
    ];
  }

}
