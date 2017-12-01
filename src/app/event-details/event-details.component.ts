import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { NotificationsService } from 'angular2-notifications';
import { Location } from '@angular/common';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  visibility: boolean;
  image: File;
  done: boolean = false;
  regExp: RegExp = new RegExp('image/(gif|jpg|jpeg|png)');


  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private notify: NotificationsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id).subscribe( res => { this.event = res; this.done = true; });
  }

  editEvent(event: Event) {
    if (this.image) {
      this.eventService.postEventImg(this.image)
        .subscribe(
        imgLink => {
          event.image = imgLink;
          this.eventService.putEvent(event)
            .subscribe(
            res => {
              this.visibility = !this.visibility;
              this.notify.success('Edited successfully', 'Event has been deleted');
            },
            err => this.notify.error('Error!', 'Edit error')
            );
        },
        err => this.notify.error('Error!', 'Image wasnt upload to the server')
        );
    } else {
      this.eventService.putEvent(event)
        .subscribe(
        res => {
          this.visibility = !this.visibility;
          this.notify.success('Edited successfully', 'Event has been edited');
        },
        err => this.notify.error('Error!', 'Edit error')
        );
    }
  }

  allowEdit() {
    this.visibility = !this.visibility;
  }

  getImage(images) {
    if (this.regExp.test(images[0].type)) {
      this.image = images[0];

      // let reader: FileReader = new FileReader();
      // let previewSrc: string;
      // reader.onload = function(e) {
      //   previewSrc = e.target.result;
      // }
      // reader.readAsDataURL(images[0]);
    } else {
      this.notify.error('Error!', 'Only images allowed');
    }
  }

  goBack(){
    this.location.back();
  }

}
