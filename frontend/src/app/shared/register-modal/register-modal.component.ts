import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss'],
})
export class RegisterModalComponent {
  username: string = '';
  email: string = '';
  password1: string = '';
  password2: string = '';

  constructor(private dialogRef: MatDialogRef<RegisterModalComponent>) {}

  doPasswordsMatch = (): boolean => {
    return this.password1 === this.password2;
  };

  onClose = () => {
    const data = {
      username: this.username,
      email: this.email,
      password: this.password1,
    };
    this.dialogRef.close({ state: true, ...data });
  };

  onCancel = () => {
    this.dialogRef.close({ state: false });
  };
}
