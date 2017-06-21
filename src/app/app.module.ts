import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReviewsWidgetComponent } from './reviews-widget/reviews-widget.component';
import { ReviewDetailComponent } from './reviews-widget/review-detail/review-detail.component';
import { ReviewStarRatingComponent } from './reviews-widget/review-detail/review-star-rating/review-star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsWidgetComponent,
    ReviewDetailComponent,
    ReviewStarRatingComponent
  ],
  imports: [ BrowserModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
