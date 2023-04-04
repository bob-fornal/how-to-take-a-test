import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HeaderApiService } from 'src/app/features/header/header-api.service';

import { mockMatDialogRef } from '../_spec-tools/components/mock-dialog-ref.spec';
import { MockHeaderApiService } from '../_spec-tools/services/mock-header-api.service.spec';

import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
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
