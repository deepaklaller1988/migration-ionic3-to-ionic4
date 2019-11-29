import { TestBed } from '@angular/core/testing';

import { FollowerListService } from './follower-list.service';

describe('FollowerListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowerListService = TestBed.get(FollowerListService);
    expect(service).toBeTruthy();
  });
});
