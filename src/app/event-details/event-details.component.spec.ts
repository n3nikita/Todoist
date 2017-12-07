import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'rxjs/add/observable/of';
import { RouterTestingModule } from '@angular/router/testing';

import { EventDetailsComponent } from './event-details.component';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        SimpleNotificationsModule,
        RouterTestingModule
      ],
      declarations: [ EventDetailsComponent ],
      providers: [
        AuthService,
        EventService,
        NotificationsService,
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
