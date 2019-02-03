import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleImageButtonComponent } from './example-image-button.component';

describe('ExampleImageButtonComponent', () => {
  let component: ExampleImageButtonComponent;
  let fixture: ComponentFixture<ExampleImageButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleImageButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
