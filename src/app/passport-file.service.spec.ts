import { TestBed } from '@angular/core/testing';

import { PassportFileService } from './passport-file.service';

describe('PassportFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassportFileService = TestBed.get(PassportFileService);
    expect(service).toBeTruthy();
  });
});
