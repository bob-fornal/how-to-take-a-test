import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderApiService } from 'src/app/features/header/header-api.service';

import { mockMatDialogRef } from '../_spec-tools/components/mock-dialog-ref.spec';
import { MockHeaderApiService } from '../_spec-tools/services/mock-header-api.service.spec';

import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,

        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [LoginModalComponent],
      providers: [
        { provide: HeaderApiService, useClass: MockHeaderApiService },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expects "validEntries" to return false if username is empty', () => {
    component.username = '';
    component.password = '';

    const result: boolean = component.validEntries();
    expect(result).toEqual(false);
  });

  it('expects "validEntries" to return false if password is empty', () => {
    component.username = 'BOB';
    component.password = '';

    const result: boolean = component.validEntries();
    expect(result).toEqual(false);
  });

  it('expects "validEntries" to return true if username and password have value', () => {
    component.username = 'BOB';
    component.password = 'BOB';

    const result: boolean = component.validEntries();
    expect(result).toEqual(true);
  });

  it('expects "onLogin" to send the username and password, set loginError, and close', async () => {
    component.username = 'BOB1';
    component.password = 'BOB2';
    spyOn(component['api'], 'sendLogin').and.returnValue(Promise.resolve(true));
    spyOn(component, 'close').and.stub();

    await component.onLogin();
    expect(component.loginError).toEqual(true);
    expect(component.close).toHaveBeenCalled();
  });

  it('expects "close" to trigger dialog ref close, state true', () => {
    spyOn(component['dialogRef'], 'close').and.stub();

    component.close();
    expect(component['dialogRef'].close).toHaveBeenCalledWith({ state: true });
  });

  it('expects "onCancel" to trigger dialog ref close, state false', () => {
    spyOn(component['dialogRef'], 'close').and.stub();

    component.onCancel();
    expect(component['dialogRef'].close).toHaveBeenCalledWith({ state: false });
  });
});
