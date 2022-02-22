import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ErrResponce } from '../../../../core/models/responce.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    fecha_nac: ['', [Validators.required]]

  })

  errorSession:boolean = false;
  list_errores:ErrResponce[]=[];
  loading = false;

  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router, private cookieService:CookieService) {
    this.verificaToken();
  }

  register(){
    const nombre = this.miFormulario.value.nombre;
    const email = this.miFormulario.value.email;
    const password = this.miFormulario.value.password;
    const fecha_nac = this.miFormulario.value.fecha_nac;
    this.loading = true;
    this.authService.register(email,password, nombre,fecha_nac)
          .subscribe(
            responce => {
              console.log("Usuario Creado correctamente");
              this.router.navigate(['spotify/tracks'])
            },
            (respError:any) => {
              this.errorSession = true;
              // Mostramos los errores
              this.list_errores = respError.error.errors;
              this.loading = false;
              
            }
          )
  }

  verificaToken(){
    /* 
        TODO: Hacer una auntentica validacion de este token en el backend,
        con la validacion actual, se puede falsificar fasilmente el token
      */

      //  Obtener token
     const token = this.cookieService.check('token_service');    


     // Validar token
      if(token){
        this.router.navigate(['spotify/stracks'])
      }
      return true;
  }
}
