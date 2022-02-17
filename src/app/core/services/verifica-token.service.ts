import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {

  }
  
  verificarToken(token:string): Observable<boolean>{
    const body = {
      token: `Bearer ${token}`
    }
    
    return this.http.post(`${this.URL}/auth/verificaToken`, body)
                .pipe( 
                  map(resp => {return true} ),
                  catchError(error => {return of(false)}),
                );
  }  
}
