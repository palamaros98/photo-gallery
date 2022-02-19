import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SliderComponent} from "./dashboard/slider/slider.component";
import {DashGalleryComponent} from "./dashboard/dash-gallery/dash-gallery.component";
import {PhotoBoardComponent} from "./dashboard/photo-board/photo-board.component";
import {PhotoLineComponent} from "./dashboard/slider/photo-line/photo-line.component";


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SliderComponent,
    DashGalleryComponent,
    PhotoBoardComponent,
    PhotoLineComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule {
}
