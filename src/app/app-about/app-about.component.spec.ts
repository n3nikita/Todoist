import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppAboutComponent } from './app-about.component';

describe('AppAboutComponent', () => {
  let component: AppAboutComponent;
  let fixture: ComponentFixture<AppAboutComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain `Lorem ipsum dolor sit amet`', () =>{
    expect(el.textContent).toContain('Lorem ipsum dolor sit amet');
  })
});
