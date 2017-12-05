import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from './user';


import { AuthService } from './auth.service';

describe('AuthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule],
      providers: [
        AuthService,
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it( 'should login user', inject([AuthService], (service: AuthService) => {
    let user: User = new User("Nikita", "123QAZwsx");
    service.login(user).subscribe(() => {
      expect(service.isLoggedIn()).toBe(true);
    });
  }));

  it( 'should logout user', inject([AuthService], (service: AuthService) => {
    service.logout();
    expect(service.isLoggedOut()).toBe(true);
  }));
});
