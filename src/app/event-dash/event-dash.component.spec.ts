import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDashComponent } from './event-dash.component';

describe('EventDashComponent', () => {
  let component: EventDashComponent;
  let fixture: ComponentFixture<EventDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
