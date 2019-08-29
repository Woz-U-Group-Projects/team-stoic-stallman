import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FindaclubComponent } from './findaclub/findaclub.component';
import { YudanshakaiComponent } from './yudanshakai/yudanshakai.component';
import { MemberconnectComponent } from './memberconnect/memberconnect.component';
import { EventComponent } from './event/event.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgSlickComponent } from './ng-slick/ng-slick.component';
import { AnimatedLogoComponent } from './animated-logo/animated-logo.component';
import { HelpComponent } from './help/help.component';
import { RssComponent } from './rss/rss.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FindaclubComponent,
    YudanshakaiComponent,
    MemberconnectComponent,
    EventComponent,
    NewsComponent,
    AboutComponent,
    ContactComponent,
    NgSlickComponent,
    AnimatedLogoComponent,
    HelpComponent,
    RssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
