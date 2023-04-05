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

  it('expects "sendLogin" to successfully send username and password and return success', async () => {
    const username: string = 'USERNAME';
    const password: string = 'PASSWORD';
    service.loggedInUser = {};
    spyOn(service, 'getUrl').and.returnValue('URL');
    spyOn(service['http'], 'post').and.returnValue(of({ success: true }));

    const result: boolean = await service.sendLogin(username, password);
    expect(service.loggedInUser).toEqual({ username });
    expect(result).toEqual(true);
  });

  it('expects "sendLogin" to handle failure', async () => {
    const username: string = 'USERNAME';
    const password: string = 'PASSWORD';
    service.loggedInUser = {};
    spyOn(service, 'getUrl').and.returnValue('URL');
    const error: Error = new Error('ERROR-MESSAGE');
    spyOn(service['http'], 'post').and.throwError(error);

    const result: boolean = await service.sendLogin(username, password);
    expect(service.loggedInUser).toEqual({});
    expect(console.log).toHaveBeenCalledWith(error);
    expect(result).toEqual(false);
  });

  it('expects "sendLogout" to successfully logout', async () => {
    service.loggedInUser = { username: 'USERNAME' };
    spyOn(service, 'getUrl').and.returnValue('URL');
    spyOn(service['http'], 'post').and.returnValue(of({ success: true }));

    await service.sendLogout();
    expect(service.loggedInUser).toEqual({});
  });

  it('expects "sendLogin" to handle failure', async () => {
    service.loggedInUser = { username: 'USERNAME' };
    spyOn(service, 'getUrl').and.returnValue('URL');
    const error: any = new Error('ERROR-MESSAGE');
    spyOn(service['http'], 'post').and.throwError(error);

    await service.sendLogout();
    expect(service.loggedInUser).toEqual({ username: 'USERNAME' });
    expect(console.log).toHaveBeenCalledWith(error);
  });

  it('expects "isUserLoggedIn" to return true if user logged in', () => {
    service.loggedInUser = { username: 'USERNAME' };

    const result: boolean = service.isUserLoggedIn();
    expect(result).toEqual(true);
  });

  it('expects "isUserLoggedIn" to return false if user logged out', () => {
    service.loggedInUser = {};

    const result: boolean = service.isUserLoggedIn();
    expect(result).toEqual(false);
  });

  it('expects "sendRegistration" to successfully send username and password and return success', async () => {
    const username: string = 'USERNAME';
    const password: string = 'PASSWORD';
    const email: string = 'EMAIL';
    spyOn(service, 'getUrl').and.returnValue('URL');
    spyOn(service['http'], 'post').and.returnValue(of({ success: true }));

    const result: any = await service.sendRegistration(
      username,
      password,
      email
    );
    expect(console.log).toHaveBeenCalledWith('/api/register returned');
  });

  it('expects "sendRegistration" to handle failure', async () => {
    const username: string = 'USERNAME';
    const password: string = 'PASSWORD';
    const email: string = 'EMAIL';
    spyOn(service, 'getUrl').and.returnValue('URL');
    const error: any = new Error('ERROR-MESSAGE');
    spyOn(service['http'], 'post').and.throwError(error);

    const result: any = await service.sendRegistration(
      username,
      password,
      email
    );
    expect(console.log).toHaveBeenCalledWith(error);
  });
});
