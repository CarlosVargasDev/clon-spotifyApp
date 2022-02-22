import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directivas
import { ImgBrokenDirective } from './directives/img-broken.directive';

// Componentes
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/order-list.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    CardPlayerComponent,
    HeaderUserComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    OrderListPipe,
    ImgBrokenDirective,
    SpinnerComponent
  ],
  exports:[
    // Componentes
    SideBarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SpinnerComponent,

    // Directivas
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
