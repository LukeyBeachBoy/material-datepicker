import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppComponent } from "./app.component";
import { BingliDatepickerModule } from "./bingli-datepicker/bingli-datepicker.module";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "/assets/i18n/", ".json");
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BingliDatepickerModule,
    RouterModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
