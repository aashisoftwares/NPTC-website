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
export class ExaminstionsService {
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
  // ---------------------------- curriculumAndSyllabus Service --------------------------------
  // curriculum and syllabus update
  public curriculumAndSyllabusUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'curriculumAndSyllabus/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }
  // curriculum and syllabus list
  public curriculumAndSyllabusList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'curriculumAndSyllabus/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // ---------------------------- circulars Service --------------------------------
  // circulars create
  public circularsCreate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'circulars/create', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // circulars list
  public circularsList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'circulars/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // circulars delete
  public circularsDelete(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'circulars/delete', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // ---------------------------- downloads Service --------------------------------
  // downloads create
  public downloadsCreate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'downloads/create', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // downloads list
  public downloadsList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'downloads/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // downloads delete
  public downloadsDelete(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'downloads/delete', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }
  
  // ---------------------------- regulations Service --------------------------------
  // regulations create
  public regulationsCreate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'regulations/create', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // regulations list
  public regulationsList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'regulations/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // regulations delete
  public regulationsDelete(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'regulations/delete', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // ---------------------------- results Service --------------------------------
  // results create
  public resultsCreate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'results/create', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // results list
  public resultsList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'results/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // results delete
  public resultsDelete(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'results/delete', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }
}
