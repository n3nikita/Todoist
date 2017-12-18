import { Component, OnInit, AfterViewInit, AnimationTransitionEvent } from '@angular/core';
import { AuthService } from './auth.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private auth: AuthService) {}
  name: string = 'Todoist';

  public options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    lastOnBottom: true,
    maxStack: 3,
    animate: "fromBottom"
  }

  public confirmOptions = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    confirmText: 'Yes',
    declineText: 'No'
  }
}
