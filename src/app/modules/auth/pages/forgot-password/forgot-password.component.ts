import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  })
  loading = false;

  constructor(private fb: FormBuilder, private cookieService: CookieService, private router:Router) {
    this.verificaToken();
  }

  recuperarPassword(){
    console.log("Recuperando password");    
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
