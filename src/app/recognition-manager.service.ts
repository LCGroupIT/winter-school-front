import { Injectable } from "@angular/core";
import { Recognize } from "./recognize";
import { BackRecognitionService } from "./back-recognition.service";
import { FrontRecognitionService } from "./front-recognition.service";

@Injectable({
  providedIn: "root"
})
export class RecognitionManagerService {
  currentRecognizer: Recognize = this.frontRecognitionService;

  constructor(
    private backRecognition: BackRecognitionService,
    private frontRecognitionService: FrontRecognitionService
  ) {}

  changeRecognizer(rec: string) {
    if (rec === "front") {
      this.currentRecognizer = this.frontRecognitionService;
    } else {
      this.currentRecognizer = this.backRecognition;
    }
  }

  getRecognizer() {
    return this.currentRecognizer;
  }
}
