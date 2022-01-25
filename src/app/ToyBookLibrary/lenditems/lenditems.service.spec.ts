import { TestBed } from '@angular/core/testing';

import { LenditemsService } from './lenditems.service';

describe('LenditemsService', () => {
  let service: LenditemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenditemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
