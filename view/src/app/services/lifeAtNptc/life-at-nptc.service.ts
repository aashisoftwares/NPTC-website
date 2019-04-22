import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

const apiUrl = 'http://206.189.131.244:5500/api/app/';


@Injectable({
  providedIn: 'root'
})
export class LifeAtNptcService {
  constructor(
    private http: HttpClient
  ) {}

  // ---------------------------- contactUs Service --------------------------------

  // student list
  public studentList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'student/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- facultyAndStaff Service --------------------------------

  // facultyAndStaff list
  public facultyAndStaffList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'facultyAndStaff/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- career Service --------------------------------

  // career list
  public careerList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'career/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }
}
