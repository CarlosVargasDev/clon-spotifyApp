import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email:string, password: string):Observable<any>{
    const body = {
      email,
      password
    }    
    return this.http.post(`${this.URL}/auth/login`, body)
               .pipe(
                 tap((resp:any) => {
                   const { data, token} = resp;
                   this.cookieService.set('token_service', token, 4, '/');
                 })
               );
  }

  register(email:string, password: string, name:string, fecha_nac:Date):Observable<any>{
    const body = {
      email,
      password,
      name,
      fecha_nac,
      creadoPorEmail:true
    }
    return this.http.post(`${this.URL}/auth/register`, body)
                .pipe(
                  tap((resp:any) => {
                    console.log(resp);
                    const { ok, data, token} = resp;
                    this.cookieService.set('token_service', token, 4, '/');
                  })
                );
  }



}