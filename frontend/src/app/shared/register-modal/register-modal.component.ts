import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss'],
})
export class RegisterModalComponent {
  constructor(private dialogRef: MatDialogRef<RegisterModalComponent>) {}

  onClose = () => {
    this.dialogRef.close({ state: true, name: 'bob' });
  };
  onCancel = () => {
    this.dialogRef.close({ state: false });
  };
}
