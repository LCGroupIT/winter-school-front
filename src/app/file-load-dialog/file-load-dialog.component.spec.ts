import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FileLoadDialogComponent } from "./file-load-dialog.component";

describe("FileLoadDialogComponent", () => {
  let component: FileLoadDialogComponent;
  let fixture: ComponentFixture<FileLoadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileLoadDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileLoadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
