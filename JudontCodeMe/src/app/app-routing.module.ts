import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindAClubComponent } from './find-a-club/find-a-club.component';
import { YudanshakaiComponent } from './yudanshakai/yudanshakai.component';
import { MemberConnectComponent } from './member-connect/member-connect.component';
import { EventComponent } from './event/event.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { PaypalComponent } from './paypal/paypal.component';
import { EventIjfComponent } from './event-ijf/event-ijf.component';
import { EventPjComponent } from './event-pj/event-pj.component';
import { EventUsajComponent } from './event-usaj/event-usaj.component';
import { EventUsjaComponent } from './event-usja/event-usja.component';
import { EventUsjfComponent } from './event-usjf/event-usjf.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clubs', component: FindAClubComponent},
  {path: 'yudanshakai', component: YudanshakaiComponent},
  {path: 'connect', component: MemberConnectComponent},
  {path: 'event', component: EventComponent},
  {path: 'event/ijf', component: EventIjfComponent},
  {path: 'event/pj', component: EventPjComponent},
  {path: 'event/usaj', component: EventUsajComponent},
  {path: 'event/usja', component: EventUsjaComponent},
  {path: 'event/usjf', component: EventUsjfComponent},
  {path: 'news', component: NewsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'help', component: HelpComponent},
  {path: 'paypal', component: PaypalComponent},
  {path: '',redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
