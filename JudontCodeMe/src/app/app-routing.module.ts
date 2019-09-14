import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindaclubComponent } from './findaclub/findaclub.component';
import { YudanshakaiComponent } from './yudanshakai/yudanshakai.component';
import { MemberconnectComponent } from './memberconnect/memberconnect.component';
import { EventComponent } from './event/event.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'clubs',
    component: FindaclubComponent
  },
  {
    path: 'yudanshakai',
    component: YudanshakaiComponent
  },
  {
    path: 'connect',
    component: MemberconnectComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
