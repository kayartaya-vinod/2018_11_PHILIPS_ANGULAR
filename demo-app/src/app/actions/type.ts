// src/app/actions/types.ts
import { Action } from '@ngrx/store';

export const ADD_COURSE = 'ADD_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';

// The UI Components dispatch an action, which is an object of type '@ngrx/store/Action'
// This object must have a 'type' property, and an optional payload (data for the action)
export class CourseAction implements Action {
    constructor(public type: string, public payload?: any) { }
}