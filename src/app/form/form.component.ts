import { Component, OnInit } from "@angular/core";
import { Passport } from "../passport";
import { PassportService } from "../passport.service";
import { BackEndService } from "../back-end.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  passport: Passport = new Passport();

  constructor(
    private passportService: PassportService,
    private backEndService: BackEndService
  ) {}

  ngOnInit() {
    this.passportService.getPassport().subscribe(passport => {
      this.passport = passport;
    });
  }

  submit() {
    this.backEndService.sendForm(this.passport);
  }
}
