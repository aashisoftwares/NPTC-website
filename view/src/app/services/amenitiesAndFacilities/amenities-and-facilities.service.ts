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
export class AmenitiesAndFacilitiesService {
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
  // ---------------------------- cdtp Service --------------------------------
  // cdtp update
  public cdtpUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'cdtp/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // cdtp list
  public cdtpList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'cdtp/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // ---------------------------- educationCenter Service --------------------------------
  // educationCenter update
  public educationCenterUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'educationCenter/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // educationCenter list
  public educationCenterList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'educationCenter/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // ---------------------------- emdc Service --------------------------------
  // emdc update
  public emdcUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'emdc/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // emdc list
  public emdcList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'emdc/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }


  // ---------------------------- hostel Service --------------------------------
  // hostel update
  public hostelUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'hostel/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // hostel list
  public hostelList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'hostel/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }


  // ---------------------------- iipc Service --------------------------------
  // iipc update
  public iipcUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'iipc/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // iipc list
  public iipcList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'iipc/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }


  // ---------------------------- iste Service --------------------------------
  // iste update
  public isteUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'iste/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // iste list
  public isteList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'iste/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }


  // ---------------------------- library Service --------------------------------
  // library update
  public libraryUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'library/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // library list
  public libraryList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'library/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }


  // ---------------------------- ncc Service --------------------------------
  // ncc update
  public nccUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'ncc/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // ncc list
  public nccList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'ncc/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }


  // ---------------------------- nss Service --------------------------------
  // nss update
  public nssUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'nss/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // nss list
  public nssList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'nss/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }


  // ---------------------------- physicalEducation Service --------------------------------
  // physicalEducation update
  public physicalEducationUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'physicalEducation/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // physicalEducation list
  public physicalEducationList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'physicalEducation/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }


  // ---------------------------- redRibbonClub Service --------------------------------
  // redRibbonClub update
  public redRibbonClubUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'redRibbonClub/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // redRibbonClub list
  public redRibbonClubList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'redRibbonClub/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }


  // ---------------------------- sgs Service --------------------------------
  // sgs update
  public sgsUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'sgs/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // sgs list
  public sgsList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'sgs/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }

  // ---------------------------- youthRedCross Service --------------------------------
  // youthRedCross update
  public youthRedCrossUpdate(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'youthRedCross/update', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }
  // youthRedCross list
  public youthRedCrossList(info: any): Observable<any[]> {
    if (this.authenticationService.loggedIn()) {
      localStorage.setItem('sessionKey', btoa(Date()));
      return this.http.post(apiUrl + 'youthRedCross/list', info, { headers: this.headers })
        .pipe(map(response => response), catchError(error => of(error)));
    } else {
      return this.invalidReqMessage();
    }
  }
}
