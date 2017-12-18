import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { NgModel } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NotificationsService } from 'angular2-notifications';
// declare var $: any;


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Event[];
  image: File;
  regExp: RegExp = new RegExp('image/(jpg|jpeg|gif|png)');
  notFound: boolean = false;
  searching: boolean = false;


  constructor(private eventService: EventService,
              private auth: AuthService,
              private notify: NotificationsService) { }

  ngOnInit() {
    this.getEvents();
  }

  opened: boolean = false;

  getEvents() {
    this.eventService.getEvents().subscribe( res => this.events = res);
  }

  add(name: string, details: string, date: Date){
    if(this.image){
      this.eventService.postEventImg(this.image)
      .subscribe(
        image => {
          let event: Event = { name, details, date, image, done: false } as Event;
          this.eventService.postEvent(event)
            .subscribe(
              res => {
                this.events.push(res);
                this.notify.success('Added successfully!', 'Event has been added.');
              },
              err => this.notify.error('Error!', 'Event wasn\'t add')
            );
        },
        err => this.notify.error('Error!', 'Image wasn\'t upload to the server')
      );
    } else {
      this.notify.error('Error!', 'You should add an image');
    }
  }


  delete(event: Event){
    let index = this.events.indexOf(event);
    this.eventService.deleteEvent(event.id)
      .subscribe(
        res => {
          this.events.splice(index,1)
          this.notify.success('Deleted!', 'Event has been deleted.');
        },
        err => this.notify.error('Error!', 'Event wasn\'t deleted')
      );
  }

  getImage(images){
    if(this.regExp.test(images[0].type))
      this.image = images[0];
    else
      this.notify.error('Error!', 'Only images allowed');
  }

  search(searchStr: string){
    if(searchStr.length == 0){
      this.notFound = false;
      this.searching = false;
      return this.getEvents();
    }

    return this.eventService.search(searchStr)
      .subscribe(
        res => {
          this.events = res;
          this.searching = true;
          this.notFound = false;
        },
        err => {
          this.events = null;
          this.notFound = true;
          this.searching = true;
        }
      );
  }
}
