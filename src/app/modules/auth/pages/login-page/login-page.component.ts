import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
  })

  errorSession:boolean = false;

  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router, private cookieService:CookieService) {
    this.verificaToken();
  }

  login(){
      const email = this.miFormulario.value.email;
      const passworld = this.miFormulario.value.password;
      this.authService.login(email,passworld)
          .subscribe(
            responce => {
              console.log("Sesion Inicidada Correctamente");
              this.errorSession = false;
              this.router.navigate(['spotify/tracks'])
            },
            error => {
              console.log("Ocurrio un error con tu email o password");
              this.errorSession= true;
            }
          )
  }

  verificaToken(){
    /* 
        TODO: Hacer una auntentica validacion de este token en el backend,
        con la validacion actual, se puede falsificar fasilmente el token
      */
      // Verificar Token
      const token = this.cookieService.check('token_service');    
      if(token){
        this.router.navigate(['spotify/stracks'])
      }
      return true;
  }
}
