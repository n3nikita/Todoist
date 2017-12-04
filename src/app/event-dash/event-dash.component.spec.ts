import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventService } from '../event.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF  } from '@angular/common';

import { EventDashComponent } from './event-dash.component';

describe('EventDashComponent', () => {
  let component: EventDashComponent;
  let fixture: ComponentFixture<EventDashComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('dashboard')
  };
  let mockActivatedRouter = {
    navigate: jasmine.createSpy('dashboard')
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        HttpClientModule
      ],
      declarations: [ EventDashComponent ],
      providers: [ EventService,
        AuthService,
        { provide: Router, useValue: mockRouter },
        { provide: APP_BASE_HREF, useValue: '/dashboard'},
        { provide: ActivatedRoute, useValue: mockActivatedRouter },
        { provide: LocationStrategy, useClass: PathLocationStrategy },]
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
