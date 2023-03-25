import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterModalComponent } from 'src/app/shared/register-modal/register-modal.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  triggerRegister = (): void => {
    const dialogRef = this.dialog.open(RegisterModalComponent);

    dialogRef.afterClosed().subscribe(this.registerComplete.bind(this));
  };

  registerComplete = (result: any) => {
    if (result === undefined) return;
    console.log(result);
  };
}
