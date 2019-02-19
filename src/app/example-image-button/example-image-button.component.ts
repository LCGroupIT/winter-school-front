import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ExampleImageComponent } from "../example-image/example-image.component";

@Component({
  selector: "app-example-image-button",
  templateUrl: "./example-image-button.component.html",
  styleUrls: ["./example-image-button.component.scss"]
})
export class ExampleImageButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ExampleImageComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  ngOnInit() {}
}
