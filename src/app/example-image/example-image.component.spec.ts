import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleImageComponent } from './example-image.component';

describe('ExampleImageComponent', () => {
  let component: ExampleImageComponent;
  let fixture: ComponentFixture<ExampleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
