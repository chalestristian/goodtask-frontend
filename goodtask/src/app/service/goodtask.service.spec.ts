import { TestBed } from '@angular/core/testing';

import { GoodtaskService } from './goodtask.service';

describe('GoodtaskService', () => {
  let service: GoodtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
