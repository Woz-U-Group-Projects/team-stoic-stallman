import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgSlickComponent } from './ng-slick.component';

@NgModule({
  declarations: [
    NgSlickComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [NgSlickComponent]
})
export class NgSlickModule { }
