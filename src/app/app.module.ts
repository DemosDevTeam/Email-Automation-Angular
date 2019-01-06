import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FeedbackComponent,
    CityDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
