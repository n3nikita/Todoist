import { Component, Input, Output, OnInit } from '@angular/core';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { EventEmitter } from '@angular/core';
import { ConfirmationService } from '@jaspero/ng2-confirmations';


@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  //TODO: Add checkbox to det done and undone. Add right click event.

  @Output()
  deleter: EventEmitter<Event> = new EventEmitter();

  @Input()
  event: Event;

  eventDone: boolean;

  constructor(private eventService: EventService,
              private auth: AuthService,
              private confirm: ConfirmationService) { }


  ngOnInit(){
    // if(!this.event){
    //   this.event = new Event(1, 'test', 'test', new Date(), 'test', false);
    // }
    this.eventDone = this.event.done;
  }

  deleteEvent(event){
    this.confirm.create('Are you sure?', 'Are you sure you want to delete this event?')
      .subscribe(res => {
        if(res.resolved){
          this.deleter.emit(event);
        }
      })
  }
}
