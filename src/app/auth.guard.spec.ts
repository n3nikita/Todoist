import { TestBed, async, inject } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth.guard';

describe('AuthGuardGuard', () => {
  let mockRouter = {
    navigate: jasmine.createSpy('/login')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        HttpClientModule
      ],
      providers: [
        AuthGuard,
        AuthService,
        { provide: Router, useValue: mockRouter }

      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
