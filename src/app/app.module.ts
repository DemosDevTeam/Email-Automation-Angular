import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';
import { EventComponent } from './event/event.component';
import { CouncilMeetingUpdateComponent } from './council-meeting-update/council-meeting-update.component';
import { TownInNewsComponent } from './town-in-news/town-in-news.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FeedbackComponent,
    CityDashboardComponent,
    EventComponent,
    CouncilMeetingUpdateComponent,
    TownInNewsComponent
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
