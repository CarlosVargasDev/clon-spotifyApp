import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

interface menuItems{
  defaultOptions: Array<any>,
  accessLink: Array<any>
}


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: menuItems = {
    defaultOptions: [],
    accessLink: []
  }

  userData: any = {
    _id: '2345324j5345kr1ghjg3hj',
    nombre:'Carlos Vargas'
  };


  constructor(private cookieService:CookieService, private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['./tracks']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['./', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['./', 'favorites'],
        // query: { hola: 'mundo' }
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]
  
  }

  logout(){
    console.log("Eliminando token");
    this.cookieService.delete('token_service','/');
    // this.cookieService.deleteAll();
    this.router.navigate(['/auth/login']);
  }
}
