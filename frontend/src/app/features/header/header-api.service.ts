import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiHandlerService } from 'src/app/core/services/api-handler.service';

interface User {
  username?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeaderApiService extends ApiHandlerService {
  loggedInUser: User = {};

  constructor(private http: HttpClient) {
    super();
  }

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
