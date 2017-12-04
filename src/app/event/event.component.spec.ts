import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Directive } from '@angular/core';
import { EventService } from '../event.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EventComponent } from './event.component';

@Directive({
  selector: '[routerLink], [routerLinkActive]'
})
class DummyRouterLinkDirective {}

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;


  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockActivatedRouter = {
    snapshot: {data: {id: '1' } },
  };



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule
      ],
      declarations: [ EventComponent ],
      providers: [
        AuthService,
        EventService,
        //ActivatedRoute,
        { provide: ActivatedRoute, useValue: mockActivatedRouter},
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: Router, useValue: mockRouter },
        { provide: APP_BASE_HREF, useValue: '/'},
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
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
