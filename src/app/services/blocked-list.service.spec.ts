import { TestBed } from '@angular/core/testing';

import { BlockedListService } from './blocked-list.service';

describe('BlockedListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockedListService = TestBed.get(BlockedListService);
    expect(service).toBeTruthy();
  });
});
