import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpClient, HttpHeaders } from '@angular/common/http';
import config_url from './config';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CreateSubscriberService {

  //uses the domain provided in config_url and appends 'singup' to the end for this specific request
  request_url = config_url + 'signup';

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type':  'application/json'
    })
  };

  subscribeUser(new_user: User): Observable<Object> {
    return this.http.post<Object>(this.request_url, new_user, this.httpOptions);
  }


  constructor(private http: HttpClient) { }
}
