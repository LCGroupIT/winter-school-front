import { TestBed } from '@angular/core/testing';

import { FrontRecognitionService } from './front-recognition.service';

describe('FrontRecognitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontRecognitionService = TestBed.get(FrontRecognitionService);
    expect(service).toBeTruthy();
  });
});
