import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Passport } from "./passport";

@Injectable({
  providedIn: "root"
})
export class PassportService {
  constructor() {}

  static passport: BehaviorSubject<Passport> = new BehaviorSubject(
    new Passport()
  );

  static setPassport(passport: Passport): void {
    this.passport.next(passport);
  }

  static getPassport(): BehaviorSubject<Passport> {
    return this.passport;
  }
}
