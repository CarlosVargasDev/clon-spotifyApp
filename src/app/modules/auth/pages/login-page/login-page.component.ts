import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
  })


  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {

  }


  login(){
      const email = this.miFormulario.value.email;
      const passworld = this.miFormulario.value.password;
      this.authService.login(email,passworld);
  }



}
