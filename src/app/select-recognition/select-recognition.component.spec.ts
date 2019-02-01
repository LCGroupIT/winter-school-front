import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecognitionComponent } from './select-recognition.component';

describe('SelectRecognitionComponent', () => {
  let component: SelectRecognitionComponent;
  let fixture: ComponentFixture<SelectRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
