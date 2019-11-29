import { TestBed } from '@angular/core/testing';

import { OthersProfileService } from './others-profile.service';

describe('OthersProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OthersProfileService = TestBed.get(OthersProfileService);
    expect(service).toBeTruthy();
  });
});
