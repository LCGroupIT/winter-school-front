import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PassportFileService {
  constructor() {}

  static passportFile: BehaviorSubject<Blob> = new BehaviorSubject(null);

  static setPassportFile(passportFile: Blob): void {
    this.passportFile.next(passportFile);
  }

  static getPassportFile(): BehaviorSubject<Blob> {
    return this.passportFile;
  }
}
