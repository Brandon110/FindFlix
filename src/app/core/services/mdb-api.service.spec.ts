import { TestBed } from '@angular/core/testing';

import { MdbApiService } from './mdb-api.service';

describe('MovieDbApiService', () => {
  let service: MdbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
