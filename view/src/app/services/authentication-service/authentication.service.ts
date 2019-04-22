import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import * as cryptojs from 'crypto-js';

const apiUrl = "http://localhost:5500/api/web/user/";

@Injectable({
   providedIn: 'root'
})
export class AuthenticationService {

   constructor(
      private http: HttpClient
   ) { }

   // user logged in or not
   public loggedIn() {
      if (localStorage.getItem('token') && localStorage.getItem('sessionKey') && localStorage.getItem('sessionToken')) {
         const lastSession = new Date(atob(localStorage.getItem('sessionKey'))).getTime();
         const currentSession = new Date().getTime();
         const sessionDifference: number = (currentSession - lastSession)/1000/60;
         if (sessionDifference < 20) {
            return true;
         } else {
            localStorage.clear();
            return false;
         }
      } else {
         localStorage.clear();
         return false;
      }
   }

   // get logged user info
   public getUserInfo() {
      if (localStorage.getItem('token') && localStorage.getItem('sessionKey') && localStorage.getItem('sessionToken')) {
         const lastSession = new Date(atob(localStorage.getItem('sessionKey'))).getTime();
         const currentSession = new Date().getTime();
         const sessionDifference: number = (currentSession - lastSession)/1000/60;
         if (sessionDifference < 20) {
            const userInfo = localStorage.getItem('token');
            const security = (userInfo.slice(0, -2)).slice(-32);
            const encData = (userInfo.slice(0, -34));
            const decryptedBytes = cryptojs.AES.decrypt(encData, security);
            const decryptedData = JSON.parse(decryptedBytes.toString(cryptojs.enc.Utf8));
            return decryptedData;
         } else {
            localStorage.clear();
            return false;
         }
      } else {
         localStorage.clear();
         return false;
      }
   }
   // user login validate
   public loginValidate(info: any): Observable<any[]> {
      return this.http.post(apiUrl + 'login', info).pipe(map(response => {
         const receivingData = response;
         if (receivingData['status'] === 200) {
            const security = (receivingData['info'].slice(0, -2)).slice(-32);
            const encData = (receivingData['info'].slice(0, -34));
            const decryptedBytes = cryptojs.AES.decrypt(encData, security);
            const decryptedData = JSON.parse(decryptedBytes.toString(cryptojs.enc.Utf8));
            localStorage.setItem('token', receivingData['info']);
            localStorage.setItem('sessionToken', btoa(decryptedData._id + security));
            localStorage.setItem('sessionKey', btoa(Date()));
         }
         delete receivingData['info'];
         response['_body'] = JSON.stringify(receivingData);
         return response;
      }), catchError(error => of(error)));
   }

   
}
