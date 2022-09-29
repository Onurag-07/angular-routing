import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TripforoModule } from './tripforo/tripforo.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TripforoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
