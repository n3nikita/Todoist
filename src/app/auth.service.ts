import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/do';
import { Subject } from 'rxjs/Subject';
import { settings } from './settings';


@Injectable()
export class AuthService {

  name: string = localStorage.getItem('username');
  // private loggedIn = new Subject<boolean>();
  // loggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) { }


  login(user){
    return this.http.post(settings.url.account + 'login', user)
      .do(res => this.setSession(res, user.username))
      .catch(this.handleError);
  }

  signUp(user){
    return this.http.post(settings.url.account + 'register', user, httpOptions)
      .do(res => this.setSession(res, user.username))
      .catch(this.handleError)
  }

  private setSession(authResult, username) {
    localStorage.clear();
    //this.loggedIn.next(true);
    console.log('Token: ' + authResult);
    localStorage.setItem('token', authResult);
    localStorage.setItem('username', username);
    this.name = username;
  }

  public logout() {
    localStorage.clear();
    //this.loggedIn.next(false);
    this.router.navigateByUrl('/');
  }

  public isLoggedIn() {
    return tokenNotExpired();
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  handleError(error: any){
    console.log('Error code: ' + error.status);
    if(error.status === 401){
      console.log('Invalid login or password');
      return Observable.throw(error);
    }
    return Observable.throw(error.message || error);
  }
}

const httpOptions: any = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  responseType: 'json'
};
