import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { PageSixComponent } from './page-six/page-six.component';
import { PageSevenComponent } from './page-seven/page-seven.component';
import { PageEightComponent } from './page-eight/page-eight.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'clubs',
    component: PageTwoComponent
  },
  {
    path: 'yudanshakai',
    component: PageThreeComponent
  },
  {
    path: 'connect',
    component: PageFourComponent
  },
  {
    path: 'event',
    component: PageFiveComponent
  },
  {
    path: 'news',
    component: PageSixComponent
  },
  {
    path: 'about',
    component: PageSevenComponent
  },
  {
    path: 'contact',
    component: PageEightComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
