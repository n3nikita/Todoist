import {Component, Input, OnInit, Output} from '@angular/core';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-dash',
  templateUrl: './event-dash.component.html',
  styleUrls: ['./event-dash.component.css']
})
export class EventDashComponent implements OnInit {

  @Input()
  event: Event;

  @Output()
  deleter: EventEmitter<Event> = new EventEmitter();


  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  deleteEvn(event){
    this.deleter.emit(event);
  }
}
