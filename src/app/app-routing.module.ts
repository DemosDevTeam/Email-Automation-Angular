import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SuccessfulUserCreationComponent } from './successful-user-creation/successful-user-creation.component';
import { SuccessfulContentUploadComponent } from './successful-content-upload/successful-content-upload.component';
import { SuccessfulFeedbackComponent } from './successful-feedback/successful-feedback.component';

const routes: Routes = [
  { path: 'landing-page/:state/:city', component: LandingPageComponent },
  { path: 'feedback/:state/:city/:dateToBeCreated/:title', component: FeedbackComponent },
  { path: 'dashboard/:state/:city', component: CityDashboardComponent },
  { path: 'successful-content-upload/:state/:city', component: SuccessfulContentUploadComponent },
  { path: 'successful-user-creation/:state/:city', component: SuccessfulUserCreationComponent },
  { path: 'successful-feedback/:state/:city', component: SuccessfulFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
