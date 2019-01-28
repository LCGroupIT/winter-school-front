import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Passport } from "../passport";
import { PassportService } from "../passport.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor() {}

  passport: Passport = new Passport();

  ngOnInit() {
    PassportService.getPassport().subscribe(
      passport => (this.passport = passport)
    );
  }
}
