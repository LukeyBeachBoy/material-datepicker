import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS
} from "@angular/material";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_FORMATS
} from "@angular/material-moment-adapter";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { DatepickerComponent } from "./datepicker/datepicker.component";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "/assets/i18n/", ".json");
}

@NgModule({
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class BingliDatepickerModule {}
