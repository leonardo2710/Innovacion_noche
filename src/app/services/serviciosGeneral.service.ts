import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class serviciosGeneralService {
    private ApiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }


    // Logout
    getVideos(idTema){
        const user: any = localStorage.getItem('user');
        const userObj = JSON.parse(user);

        const token = userObj.token;
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        });
        return this.http.get(this.ApiUrl + `profile/user/videos/${idTema}`, {headers:headers});
    }
    getVideosPreguntas(idTema){
      const user: any = localStorage.getItem('user');
      const userObj = JSON.parse(user);

      const token = userObj.token;
      const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
      });
      return this.http.get(this.ApiUrl + `profile/user/videosPreguntas/${idTema}`, {headers:headers});
    }

    getVideosRespuestas(ids){
      const user: any = localStorage.getItem('user');
      const userObj = JSON.parse(user);

      const token = userObj.token;
      const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
      });
      return this.http.get(this.ApiUrl + `profile/user/videosPreguntasRespuestas/[${ids}]`, {headers:headers});
    }



}
