import { Component, Input, Output, OnInit } from '@angular/core';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { EventEmitter } from '@angular/core';
import { ConfirmationService } from '@jaspero/ng2-confirmations';
declare var $: any;


@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  //TODO: Add right click event.

  @Output()
  deleter: EventEmitter<Event> = new EventEmitter();

  @Input()
  event: Event;

  constructor(private eventService: EventService,
              private auth: AuthService,
              private confirm: ConfirmationService) {}


  ngOnInit(){
    // console.log('AfterContentInit');
    // $(document).bind("contextmenu", function (event) {
    //   // Avoid the real one
    //   event.preventDefault();
    //   // Show contextmenu
    //   $(".contextMenu").
    //
    //   // In the right position (the mouse)
    //   css({
    //     top: event.pageY + "px",
    //     left: event.pageX + "px",
    //     display: 'inline'
    //   });
    //
    //   $(".contextMenu a:first").text(event.name);
    // });
    //
    // $(document).click(function () {
    //   $('.contextMenu').css('display', 'none');
    // });
  }

  deleteEvent(event){
    this.confirm.create('Are you sure?', 'Are you sure you want to delete this event?')
      .subscribe(res => {
        if(res.resolved){
          this.deleter.emit(event);
        }
      })
  }

  updateEvent(){
    this.eventService.putEvent(this.event)
      .subscribe(() => {});
  }
}
