import { Course } from "./models/course";

// This interface defines the data models to be represented
// in the NgRx store
export interface AppState {
    readonly courses: Array<Course>;
}
