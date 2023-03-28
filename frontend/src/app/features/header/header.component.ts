import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterModalComponent } from 'src/app/shared/register-modal/register-modal.component';

import { HeaderApiService } from './header-api.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private api: HeaderApiService, private dialog: MatDialog) {}

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
}
