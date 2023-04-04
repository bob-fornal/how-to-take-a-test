import { User } from 'src/app/core/interfaces/user';

export class MockHeaderApiService {
  loggedInUser: User = {};

  sendLogin() {}
  sendLogout() {}
  isUserLoggedIn() {}
  sendRegistration() {}
}
