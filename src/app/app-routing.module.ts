import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { EventsDashboardComponent } from './events-dashboard/events-dashboard.component';

export const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent, canActivate: [ AuthGuard ] },
  { path: 'detail/:id', component: EventDetailsComponent, canActivate: [ AuthGuard ] },
  { path: 'dashboard', component: EventsDashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'home', component: AppHomeComponent },
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
