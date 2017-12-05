import { TestBed, async, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth.guard';

describe('AuthGuardGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        AuthGuard,
        AuthService,
      ]
    });
  });

  it('should create', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('user is valid', inject([AuthGuard], (guard: AuthGuard) => {
    async(inject([AuthGuard, Router], (auth, router) => {
        spyOn(router, 'navigate');
        expect(auth.canActivate()).toBeFalsy();
        expect(router.navigate).toHaveBeenCalled();
      }));
  }));
});
