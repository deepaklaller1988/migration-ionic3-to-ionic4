import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedListPage } from './blocked-list.page';

describe('BlockedListPage', () => {
  let component: BlockedListPage;
  let fixture: ComponentFixture<BlockedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
