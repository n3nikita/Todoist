import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../Event';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.css']
})
export class EventsDashboardComponent implements OnInit {

  events: Event[];
  notFound: boolean = false;
  addClicked: boolean = false;
  searching: boolean = false;
  image: File;
  regExp: RegExp = new RegExp('image/(jpg|jpeg|gif|png)');

  constructor(
    private eventService: EventService,
    private notify: NotificationsService,
    private auth: AuthService
  )
  { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    return this.eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => this.events = null
      )
  }

  delete(event: Event){
    let index = this.events.indexOf(event);
    this.eventService.deleteEvent(event.id)
      .subscribe(
        res => {
          this.events.splice(index,1);
          this.notify.success('Deleted!', 'Event has been deleted.');
        },
        err => this.notify.error('Error!', 'Event wasn\'t deleted')
      );
  }

  search(searchStr: string){
    if(searchStr.length == 0){
      this.notFound = false;
      this.searching = false;
      return this.getAll();
    }

    return this.eventService.search(searchStr)
      .subscribe(
        res => {
          this.events = res;
          this.searching = true;
          this.notFound = false;
        },
        err => {
          this.searching = true;
          this.notFound = true;
          this.events = null;
        }
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
          () => {
            let event: Event = { name, details, date, image: this.image.name } as Event;
            this.eventService.postEvent(event)
              .subscribe(
                res => {
                  this.events.push(res);
                  this.addClicked = !this.addClicked;
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

}
