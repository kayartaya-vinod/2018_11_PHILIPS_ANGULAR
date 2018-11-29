import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'view-courses',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  courses: Observable<Course[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.courses = this.store.select('courses');
  }
}
