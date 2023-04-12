import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { ApiHandlerService } from 'src/app/core/services/api-handler.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderApiService extends ApiHandlerService {
  loggedInUser: User = {};

  constructor(private http: HttpClient) {
    super();
  }

  sendLogin = async (username: string, password: string): Promise<boolean> => {
    const key: string = 'login';
    const url: string = this.getUrl(key, window);

    try {
      const data: any = { username, password };
      const response: any = await firstValueFrom(this.http.post(url, data));

      console.log(response);
      if (response.success === true) {
        this.loggedInUser = { username };
        this.storeLoginInformation(response);
      }
      return response.success;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  sendLogout = async (): Promise<void> => {
    const key: string = 'logout';
    const url: string = this.getUrl(key, window);

    try {
      await firstValueFrom(this.http.post(url, ''));
      this.loggedInUser = {};
      this.clearLoginInformation();
    } catch (error) {
      console.log(error);
    }
  };

  storeLoginInformation = (data: any): void => {
    localStorage.setItem('username', data.user.username);
    localStorage.setItem('token', data.token);
  };

  clearLoginInformation = (): void => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  };

  pingLoginVerification = async (): Promise<void> => {
    const token: any = localStorage.getItem('token');
    if (token === null) return;

    // GET /api/auth/testAuth

    const username: any = localStorage.getItem('username');
    this.loggedInUser = { username };
  };

  isUserLoggedIn(): boolean {
    return this.loggedInUser.hasOwnProperty('username');
  }

  sendRegistration = async (
    username: string,
    password: string,
    email: string
  ): Promise<void> => {
    const key: string = 'registration';
    const url: string = this.getUrl(key, window);

    try {
      const data: any = { username, password, email };
      await firstValueFrom(this.http.post(url, data));
      console.log('/api/register returned');
    } catch (error) {
      console.log(error);
    }
  };
}
