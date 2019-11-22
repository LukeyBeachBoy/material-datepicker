import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DateAdapter } from "@angular/material/core";
import { FormControl, AbstractControl, Validators } from "@angular/forms";

import moment from "moment";

@Component({
  selector: "app-date-input",
  templateUrl: "./date-input.component.html",
  styleUrls: ["./date-input.component.css"]
})
export class DateInputComponent implements OnInit {
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
    this._adapter.setLocale("nl");
    this.setDateTemplate();
    this.dateInput.valueChanges.subscribe(value => console.log(this.dateInput));
  }

  async setDateTemplate() {
    this.dateTemplate = await this.translateServ.get("dateFormat").toPromise();
  }

  getErrorMessage(dateInput: string) {
    if (!dateInput || dateInput === "") {
      let noDateMessage;
      this.translateServ.get("no_date").subscribe(msg => {
        noDateMessage = msg;
      });
      return noDateMessage;
    }
  }

  validDate() {
    return (control: AbstractControl): any => {
      if (moment(control.value).isAfter(this.max)) {
        return { future_date: true };
      }
      if (moment(control.value).isBefore(this.min)) {
        return { past_date: true };
      }
      if (!moment(control.value, "DD/MM/YYYY").isValid()) {
        return { invalid_date_format: true };
      }
    };
  }
}
