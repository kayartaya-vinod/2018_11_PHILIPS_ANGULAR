import { Course } from "../models/course";
import { CourseAction, ADD_COURSE, DELETE_COURSE } from "../actions/type";

const initialState = [
    new Course('Angular basics', 12000, 'Vinod'),
    new Course('Advanced Angular', 18000, 'John Doe'),
    new Course('Reactjs with Redux', 16000, 'Ramesh Iyer'),
]

// The reducer has access to the state maintained by the store,
// and the action dispatched by the UI. The reducer must always return
// the modified (based on action.type) version of the state.
export default function (state: Array<Course> = initialState, action: CourseAction) {
    switch (action.type) {
        case ADD_COURSE:
            return [...state, action.payload]; // payload here is the Course object
        case DELETE_COURSE:
            // payload here is the title of the course to be deleted
            let tmp = [...state]; // don't mutate the state
            let index = tmp.findIndex(c => c.title === action.payload);
            tmp.splice(index, 1); // deletes 1 element at 'index'
            return tmp;
        default:
            return state;
    }
}