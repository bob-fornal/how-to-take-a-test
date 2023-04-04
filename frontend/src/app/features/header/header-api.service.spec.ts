import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';

import { HeaderApiService } from './header-api.service';

describe('HeaderApiService', () => {
  let service: HeaderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HeaderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
