import { Component, OnInit } from "@angular/core";
import { RecognitionManagerService } from "../recognition-manager.service";

@Component({
  selector: "app-select-recognition",
  templateUrl: "./select-recognition.component.html",
  styleUrls: ["./select-recognition.component.scss"]
})
export class SelectRecognitionComponent implements OnInit {
  type: string = "front";

  constructor(private recognitionManager: RecognitionManagerService) {}

  ngOnInit() {}

  changeType() {
    this.recognitionManager.changeRecognizer(this.type);
  }
}
