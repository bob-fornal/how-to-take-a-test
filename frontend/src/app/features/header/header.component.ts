import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
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
  isDarkMode: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private api: HeaderApiService,
    private dialog: MatDialog
  ) {
    this.initDarkMode();
  }

  isLoggedIn = (): boolean => this.loggedInUser.hasOwnProperty('username');

  initDarkMode = (): void => {
    const savedDarkMode = localStorage.getItem('isDarkMode');

    if (savedDarkMode) {
      this.isDarkMode = JSON.parse(savedDarkMode);
    } else {
      this.isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
    }

    this.applyDarkModeClass();
  };

  triggerRegister = (): void => {
    const dialogRef = this.dialog.open(RegisterModalComponent);
    dialogRef.afterClosed().subscribe(this.handleRegister.bind(this));
  };

  triggerLogin = (): void => {
    const dialogRef = this.dialog.open(LoginModalComponent);
    dialogRef.afterClosed().subscribe(this.handleLoginComplete.bind(this));
  };

  triggerLogout = async (): Promise<void> => {
    await this.api.sendLogout();
    this.loggedInUser = this.api.loggedInUser;
  };

  handleRegister = async (result: any): Promise<void> => {
    if (result === undefined) return;
    if (result.status === false) return;

    await this.api.sendRegistration(
      result.username,
      result.password,
      result.email
    );
    console.log('registration complete');
  };

  handleLoginComplete = async (result: any): Promise<void> => {
    if (result === undefined) return;
    if (result.status === false) return;

    this.loggedInUser = this.api.loggedInUser;
    console.log('login complete');
  };

  toggleDarkMode = (event: MatSlideToggleChange): void => {
    this.isDarkMode = event.checked;
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
    this.applyDarkModeClass();
  };

  private applyDarkModeClass() {
    if (this.isDarkMode) {
      this.document.documentElement.classList.add('dark-mode');
    } else {
      this.document.documentElement.classList.remove('dark-mode');
    }
  }
}
