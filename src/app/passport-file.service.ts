import { Injectable } from "@angular/core";
import { PassportService } from "./passport.service";
import { RecognitionManagerService } from "./recognition-manager.service";

import { NgxUiLoaderService } from "ngx-ui-loader";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class PassportFileService {
  constructor(
    private recognitionManager: RecognitionManagerService,
    private passportService: PassportService,
    private ngxService: NgxUiLoaderService,
    private messageService: MessageService
  ) {}

  async setPassportFile(passportFile: Blob) {
    const recognizer = this.recognitionManager.getRecognizer();
    let passport = await recognizer.recognize(passportFile);

    if (passport) {
      this.passportService.setPassport(passport);
    } else {
      this.showError();
    }
    this.ngxService.stop();
  }

  private showError() {
    setTimeout(
      () => this.messageService.show("Невозможно обработать фото"),
      1000
    );
  }
}
