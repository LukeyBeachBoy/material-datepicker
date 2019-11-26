import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DateAdapter } from "@angular/material/core";
import { FormControl, AbstractControl, Validators } from "@angular/forms";

import moment from "moment";

@Component({
  selector: "bingli-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.css"]
})
export class DatepickerComponent implements OnInit {
  dateTemplate: string;
  dateInput: FormControl = new FormControl("", {
    updateOn: "blur",
    validators: [Validators.required, this.validDate()]
  });
  min = moment(new Date()).subtract(100, "years");
  max = new Date();
  constructor(
    private translateServ: TranslateService,
    private _adapter: DateAdapter<any>
  ) {}

  ngOnInit() {
    this._adapter.setLocale("en-GB");
    this.setDateTemplate();
  }

  async setDateTemplate() {
    this.dateTemplate = await this.translateServ.get("dateFormat").toPromise();
  }

  validDate() {
    return (control: AbstractControl): any => {
      if (moment(control.value).isAfter(this.max)) {
        return { future_date: true };
      }
      if (moment(control.value).isBefore(this.min)) {
        return { past_date: true };
      }
    };
  }
}
