import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectTokenInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try{
      const token:string =  this.cookieService.get('token_service');
      const headers = {authorization: `Bearer ${token}`};

      // Agregamos el token a la peticion
      let newRequest = request.clone({
          setHeaders:headers
        }
      );

      return next.handle(newRequest);

    }catch(error){
      console.log("Error en los headers al enviar peticion", error);
      return next.handle(request);
    }
  }
}
