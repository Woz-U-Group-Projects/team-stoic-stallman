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


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clubs', component: FindAClubComponent},
  {path: 'yudanshakai', component: YudanshakaiComponent},
  {path: 'connect', component: MemberConnectComponent},
  {path: 'event', component: EventComponent},
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
