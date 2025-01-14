import { BrowserModule } from "@angular/platform-browser";
import { Injector, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CoursesModule } from "./courses/courses.module";
import { CourseTitleComponent } from "./course-title/course-title.component";

@NgModule({
  declarations: [AppComponent, CourseTitleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoursesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    console.log("TEST");
  }
}
