import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CourseAction, DELETE_COURSE } from 'src/app/actions/type';

@Component({
  selector: 'view-courses',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  courses: Observable<Course[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.courses = this.store.select('courses');
  }

  deleteCourse(title: string) {
    if (window.confirm('Are you sure?') === false) return;

    this.store.dispatch(new CourseAction(DELETE_COURSE, title));
  }
}

// <a href="javascript:void(0)" (click)="deleteCourse(c.title)">
// <span class="fa fa-trash pull-right"></span>
// </a>
