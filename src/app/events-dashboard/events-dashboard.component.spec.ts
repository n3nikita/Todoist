import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventDashComponent } from '../event-dash/event-dash.component';
import { AuthService } from '../auth.service';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from '../event.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {By} from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


import { EventsDashboardComponent } from './events-dashboard.component';


describe('EventsDashboardComponent', () => {
  let component: EventsDashboardComponent;
  let fixture: ComponentFixture<EventsDashboardComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SimpleNotificationsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ EventsDashboardComponent, EventDashComponent ],
      providers: [
        AuthService,
        EventService,
        NotificationsService,

      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should contain search bar', () => {
    de = fixture.debugElement.query(By.css('.search-bar'));
    el = de.nativeElement;
    expect(el).not.toBeNull();
  });

  it('should contain event add button', () => {
    de = fixture.debugElement.query(By.css('.event-add'));
    el = de.nativeElement;
    expect(el).not.toBeNull();
  });
});
