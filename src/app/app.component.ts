import { Component, OnInit } from "@angular/core";
import { Course } from "./model/course";
import { Observable } from "rxjs";

import { CoursesService } from "./courses/courses.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>; // = COURSES;
  coursesTotal: number;
  private courseList: Course[];

  constructor(
    private coursesService: CoursesService // @Inject(CONFIG_TOKEN) private config: AppConfig,
  ) //private injector: Injector
  {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
    this.courses$.subscribe((courses) => {
      this.coursesTotal = courses.length;
      this.courseList = courses;
    });
  }

  onEditCourse() {
    this.courseList[1].category = "ADVANCED";
  }

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course Saved!"));
  }
}
