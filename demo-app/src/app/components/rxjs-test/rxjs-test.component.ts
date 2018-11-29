import { Component, OnInit } from '@angular/core';

// import * as Rx from 'rxjs';
import { Observable, Subscription, Subject } from 'rxjs';

// import 'rxjs/add/operator/concat';
// import { concat } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';


@Component({
  selector: 'rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit {

  constructor() { }

  // import 'rxjs/add/operator/map';
  // import 'rxjs/add/operator/filter';
  // import 'rxjs/add/operator/do';


  ngOnInit() {



    // const subject1 = new Subject();
    const subject1 = Observable.create(observer=>observer.next({name: 'vinod', city: 'bangalore'}))

    // first subscriber
    subject1.subscribe(data => {
      data['name'] ='vinod kumar';
    });

    // second subscriber
    subject1.subscribe(data => console.log('second subscriber got: ', data));


    // subject1.next({name: 'vinod', city: 'bangalore'})
  }

  _ngOnInit() {
    const obs1: Observable<number> = Observable.create(observer => {
      observer.next(100);
      observer.next(200);
      observer.next(300);
      observer.next(777);
      observer.next(888);
      observer.next(999);
      // window['observer'] = observer;
    });

    obs1
      .do(data => console.log('in do() before filter', data))
      .filter(data => data % 2 == 0)
      .do(data => console.log('in do() after filter', data))
      .map(data => data * 2)
      .do(data => console.log('in do() after map', data))
      // .toPromise()
      // .then(data=>console.log(data));
      .subscribe(data => console.log(data));

  }

}
