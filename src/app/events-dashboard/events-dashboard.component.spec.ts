import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventDashComponent } from '../event-dash/event-dash.component';
import { AuthService } from '../auth.service';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from '../event.service';
import { RouterModule, Router } from '@angular/router';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { EventsDashboardComponent } from './events-dashboard.component';


describe('EventsDashboardComponent', () => {
  let component: EventsDashboardComponent;
  let fixture: ComponentFixture<EventsDashboardComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SimpleNotificationsModule,
        FormsModule,
        RouterModule,
        HttpClientModule
      ],
      declarations: [ EventsDashboardComponent, EventDashComponent ],
      providers: [
        AuthService,
        EventService,
        NotificationsService,
        { provide: Router, useValue: mockRouter }
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
});
