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
  constructor(private passportService: PassportService) {}

  passport: Passport = new Passport();

  ngOnInit() {
    this.passportService.getPassport().subscribe(
      passport => {this.passport = passport;  console.log(this.passport)}
    );
  }
}
