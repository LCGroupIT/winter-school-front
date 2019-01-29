import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { FileLoadDialogComponent } from "../file-load-dialog/file-load-dialog.component";

@Component({
  selector: "app-file-load-button",
  templateUrl: "./file-load-button.component.html",
  styleUrls: ["./file-load-button.component.scss"]
})
export class FileLoadButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FileLoadDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  ngOnInit() {}
}
