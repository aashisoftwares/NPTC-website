import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import * as cryptojs from 'crypto-js';

import { AuthenticationService } from '../authentication-service/authentication.service';

const apiUrl = "http://localhost:5500/api/web/";


@Injectable({
  providedIn: 'root'
})
export class LifeAtNptcService {
  headers;
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.headers = new HttpHeaders({
      'authorization': atob(localStorage.getItem('sessionToken'))
    });
  }

  // ------------------------ Invalid Request Message --------------------------------
  invalidReqMessage() {
    const Message = JSON.stringify({ Status: false, Message: 'Session Time Out, Please Login to continue' });
    return Observable.create(observer => {
      const Response = { status: 401, _body: Message };
      observer.next(Response);
      observer.complete();
    });
  }
  // ---------------------------- contactUs Service --------------------------------
  // student update
  public studentUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'student/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // student list
  public studentList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'student/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // ---------------------------- facultyAndStaff Service --------------------------------
  // facultyAndStaff update
  public facultyAndStaffUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'facultyAndStaff/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // facultyAndStaff list
  public facultyAndStaffList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'facultyAndStaff/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // ---------------------------- career Service --------------------------------
  // career update
  public careerUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'career/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // career list
  public careerList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'career/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }
}
