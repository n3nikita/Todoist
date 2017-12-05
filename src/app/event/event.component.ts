import { Component, Input, Output, OnInit } from '@angular/core';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  @Output()
  deleter: EventEmitter<Event> = new EventEmitter();

  @Input()
  event: Event;

  constructor(private eventService: EventService,
              private auth: AuthService) { }


  ngOnInit(){
    if(!this.event){
      this.event = new Event(1, 'test', 'test', new Date(), 'test');
    }
  }

  deleteEvent(event){
    this.deleter.emit(event);
  }
}
