import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'dashboard/:state/:city', component: CityDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
