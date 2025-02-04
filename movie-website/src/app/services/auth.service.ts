import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../Models/LoginRequest';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  serverUrl="http://localhost:5049/api/auth"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
   };
   public getToken(): any {
    return localStorage.getItem('token');
   }


  login(loginUser: LoginRequest): void{

     this.http.post<any>(this.serverUrl + "/login", loginUser, this.httpOptions).subscribe((token) =>
    {
       if (token.Token != null) {
        return localStorage.setItem('token',token.Token.toString());

        }
    }
    );
  }

}

