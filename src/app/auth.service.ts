import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/do';


@Injectable()
export class AuthService {

  url: string = "http://localhost:58638/api/account/";
  name: string = localStorage.getItem('username');
  token: string;

  constructor(private http: HttpClient, private router: Router) { }

  setToken(){
    if(!localStorage.getItem('token')){
      localStorage.setItem('token', this.token);
    }
  }

  login(user){
    return this.http.post(this.url + 'login', user)
      .do(res => this.setSession(res, user.username))
      .catch(this.handleError);
  }

  signUp(user){
    return this.http.post(this.url + 'register', user, httpOptions)
      .do(res => this.setSession(res, user.username))
      .catch(this.handleError)
  }

  private setSession(authResult, username) {
    console.log('Token: ' + authResult);
    localStorage.setItem('token', authResult);
    localStorage.setItem('username', username);
    this.name = username;
  }

  public logout() {
    localStorage.clear();
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
  responseType: 'text'
};
