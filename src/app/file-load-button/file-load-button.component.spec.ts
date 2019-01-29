import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FileLoadButtonComponent } from "./file-load-button.component";

describe("FileLoadButtonComponent", () => {
  let component: FileLoadButtonComponent;
  let fixture: ComponentFixture<FileLoadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileLoadButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileLoadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
