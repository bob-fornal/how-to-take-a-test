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
        { provide: HeaderApiService, useValue: MockHeaderApiService },
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
});
