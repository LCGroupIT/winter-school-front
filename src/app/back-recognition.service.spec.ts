import { TestBed } from '@angular/core/testing';

import { BackRecognitionService } from './back-recognition.service';

describe('BackRecognitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackRecognitionService = TestBed.get(BackRecognitionService);
    expect(service).toBeTruthy();
  });
});
