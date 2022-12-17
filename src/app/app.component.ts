import { Component, Injector, OnInit } from "@angular/core";
import { Course } from "./model/course";
import { Observable } from "rxjs";

import { CoursesService } from "./courses/courses.service";
import { CourseTitleComponent } from "./course-title/course-title.component";
import {
  createCustomElement,
  NgElement,
  WithProperties,
} from "@angular/elements";

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
    private coursesService: CoursesService, // @Inject(CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector
  ) {
    const htmlElement = createCustomElement(CourseTitleComponent, {
      injector: this.injector,
    });
    customElements.define("course-title", htmlElement);
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
    this.courses$.subscribe((courses) => {
      this.coursesTotal = courses.length;
      this.courseList = courses;
    });

    // const courseTitle: NgElement & WithProperties<CourseTitleComponent> =
    //   document.createElement("course-title") as any;

    // courseTitle.title = "TEST";
    // // Add to the DOM
    // document.body.appendChild(courseTitle);
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
