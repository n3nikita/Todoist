import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { EventsDashboardComponent } from './events-dashboard/events-dashboard.component';

const routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path: 'detail/:id', component: EventDetailsComponent },
  { path: 'dashboard', component: EventsDashboardComponent },
  { path: 'about', component: AppAboutComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent  },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  providers: [ AuthGuard ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
