import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class SessionService {
    private ApiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }


    login(data:any) {
        
        return this.http.post(this.ApiUrl + 'login', data);
    }

    sign_up(data:any) {
    
        return this.http.post(this.ApiUrl + 'signup', data);
    }
  /*  changePassword(data) {
        return this.http.post(this.ApiUrl + 'resetPassword', data);
    }

    sendPasswordResetLink(data) {
        return this.http.post(this.ApiUrl + 'sendPasswordResetLink', data);
    }*/



}
