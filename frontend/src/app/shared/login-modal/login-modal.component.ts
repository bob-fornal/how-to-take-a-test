import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HeaderApiService } from 'src/app/features/header/header-api.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  username: string = '';
  password: string = '';

  loginError: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<LoginModalComponent>,
    private api: HeaderApiService
  ) {}

  validEntries = (): boolean => {
    return this.username.length > 0 && this.password.length > 0;
  };

  onLogin = async () => {
    const success: any = await this.api.sendLogin(this.username, this.password);
    this.loginError = !success;
    if (success === true) {
      this.close();
    }
  };

  close = () => {
    this.dialogRef.close({ state: true });
  };

  onCancel = () => {
    this.dialogRef.close({ state: false });
  };
}
