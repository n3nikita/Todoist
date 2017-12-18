import {Component, Input, Output, OnInit} from '@angular/core';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { EventEmitter } from '@angular/core';
import { settings } from '../settings';
import { ConfirmationService } from '@jaspero/ng2-confirmations';


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

  url: string = settings.url.image;

  ngOnInit(){
  }

  constructor(private auth: AuthService,
              private  confirm: ConfirmationService) { }

  deleteEvn(event){
    this.confirm.create('Are you sure?', 'Are you sure you want to delete this event?')
      .subscribe(res => {
        if(res.resolved){
          this.deleter.emit(event);
        }
      });
  }
}
