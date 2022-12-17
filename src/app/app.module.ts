import { BrowserModule } from "@angular/platform-browser";
import { Injector, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CoursesModule } from "./courses/courses.module";
import { CourseTitleComponent } from "./course-title/course-title.component";
import { AppConfig, CONFIG_TOKEN } from "./config";
import { createCustomElement } from "@angular/elements";

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
  //  entryComponents: [CourseTitleComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    console.log("TEST");

    const htmlElement = createCustomElement(CourseTitleComponent, {
      injector: this.injector,
    });
    customElements.define("course-title", htmlElement);
  }
}
