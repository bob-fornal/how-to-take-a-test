import { TestBed } from '@angular/core/testing';

import { RegisterModalService } from './register-modal.service';

describe('RegisterModalService', () => {
  let service: RegisterModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
