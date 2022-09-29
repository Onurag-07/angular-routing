import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MybookingComponent } from './tripforo/headercontents/mybooking/mybooking.component';
import { ContactComponent } from './tripforo/headercontents/contact/contact.component';
import { OnlineTopUpComponent } from './tripforo/headercontents/online-top-up/online-top-up.component';
import { TopUpComponent } from './tripforo/headercontents/top-up/top-up.component';
import { GroupbookingComponent } from './tripforo/headercontents/groupbooking/groupbooking.component';
import { WelcomeComponent } from './tripforo/headercontents/welcome/welcome.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonComponent } from './tripforo/common/common.component';



const routes: Routes = [
  {
    path:'',
    component:CommonComponent
  },
  {
    path:'mybooking',
    component:MybookingComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'onlinetopup',
    component:OnlineTopUpComponent
  },
  {
    path:'topup',
    component:TopUpComponent
  },
  {
    path:'groupbooking',
    component:GroupbookingComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
