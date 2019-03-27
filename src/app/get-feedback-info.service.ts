import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import config_url from './config';

@Injectable({
  providedIn: 'root'
})
export class GetFeedbackInfoService {

  //use pre configured domain and append 'uploadCityContent' to end for this specific request
  request_url = config_url + 'feedback/cityFeedback';

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    })
  };

  

  subscribeContent(city_name: string, state_name: string, dateToBeCreated: string, title: string): Observable<Object>{
    let params = new HttpParams()
    .set('city', city_name)
    .set('state', state_name)
    .set('dateToBeCreated', dateToBeCreated)
    .set('title', title);
    return this.http.get<any>(this.request_url, {params});
  }

  constructor(private http: HttpClient) { }
}
