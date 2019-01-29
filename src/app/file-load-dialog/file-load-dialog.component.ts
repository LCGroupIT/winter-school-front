import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-file-load-dialog",
  templateUrl: "./file-load-dialog.component.html",
  styleUrls: ["./file-load-dialog.component.scss"]
})
export class FileLoadDialogComponent implements OnInit {
  ngOnInit() {}

  constructor(public dialogRef: MatDialogRef<FileLoadDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit() {}

  onUploadStateChanged(e) {
    console.log("onUploadStateChanged", e);
  }

  onUploadFinished(e) {
    console.log("onUploadFinished", e);
  }
}
