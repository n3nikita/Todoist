import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Event } from './event';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { settings } from './settings';


@Injectable()
export class EventService {

  token: string = localStorage.getItem('token');

  //TODO: add subject to update headers

  httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + this.token}),
  };

  imgHeader: any = {
    headers: new HttpHeaders({'Authorization' : 'Bearer ' + this.token}),
  };

  txtHeader: any = {
    headers: new HttpHeaders({ 'Authorization' : 'Bearer ' + this.token}),
    responseType: 'text'
  };

  updateHeaders(token){
    this.httpOptions.headers = new HttpHeaders({ 'Authorization' : 'Bearer ' + token});
    this.imgHeader.headers = new HttpHeaders({'Authorization' : 'Bearer ' + token});
    this.txtHeader.headers = new HttpHeaders({'Authorization' : 'Bearer ' + token});
  }

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    this.updateHeaders(localStorage.getItem('token'));
    return this.http.get(settings.url.events, this.httpOptions)
      .catch(this.handleError)
  }

  getEvent(id: number): Observable<any> {
    return this.http.get(settings.url.events + id, this.httpOptions)
      .catch(this.handleError);
  }

  search(searchStr: string): Observable<any>{
    return this.http.get(settings.url.events + 'search/' + searchStr, this.httpOptions)
      .catch(this.handleError);
  }

  postEvent(event: Event): Observable<any>{
    return this.http.post<Event>(settings.url.events, event, this.httpOptions)
      .catch(this.handleError);
  }

  postEventImg(img: File): Observable<any>{

    // return this.http.post(this.url + 'img', img, imgHeader)
    //   .catch(this.handleError);
    // return Observable.fromPromise(new Promise((resolve, reject) => {
    //   let xhr = new XMLHttpRequest();
    //   xhr.open('POST', this.url + 'img', true);
    //   xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    //   let formData: FormData = new FormData();
    //   formData.append('file', img, img.name);
    //   xhr.send(formData);
    //         if (xhr.status === 200) {
    //             resolve(JSON.parse(xhr.response))
    //         } else
    //             reject(xhr.response)
    // }));

    let formData: FormData = new FormData();
    formData.append('file', img);
    return this.http.post(settings.url.events + 'img', formData, this.imgHeader)
      .map(res => {return res})
      .catch(this.handleError);

  }

  putEvent(event: Event): Observable<any>{
    return this.http.put(settings.url.events, event, this.txtHeader)
      .catch(this.handleError);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(settings.url.events + id, this.txtHeader)
      .catch(this.handleError);
  }

  handleError(error: any){
    console.log('Error code: ' + error.status);
    return Observable.throw(error.message || error);
  }
}

