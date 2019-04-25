import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

const apiUrl = 'http://206.189.131.244:5500/api/app/';

@Injectable({
  providedIn: 'root'
})
export class PlacementsService {

  constructor(private http: HttpClient) { }

// placements list
public placementsList(info: any): Observable<any[]> {
   return this.http.post(apiUrl + 'placements/list', info)
      .pipe(map(response => response), catchError(error => of(error)));
   }
}
