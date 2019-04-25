import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import * as cryptojs from 'crypto-js';


const apiUrl = 'http://206.189.131.244:5500/api/app/';

@Injectable({
  providedIn: 'root'
})
export class AcademicsService {
   constructor(private http: HttpClient) {
   }

  // ---------------------------- Department Service --------------------------------
  // list
  public departmentList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'department/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // department list filter by stream
   public departmentListFilterByStream(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'department/list-by-stream', info)
      .pipe(map(response => response), catchError(error => of(error)));
   } 
  // ---------------------------- faculty Service --------------------------------
  // list
  public facultyList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'faculty/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }
  // ---------------------------- programmes Service --------------------------------
  // list
  public programmesList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'programmes/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- stream Service --------------------------------
  // list
  public streamList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'stream/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- department Service --------------------------------
  // view
  public departmentView(info: any): Observable<any[]> {
   return this.http.post(apiUrl + 'department/view', info)
     .pipe(map(response => response), catchError(error => of(error)));
}
}

