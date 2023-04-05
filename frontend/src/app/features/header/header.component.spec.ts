import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderApiService } from 'src/app/features/header/header-api.service';

import { MockHeaderApiService } from '../../shared/_spec-tools/services/mock-header-api.service.spec';

import { HeaderComponent } from './header.component';

const MockDialogOpen = {
  afterClosed: () => ({
    subscribe: () => ({}),
  }),
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatToolbarModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: HeaderApiService, useClass: MockHeaderApiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expects "isLoggedIn" to return true if user logged in', () => {
    component.loggedInUser = { username: 'USERNAME' };

    const result: boolean = component.isLoggedIn();
    expect(result).toEqual(true);
  });

  it('expects "isLoggedIn" to return false if user logged out', () => {
    component.loggedInUser = {};

    const result: boolean = component.isLoggedIn();
    expect(result).toEqual(false);
  });

  it('expects "triggerRegister" to open a dialog', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    spyOn(component['dialog'], 'open').and.returnValue(MockDialogOpen as any);

    component.triggerRegister();
    expect(component['dialog'].open).toHaveBeenCalled();
  });

  it('expects "triggerLogin" to open a dialog', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    spyOn(component['dialog'], 'open').and.returnValue(MockDialogOpen as any);

    component.triggerLogin();
    expect(component['dialog'].open).toHaveBeenCalled();
  });

  it('expects "triggerLogout" to send logout and apply api loggedInUser value', async () => {
    spyOn(component['api'], 'sendLogout').and.stub();
    component['api'].loggedInUser = {};
    component.loggedInUser = { username: 'bob' };

    await component.triggerLogout();
    expect(component['api'].sendLogout).toHaveBeenCalled();
    expect(component.loggedInUser).toEqual({});
  });

  it('expects "handleRegister" send registration', async () => {
    const result: any = {
      status: true,
      username: 'USERNAME',
      password: 'PASSWORD',
      email: 'EMAIL',
    };
    spyOn(component['api'], 'sendRegistration').and.stub();

    await component.handleRegister(result);
    expect(component['api'].sendRegistration).toHaveBeenCalled();
  });

  it('expects "handleRegister" handle click outside modal', async () => {
    const result: any = undefined;
    spyOn(component['api'], 'sendRegistration').and.stub();

    await component.handleRegister(result);
    expect(component['api'].sendRegistration).not.toHaveBeenCalled();
  });

  it('expects "handleRegister" handle modal cancel', async () => {
    const result: any = { status: false };
    spyOn(component['api'], 'sendRegistration').and.stub();

    await component.handleRegister(result);
    expect(component['api'].sendRegistration).not.toHaveBeenCalled();
  });

  it('expects "handleLoginComplete" to apply the loggedInUser', async () => {
    const result: any = { status: true };
    component.loggedInUser = {};
    component['api'].loggedInUser = { username: 'bob' };

    await component.handleLoginComplete(result);
    expect(component.loggedInUser).toEqual({ username: 'bob' });
  });

  it('expects "handleLoginComplete" to handle click outside modal', async () => {
    const result: any = undefined;
    component.loggedInUser = {};
    component['api'].loggedInUser = { username: 'bob' };

    await component.handleLoginComplete(result);
    expect(component.loggedInUser).toEqual({});
  });

  it('expects "handleLoginComplete" to handle modal cancel', async () => {
    const result: any = { status: false };
    component.loggedInUser = {};
    component['api'].loggedInUser = { username: 'bob' };

    await component.handleLoginComplete(result);
    expect(component.loggedInUser).toEqual({});
  });
});
