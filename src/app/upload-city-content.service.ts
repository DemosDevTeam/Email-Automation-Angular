import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpClient, HttpHeaders } from '@angular/common/http';
import config_url from './config';
import {fullContent} from './fullContent';

@Injectable({
  providedIn: 'root'
})
export class UploadCityContentService {

  //use pre configured domain and append 'uploadCityContent' to end for this specific request
  request_url = config_url + 'cityContent/uploadCityContent';

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    })
  };

  subscribeContent(city_content: fullContent): Observable<Object>{
    return this.http.post<Object>(this.request_url, city_content, this.httpOptions);

  }
  constructor(private http: HttpClient) { }
}
