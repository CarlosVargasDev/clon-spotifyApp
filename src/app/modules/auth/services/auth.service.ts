import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  // sendCredentials(email: string, password: string): Observable<any> {
  //   const body = {
  //     email,
  //     password
  //   }    
  //   return this.http.post(`${this.URL}/auth/login`, body)
  // }


  login(email:string, password: string):void{
    console.log(email, password);
    /* 
    */
  }



}
