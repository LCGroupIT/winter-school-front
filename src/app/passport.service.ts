import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Passport } from "./passport";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class PassportService {
  constructor() {}

  passport: BehaviorSubject<Passport> = new BehaviorSubject(new Passport());

  setPassport(newPassport: Passport): void {
    const preparedPassport = this.preparePassport(newPassport);
    this.passport.next(preparedPassport);
  }

  getPassport(): BehaviorSubject<Passport> {
    return this.passport;
  }

  preparePassport(newPassport: Passport): Passport {
    const { birthDate, dateIssue } = newPassport;
    const preparedPassport: Passport = { ...newPassport };

    preparedPassport.birthDate = this.prepareDate(<string>birthDate);
    preparedPassport.dateIssue = this.prepareDate(<string>dateIssue);
    preparedPassport.sex = this.isFemale(<string>preparedPassport.sex)
      ? "ЖЕН"
      : "МУЖ";

    return preparedPassport;
  }

  isFemale(passportSex: string): boolean {
    const sex = passportSex.slice().toLowerCase();
    const firstLetter = sex[0];
    const secondLetter = sex[1];
    const thirdLetter = sex[2];

    if (firstLetter === "ж" || firstLetter === "х") {
      return true;
    }
    if (secondLetter === "е" || secondLetter === "ё") {
      return true;
    }
    if (thirdLetter === "н" || thirdLetter === "м" || thirdLetter === "п") {
      return true;
    }
  }

  prepareDate = (date: string): Date =>
    typeof date === "string" ? moment(date, "DDMMYYYY").toDate() : date;
}
