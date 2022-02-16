import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment,  } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanLoad {
  constructor(private router:Router, private cookieService:CookieService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.checkCookieSession();
  }
  canLoad(route: Route, segments: UrlSegment[]):Observable<boolean> | boolean {
    return this.checkCookieSession();
  }

  checkCookieSession():boolean{
    try{
      //Obtener token
      const token = this.cookieService.check('token_service');
      if(!token){
        this.router.navigate(['auth/login'])
        return false;
      }
      
  
      // TODO: Validar Token desde el backend
      // ....

      return true;

    }catch(e){
      console.log("Ups, algo sucedio");
      return false
    }
  }

}
