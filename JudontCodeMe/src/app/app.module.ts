import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { FindAClubComponent } from './find-a-club/find-a-club.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { MemberConnectComponent } from './member-connect/member-connect.component';
import { NewsComponent } from './news/news.component';
import { PaypalComponent } from './paypal/paypal.component';
import { YudanshakaiComponent } from './yudanshakai/yudanshakai.component';
import { EventIjfComponent } from './event-ijf/event-ijf.component';
import { EventPjComponent } from './event-pj/event-pj.component';
import { EventUsajComponent } from './event-usaj/event-usaj.component';
import { EventUsjaComponent } from './event-usja/event-usja.component';
import { EventUsjfComponent } from './event-usjf/event-usjf.component';
import { CommitteesComponent } from './committees/committees.component';
import { NgSlickComponent } from './ng-slick/ng-slick.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    EventComponent,
    FindAClubComponent,
    FooterComponent,
    HeaderComponent,
    HelpComponent,
    HomeComponent,
    MemberConnectComponent,
    NewsComponent,
    PaypalComponent,
    YudanshakaiComponent,
    EventIjfComponent,
    EventPjComponent,
    EventUsajComponent,
    EventUsjaComponent,
    EventUsjfComponent,
    CommitteesComponent,
    NgSlickComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    SlickCarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
