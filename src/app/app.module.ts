import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';
import { EventComponent } from './event/event.component';
import { CouncilMeetingUpdateComponent } from './council-meeting-update/council-meeting-update.component';
import { TownInNewsComponent } from './town-in-news/town-in-news.component';
import { ContentBlockComponent } from './content-block/content-block.component';
import { SuccessfulUserCreationComponent } from './successful-user-creation/successful-user-creation.component';
import { SuccessfulContentUploadComponent } from './successful-content-upload/successful-content-upload.component';
import { SuccessfulFeedbackComponent } from './successful-feedback/successful-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FeedbackComponent,
    CityDashboardComponent,
    EventComponent,
    CouncilMeetingUpdateComponent,
    TownInNewsComponent,
    ContentBlockComponent,
    SuccessfulUserCreationComponent,
    SuccessfulContentUploadComponent,
    SuccessfulFeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
