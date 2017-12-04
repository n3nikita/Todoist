import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../Event';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.css']
})
export class EventsDashboardComponent implements OnInit {

  events: Event[];
  notFound: boolean = false;
  addClicked: boolean = false;
  image: File;
  regExp: RegExp = new RegExp('image/(jpg|jpeg|gif|png)');

  constructor(
    private eventService: EventService,
    private notify: NotificationsService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    return this.eventService.getEvents()
      .subscribe(
        res => this.events = res
      )
  }

  delete(event: Event){
    let index = this.events.indexOf(event);
    this.eventService.deleteEvent(event.id)
      .subscribe(
        res => {
          this.events.splice(index,1)
          this.notify.success('Deleted!', 'Event has been deleted.');
        },
        err => this.notify.error('Error!', 'Event wasnt deleted')
      );
  }

  search(searchStr: string){
    if(searchStr.length == 0){
      this.notFound = false;
      return this.getAll();
    }

    return this.eventService.search(searchStr)
      .subscribe(
        res => {
          this.events = res;
          this.notFound = false;
        },
        err => this.notFound = true
      )
  }

  getImage(images){
    if(this.regExp.test(images[0].type))
      this.image = images[0];
    else
      this.notify.error('Error!', 'Only images allowed');
  }

  add(name: string, details: string, date: Date){
    if(this.image){
      this.eventService.postEventImg(this.image)
        .subscribe(
          image => {
            let event: Event = {id: this.events.length+1, name, details, date, image} as Event;
            this.eventService.postEvent(event)
              .subscribe(
                res => {
                  this.events.push(res);
                  this.addClicked = !this.addClicked;
                  this.notify.success('Added successfully!', 'Event has been added.');
                },
                err => this.notify.error('Error!', 'Event wasnt add')
              );
          },
          err => this.notify.error('Error!', 'Image wasnt upload to the server')
        );
    } else {
      this.notify.error('Error!', 'You should add an image');
    }
  }

}
