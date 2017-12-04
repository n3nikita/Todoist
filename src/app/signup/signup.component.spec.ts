import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

import { SignupComponent } from './signup.component';

let authService: AuthService;
let mockUser: User;

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockAuthService = {
    isLoggedIn: true,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        FormsModule,
        SimpleNotificationsModule],
      declarations: [ SignupComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    authService = TestBed.get(AuthService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
