import { TestBed } from '@angular/core/testing';

import { RecognitionManagerService } from './recognition-manager.service';

describe('RecognitionManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecognitionManagerService = TestBed.get(RecognitionManagerService);
    expect(service).toBeTruthy();
  });
});
