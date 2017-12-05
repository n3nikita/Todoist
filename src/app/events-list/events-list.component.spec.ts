import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService} from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { EventComponent } from '../event/event.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {By} from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


import { EventsListComponent } from './events-list.component';



describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;
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
      declarations: [ EventsListComponent, EventComponent ],
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
    fixture = TestBed.createComponent(EventsListComponent);
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

  it('should contain events list', () => {
    de = fixture.debugElement.query(By.css('.events'));
    el = de.nativeElement;
    expect(el).not.toBeNull();
  });
});
