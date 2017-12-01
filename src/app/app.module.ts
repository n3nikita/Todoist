import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventService } from './event.service';
import { AuthService } from './auth.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppAboutComponent } from './app-about/app-about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EventComponent } from './event/event.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CustomFormsModule } from 'ng2-validation';
import { EventsDashboardComponent } from './events-dashboard/events-dashboard.component';
import { EventDashComponent } from './event-dash/event-dash.component'


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent,
    AppAboutComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    EventComponent,
    EventsDashboardComponent,
    EventDashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    CustomFormsModule
  ],
  providers: [ EventService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
