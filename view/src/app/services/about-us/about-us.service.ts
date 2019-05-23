import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

// config
import  * as config from '../../../../../config.json';

const apiUrl = config['API_URL'];

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  constructor(
    private http: HttpClient,
  ) {}
  // ---------------------------- About Service --------------------------------

  // about list
  public aboutList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'about/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- Vision Service --------------------------------
  // vision list
  public visionList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'vision/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- Mission Service --------------------------------
  // mission list
  public missionList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'mission/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- Management & Administration Service --------------------------------
  // Management & Administration list
  public managementAdminList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'managementAdmin/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- Founder Service --------------------------------
  // founder list
  public founderList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'founder/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }
  // ---------------------------- Chairman Service --------------------------------
  // chairman list
  public chairmanList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'chairman/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- Chairman Emritus Service --------------------------------
  // chairman emritus list
  public chairmanEmritusList(info: any): Observable<any[]> {
   return this.http.post(apiUrl + 'chairmanEmritus/list', info)
   .pipe(map(response => response), catchError(error => of(error)));
  }
  // ---------------------------- Correspondent Service --------------------------------
  // correspondent list
  public correspondentList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'correspondent/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- Secretary Service --------------------------------
  // secretary list
  public secretaryList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'secretary/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- Principal Service --------------------------------
  // principal list
  public principalList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'principal/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- Enlighten through education Service --------------------------------
  // enlightenTE list
  public enlightenTEList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'enlightenTE/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- colleges Service --------------------------------
  // colleges list
  public collegesList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'colleges/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- schools Service --------------------------------
  // schools list
  public schoolsList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'schools/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- socialDA Service --------------------------------
  // socialDA list
  public socialDAList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'socialDA/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- accreditationStatus Service --------------------------------
  // accreditationStatus list
  public accreditationStatusList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'accreditationStatus/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- autonomousStatus Service --------------------------------
  // autonomousStatus list
  public autonomousStatusList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'autonomousStatus/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- approval ------------------------
  //
  public approvalList(info: any): Observable<any[]> {
   return this.http.post(apiUrl + 'approval/list', info)
   .pipe(map(response => response), catchError(error => of(error)));
 }

  // ---------------------------- aicteApproval Service --------------------------------
  // aicteApproval list
  public aicteApprovalList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'aicteApproval/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- antiRaggingCommittee Service --------------------------------
  // antiRaggingCommittee list
  public antiRaggingCommitteeList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'antiRaggingCommittee/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- grievanceRedressalCommittee Service --------------------------------
  // grievanceRedressalCommittee list
  public grievanceRedressalCommitteeList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'grievanceRedressalCommittee/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- womenEmpowermentCell Service --------------------------------

  // womenEmpowermentCell list
  public womenEmpowermentCellList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'womenEmpowermentCell/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- harassmentRedressalCommittee Service --------------------------------
  // harassmentRedressalCommittee list
  public harassmentRedressalCommitteeList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'harassmentRedressalCommittee/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- organogram Service --------------------------------
  // organogram list
  public organogramList(info: any): Observable<any[]> {
    return this.http.post(apiUrl + 'organogram/list', info)
    .pipe(map(response => response), catchError(error => of(error)));
  }

   // ---------------------------- count Service --------------------------------
  // count list
  public countList(info: any): Observable<any[]> {
   return this.http.post(apiUrl + 'count/list', info)
   .pipe(map(response => response), catchError(error => of(error)));
  }
}
