import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

// config
import  * as config from '../../../../../config.json';

const apiUrl = config['API_URL'];

@Injectable({
  providedIn: 'root'
})
export class ExaminstionsService {
  constructor(
    private http: HttpClient
  ) {}

  // ---------------------------- curriculumAndSyllabus Service --------------------------------
  // curriculum and syllabus list
  public examinationsList(info: any): Observable<any[]> {
   return this.http.post(apiUrl + 'examinations/list', info)
     .pipe(map(response => response), catchError(error => of(error)));
}
  
  // curriculum and syllabus list
  public curriculumAndSyllabusList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'curriculumAndSyllabus/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- circulars Service --------------------------------

  // circulars list
  public circularsList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'circulars/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }


  // ---------------------------- downloads Service --------------------------------
  // downloads list
  public downloadsList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'downloads/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- regulations Service --------------------------------

  // regulations list
  public regulationsList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'regulations/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }

  // ---------------------------- results Service --------------------------------

  // results list
  public resultsList(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'results/list', info)
        .pipe(map(response => response), catchError(error => of(error)));
  }
}
