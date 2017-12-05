import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Event } from './event';



import { EventService } from './event.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [EventService]
    });
  });


  it('should be created', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));

  it('should return event by id', inject([EventService], (service: EventService) => {
    let dta: Event;
    service.getEvent(1).subscribe(d => {dta = d;
      expect(dta.id).toBe(1 );
    });
  }));

  it('should return all events', inject([EventService], (service: EventService) => {
    let events: Event[];
    service.getEvents().subscribe(d => {events = d;
      expect(events.length).not.toBeLessThan(2);
    });
  }));
});
