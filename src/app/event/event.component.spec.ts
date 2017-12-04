import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventService } from '../event.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { EventComponent } from './event.component';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('events')
  };
  let mockActivatedRouter = {
    navigate: jasmine.createSpy('events')
  };



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule,
      HttpClientModule ],
      declarations: [ EventComponent ],
      providers: [ EventService, AuthService,
        { provide: ActivatedRoute, useValue: mockActivatedRouter},
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: Router, useValue: mockRouter },

        { provide: APP_BASE_HREF, useValue: '/events'},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
