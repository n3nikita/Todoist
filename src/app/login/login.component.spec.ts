import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        SimpleNotificationsModule,
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        AuthService,

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should contain h3 with `Log In`', () => {
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
    expect(el.innerText).toBe('Log In');
  });
});
