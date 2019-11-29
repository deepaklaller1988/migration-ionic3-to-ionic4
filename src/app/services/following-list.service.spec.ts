import { TestBed } from '@angular/core/testing';

import { FollowingListService } from './following-list.service';

describe('FollowingListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowingListService = TestBed.get(FollowingListService);
    expect(service).toBeTruthy();
  });
});
