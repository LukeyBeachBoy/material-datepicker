import { Component, OnInit, Output, Input } from "@angular/core";
import { DateAdapter } from "@angular/material/core";
import { FormControl, AbstractControl, Validators } from "@angular/forms";

import moment from "moment";
import { EventEmitter } from "events";

@Component({
  selector: "bingli-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.css"]
})
export class DatepickerComponent implements OnInit {
  @Input() dateTemplate: string;
  @Input() errorMessages: {
    future_date: string;
    invalid_date: string;
    no_date: string;
  };
  @Output() dateSelected = new EventEmitter();

  dateInput: FormControl = new FormControl("", {
    updateOn: "blur",
    validators: [Validators.required, this.validDate()]
  });
  min = moment(new Date()).subtract(100, "years");
  max = new Date();
  constructor(private _adapter: DateAdapter<any>) {}

  ngOnInit() {
    this._adapter.setLocale("en-GB");
  }

  submit() {
    this.dateSelected.emit(this.dateInput.value);
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
