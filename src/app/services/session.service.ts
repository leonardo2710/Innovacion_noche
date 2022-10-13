import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SessionService {
    private isLoggedIn = new BehaviorSubject<boolean>(false);
    private ApiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    toggleLogin(state: boolean): void {
        this.isLoggedIn.next(state);
    }
    
    status() {
        const localData: any = localStorage.getItem('user');
        if (!localData) {
          this.isLoggedIn.next(false);
           console.log('Usuario no logeao');
           return false;
        } else {
          const userObj = JSON.parse(localData);
          const token_expires_at = new Date(userObj.token_expires_at);
          const current_date = new Date();
          if (token_expires_at > current_date) {
            this.isLoggedIn.next(true);
            return true;
          } else {
            this.isLoggedIn.next(false);
            console.log('Expiro la sessión');
            return false;
            
          }
        }
        
      }

    login(data:any) {
        return this.http.post(this.ApiUrl + 'login', data);
    }

    sign_up(data:any) {
        return this.http.post(this.ApiUrl + 'register', data);
    }

    // Logout
    logout(){
        const user: any = localStorage.getItem('user');
        const userObj = JSON.parse(user);

        const token = userObj.token;
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        });
        return this.http.get(this.ApiUrl + 'profile/user/logout', {headers:headers});
    }

      // User Info
    user() {
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.ApiUrl + 'user', {
        headers: headers,
    });
  }
}
