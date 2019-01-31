import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { PassportFileService } from "../passport-file.service";
import { NgxUiLoaderService } from 'ngx-ui-loader'; 

@Component({
  selector: "app-file-load-dialog",
  templateUrl: "./file-load-dialog.component.html",
  styleUrls: ["./file-load-dialog.component.scss"]
})
export class FileLoadDialogComponent implements OnInit {
  photo: File;

  ngOnInit() {}

  sendButtonStatus: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<FileLoadDialogComponent>,
    private passportFileService: PassportFileService,
    private ngxService: NgxUiLoaderService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit() {}

  onRemoved() {
    this.sendButtonStatus = true;
  }

  onUploadStateChanged(e) {
    console.log("onUploadStateChanged", e);
  }

  onUploadFinished(e) {
    this.sendButtonStatus = false;
    this.photo = e.file;
  }


  sendPhoto() {
    this.ngxService.start();
    this.passportFileService.setPassportFile(this.photo);
    this.closeDialog();
  }
}
