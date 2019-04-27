import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

const apiUrl = 'http://206.189.131.244:5500/api/app/';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient,) { }
  
  // ------------------ homeslider -----------
  
  // slider list
  public sliderList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'homePage/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ------------------ welcome ---------------------

  public welcomeList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'welcome/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // -----------admission ------------
  public admissionList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'admission/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }
  
  // ------------council ------------
  public councilList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'council/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }
  

  // -------------recruiter list ----------------
  public recruitersList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'ourRecruiters/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }
}
