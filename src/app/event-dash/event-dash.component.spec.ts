import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { EventService } from '../event.service';
import { FormsModule } from '@angular/forms';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EventDetailsComponent } from '../event-details/event-details.component';
import {By} from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


import { EventDashComponent } from './event-dash.component';


describe('EventDashComponent', () => {
  let component: EventDashComponent;
  let fixture: ComponentFixture<EventDashComponent>;
  let event: Event;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'detail/:id', component: EventDetailsComponent },
        ]),
      ],
      declarations: [ EventDashComponent, EventDetailsComponent ],
      providers: [
        EventService,
        AuthService,
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDashComponent);
    component = fixture.componentInstance;

    event = new Event(1, 'Football', 'Gym', new Date(), 'ball img');
    component.event = event;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'should have right element', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

    expect(el.innerText).toBe('Football');
  })
});
