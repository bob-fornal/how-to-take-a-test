import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/interfaces/user';
import { LoginModalComponent } from 'src/app/shared/login-modal/login-modal.component';
import { RegisterModalComponent } from 'src/app/shared/register-modal/register-modal.component';

import { HeaderApiService } from './header-api.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  loggedInUser: User = {};

  constructor(private api: HeaderApiService, private dialog: MatDialog) {}

  isLoggedIn = (): boolean => this.loggedInUser.hasOwnProperty('username');

  triggerRegister = (): void => {
    const dialogRef = this.dialog.open(RegisterModalComponent);
    dialogRef.afterClosed().subscribe(this.registerComplete.bind(this));
  };

  registerComplete = async (result: any): Promise<void> => {
    if (result === undefined) return;
    if (result.status === false) return;

    await this.api.sendRegistration(
      result.username,
      result.password,
      result.email
    );
    console.log('registration complete');
  };

  triggerLogin = (): void => {
    const dialogRef = this.dialog.open(LoginModalComponent);
    dialogRef.afterClosed().subscribe(this.handleLoginComplete.bind(this));
  };

  triggerLogout = async (): Promise<void> => {
    await this.api.sendLogout();
    this.loggedInUser = this.api.loggedInUser;
  };

  handleLoginComplete = async (result: any): Promise<void> => {
    if (result === undefined) return;
    if (result.status === false) return;

    this.loggedInUser = this.api.loggedInUser;
    console.log('login complete');
  };
}
