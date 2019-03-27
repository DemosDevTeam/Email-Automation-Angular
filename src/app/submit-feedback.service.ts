import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpClient, HttpHeaders } from '@angular/common/http';
import config_url from './config';
import {feedback} from './feedback';

@Injectable({
  providedIn: 'root'
})
export class SubmitFeedbackService {
  request_url = config_url + 'feedback/cityFeedback';

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    })
  };

  subscribeContent(feedback_content: feedback): Observable<Object>{
    return this.http.post<Object>(this.request_url, feedback_content, this.httpOptions);
  }


  constructor(private http: HttpClient) { }
}
