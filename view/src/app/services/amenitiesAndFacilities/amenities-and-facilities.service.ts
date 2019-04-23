import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';


const apiUrl = 'http://206.189.131.244:5500/api/app/';

@Injectable({
  providedIn: 'root'
})
export class AmenitiesAndFacilitiesService {
  constructor(
    private http: HttpClient,
  ) {}

  // ---------------------------- cdtp Service --------------------------------
  // cdtp list
  public cdtpList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'cdtp/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
   }

  // ---------------------------- educationCenter Service --------------------------------

  // educationCenter list
  public educationCenterList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'educationCenter/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- emdc Service --------------------------------
  // emdc list
  public emdcList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'emdc/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
    }


  // ---------------------------- hostel Service --------------------------------

  // hostel list
  public hostelList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'hostel/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- iipc Service --------------------------------
  // iipc list
  public iipcList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'iipc/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
   }


  // ---------------------------- iste Service --------------------------------
  
  // iste list
  public isteList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'iste/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- library Service --------------------------------
  // library list
  public libraryList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'library/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- ncc Service --------------------------------

  // ncc list
  public nccList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'ncc/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- nss Service --------------------------------
  // nss list
  public nssList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'nss/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- physicalEducation Service --------------------------------
  // physicalEducation list
  public physicalEducationList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'physicalEducation/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- redRibbonClub Service --------------------------------
  // redRibbonClub list
  public redRibbonClubList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'redRibbonClub/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- sgs Service --------------------------------
  // sgs list
  public sgsList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'sgs/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- youthRedCross Service --------------------------------

  // youthRedCross list
  public youthRedCrossList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'youthRedCross/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }
}
