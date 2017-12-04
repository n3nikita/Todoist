import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService) { }
  name: string = 'Todoist';
  public options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    lastOnBottom: true,
    maxStack: 3,
    animate: "fromBottom"
  }
}
