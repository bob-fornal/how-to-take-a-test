import { TestBed } from '@angular/core/testing';

import { HeaderApiService } from './header-api.service';

describe('HeaderApiService', () => {
  let service: HeaderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
