import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  TranslateService,
} from "@ngx-translate/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  lang: string;
  name = "Bingli Date Component";
  constructor(
    private translateServ: TranslateService
  ) {
    this.translateServ.use("nl");
  }
}
