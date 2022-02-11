import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginPageComponent
  },
  
  {
    path:'forgotPassword',
    component:ForgotPasswordComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },

  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
