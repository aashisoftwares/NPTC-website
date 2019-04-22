import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

const apiUrl = "http://localhost:5500/api/app/";


@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  headers;
  constructor(
    private http: HttpClient,
  ) {}

  // ---------------------------- contactUs Service --------------------------------
  // contactUs list
  public contactUsList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'contactUs/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- eBrochure Service --------------------------------
  // eBrochure list
  public eBrochureList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'eBrochure/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- eligibility Service --------------------------------
  // eligibility list
  public eligibilityList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'eligibility/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- facilities Service --------------------------------
  // facilities list
  public facilitiesList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'facilities/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- scholarships Service --------------------------------
  // scholarships list
  public scholarshipsList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'scholarships/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

}
