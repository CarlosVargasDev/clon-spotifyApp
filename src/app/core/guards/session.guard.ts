import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment,  } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '@mCore/services/verifica-token.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanLoad {
  estado = false;
  constructor(private router:Router, private cookieService:CookieService, private tokenService:TokenService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.checkCookieSession();
  }
  canLoad(route: Route, segments: UrlSegment[]):Observable<boolean> | boolean {
    return this.checkCookieSession();
  }

  checkCookieSession():Observable<boolean>{
    try{
      //Obtener token
      const token = this.cookieService.check('token_service');

      const tokenAux = this.cookieService.get('token_service');
      if(!tokenAux){
        this.router.navigate(['auth/login'])
        return of(false);
      }    
      
      return this.tokenService.verificarToken(tokenAux)
                 .pipe(
                   tap(ok=>{
                    if(!ok){
                      this.router.navigate(['auth/login'])
                    }
                   })
                 );
    }catch(e){
      console.log("Ups, algo sucedio");
      this.router.navigate(['auth/login'])
      return of(false);
    }
  }

}
