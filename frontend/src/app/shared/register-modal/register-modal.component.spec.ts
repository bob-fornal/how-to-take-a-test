import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { mockMatDialogRef } from '../_spec-tools/components/mock-dialog-ref.spec';

import { RegisterModalComponent } from './register-modal.component';

describe('RegisterModalComponent', () => {
  let component: RegisterModalComponent;
  let fixture: ComponentFixture<RegisterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,

        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [RegisterModalComponent],
      providers: [{ provide: MatDialogRef, useValue: mockMatDialogRef }],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expects "doPasswordsMatch" to return true if they match', () => {
    component.password1 = 'BOB';
    component.password2 = 'BOB';

    const result: boolean = component.doPasswordsMatch();
    expect(result).toEqual(true);
  });

  it('expects "doPasswordsMatch" to return false if they do not match', () => {
    component.password1 = 'BOB1';
    component.password2 = 'BOB2';

    const result: boolean = component.doPasswordsMatch();
    expect(result).toEqual(false);
  });

  it('expects "onClose" to trigger dialog ref close, state true', () => {
    spyOn(component['dialogRef'], 'close').and.stub();
    component.username = 'BOB';
    component.email = 'EMAIL';
    component.password1 = 'PASSWORD';

    component.onClose();
    expect(component['dialogRef'].close).toHaveBeenCalledWith({
      state: true,
      username: 'BOB',
      email: 'EMAIL',
      password: 'PASSWORD',
    });
  });

  it('expects "onCancel" to trigger dialog ref close, state false', () => {
    spyOn(component['dialogRef'], 'close').and.stub();

    component.onCancel();
    expect(component['dialogRef'].close).toHaveBeenCalledWith({ state: false });
  });
});
