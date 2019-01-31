import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PassportFileService {
  constructor() {}

  passportFile: BehaviorSubject<Blob> = new BehaviorSubject(null);

  setPassportFile(passportFile: Blob): void {
    this.passportFile.next(passportFile);
  }

  getPassportFile(): BehaviorSubject<Blob> {
    return this.passportFile;
  }
}
