import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BingliDatepickerModule } from "./bingli-datepicker/bingli-datepicker.module";

@NgModule({
  imports: [BrowserModule, BingliDatepickerModule],

  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
