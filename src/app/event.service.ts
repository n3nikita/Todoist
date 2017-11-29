import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Event } from './event';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




@Injectable()
export class EventService {

  url: string = "http://localhost:58638/api/events/";

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(this.url)
      .catch(this.handleError)
  }

  getEvent(id: number): Observable<any> {
    return this.http.get(this.url + id, httpOptions)
      .catch(this.handleError);
  }

  postEvent(event: Event): Observable<any>{
    return this.http.post<Event>(this.url, event, httpOptions)
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
    return this.http.post(this.url + 'img', formData, imgHeader)
      .map(res => {return res})
      .catch(this.handleError);

  }

  putEvent(event: Event): Observable<any>{
    return this.http.put(this.url, event, txtHeader)
      .catch(this.handleError);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(this.url+id, txtHeader)
      .catch(this.handleError);
  }

  handleError(error: any){
    console.log('Error code: ' + error.status);
    return Observable.throw(error.message || error);
  }
}

const httpOptions: any = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                             'Authorization' : 'Bearer ' + localStorage.getItem('token')}),
};

const imgHeader: any = {
  headers: new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('token')}),
};

const txtHeader: any = {
  headers: new HttpHeaders({ 'Authorization' : 'Bearer ' + localStorage.getItem('token')}),
  responseType: 'text'
}

