import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Auth } from './../models/auth.model';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string){
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password});
  }

  profile(token: string){
    /*let headers = new HttpHeaders();
      headers =headers.set('Authorization', `Bearer ${token}`);
      headers = headers.set('Content-type', 'application/json');
      console.log(headers);
      return this.http.get<User>(`${this.apiUrl}/profile`, { headers });*/
    return this.http.get<User>(`${this.apiUrl}/profile`,{
      headers: {
         Authorization: `Bearer ${token}`,
        //  'Content-type': 'application/json'
      }
    });
  }
}
