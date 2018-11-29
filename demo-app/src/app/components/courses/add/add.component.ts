import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CourseAction, ADD_COURSE } from 'src/app/actions/type';

@Component({
  selector: 'add-course',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  course = new Course();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addCourse() {
    // dispatch an action ADD_COURSE, with the course data
    this.store.dispatch(new CourseAction(ADD_COURSE, this.course));
    this.course = new Course();
  }
}
