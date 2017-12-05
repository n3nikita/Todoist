import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Event } from '../event';
import { RouterTestingModule} from '@angular/router/testing';
import { EventDetailsComponent} from '../event-details/event-details.component';
import { FormsModule } from '@angular/forms';
import {By} from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


import { EventComponent } from './event.component';


describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let event: Event;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'detail/:id', component: EventDetailsComponent },
        ]),
        FormsModule

      ],
      declarations: [ EventComponent, EventDetailsComponent ],
      providers: [
        AuthService,
        EventService,
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents()


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;

    event = new Event(1, 'Football', 'Gym', new Date(), 'ball img');
    component.event = event;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'should contain date', () => {
    de = fixture.debugElement.query(By.css('.date'));
    el = de.nativeElement;

    expect(el).not.toBeNull();
  });

  it( 'should contain delete button', () => {
    de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;

    expect(el).not.toBeNull();
  });
});
