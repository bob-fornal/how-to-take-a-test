import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ApiHandlerService } from './api-handler.service';

@Injectable()
class TestService extends ApiHandlerService {
  constructor() {
    super();
  }
}

describe('ApiHandlerService', () => {
  let service: TestService;

  beforeEach(() => {
    service = new TestService();

    TestBed.configureTestingModule({
      providers: [TestService],
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects "getUrl" to handle github.io hosting', () => {
    const _window: any = {
      location: {
        host: 'http://github.io',
      },
    };
    const key: string = 'TEST-KEY';
    service.endpoints['gh-pages'][key] = '/ENDPOINT-VALUE';

    const result: string = service.getUrl(key, _window);
    expect(result).toEqual('/ENDPOINT-VALUE');
  });

  it('expects "getUrl" to handle everything else', () => {
    const _window: any = {
      location: {
        host: 'http://localhost',
      },
    };
    const key: string = 'TEST-KEY';
    service.endpoints['localhost'][key] = '/ENDPOINT-VALUE';

    const result: string = service.getUrl(key, _window);
    expect(result).toEqual('http://localhost:4001/ENDPOINT-VALUE');
  });
});
