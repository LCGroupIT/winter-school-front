import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { PassportFileService } from "../passport-file.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-example-image",
  templateUrl: "./example-image.component.html",
  styleUrls: ["./example-image.component.scss"]
})
export class ExampleImageComponent implements OnInit, AfterViewInit {
  photo: Blob;

  constructor(
    public dialogRef: MatDialogRef<ExampleImageComponent>,
    private passportFileService: PassportFileService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.getPhoto()
  }

  async getPhoto() {
    this.photo = await fetch("/assets/passport.jpg")
      .then(function(response) {
        return response.blob();
      })
      .then(function(blob) {
        return blob;
      });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  sendPhoto() {
    this.ngxService.start();
    this.passportFileService.setPassportFile(this.photo);
    this.closeDialog();
  }
}
