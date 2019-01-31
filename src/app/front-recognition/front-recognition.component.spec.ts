import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontRecognitionComponent } from './front-recognition.component';

describe('FrontRecognitionComponent', () => {
  let component: FrontRecognitionComponent;
  let fixture: ComponentFixture<FrontRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
