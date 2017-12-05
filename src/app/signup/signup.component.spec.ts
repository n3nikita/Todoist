import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


import { SignupComponent } from './signup.component';



describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        SimpleNotificationsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ SignupComponent ],
      providers: [
        AuthService,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain h3 with `Registration`', () => {
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
    expect(el.innerText).toBe('Registration');
  });
});
