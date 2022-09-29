import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';
import { OfferComponent } from './offer/offer.component';
import { MybookingComponent } from './headercontents/mybooking/mybooking.component';
import { ContactComponent } from './headercontents/contact/contact.component';
import { OnlineTopUpComponent } from './headercontents/online-top-up/online-top-up.component';
import { TopUpComponent } from './headercontents/top-up/top-up.component';
import { GroupbookingComponent } from './headercontents/groupbooking/groupbooking.component';
import { WelcomeComponent } from './headercontents/welcome/welcome.component';
import { CommonComponent } from './common/common.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    BookingComponent,
    OfferComponent,
    MybookingComponent,
    ContactComponent,
    OnlineTopUpComponent,
    TopUpComponent,
    GroupbookingComponent,
    WelcomeComponent,
    CommonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    BookingComponent,
    OfferComponent
  ]
})
export class TripforoModule { }
