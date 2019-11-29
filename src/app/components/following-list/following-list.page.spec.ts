import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingListPage } from './following-list.page';

describe('FollowingListPage', () => {
  let component: FollowingListPage;
  let fixture: ComponentFixture<FollowingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
