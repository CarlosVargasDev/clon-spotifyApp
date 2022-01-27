import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@mModules/home/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: 'spotify',
    loadChildren: ()=>import('./modules/home/home.module').then( m => m.HomeModule),
    component: HomePageComponent
  },
  {
    path:'auth',
    loadChildren:()=>import('./modules/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path:'**',
    redirectTo:'spotify'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
