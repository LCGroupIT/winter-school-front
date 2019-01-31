import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Passport } from "../passport";
import { PassportService } from "../passport.service";
import { BackEndService } from "../back-end.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor(
    private passportService: PassportService,
    private backEndService: BackEndService
  ) {}

  passport: Passport = new Passport();

  ngOnInit() {
    this.passportService.getPassport().subscribe(passport => {
      this.passport = passport;
    });
  }

  submit() {
    this.backEndService.sendForm(this.passport);
  }
}
