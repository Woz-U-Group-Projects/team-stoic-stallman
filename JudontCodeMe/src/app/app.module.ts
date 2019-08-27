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
    YudanshakaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
