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
      console.log('/api/register returned');
      this.loggedInUser = { username };
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
    } catch (error) {
      console.log(error);
    }
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
      const response: any = await firstValueFrom(this.http.post(url, data));
      console.log('/api/register returned');
    } catch (error) {
      console.log(error);
    }
  };
}
