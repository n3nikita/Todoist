import {Component, Input, Output, OnInit} from '@angular/core';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-dash',
  templateUrl: './event-dash.component.html',
  styleUrls: ['./event-dash.component.css']
})
export class EventDashComponent implements OnInit{

  @Input()
  event: Event;

  @Output()
  deleter: EventEmitter<Event> = new EventEmitter();


  ngOnInit(){
    if(!this.event){
      this.event = new Event(1, 'test', 'test', new Date(), 'test');
    }
  }

  constructor(private auth: AuthService) { }

  deleteEvn(event){
    this.deleter.emit(event);
  }
}
