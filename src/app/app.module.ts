import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReviewsWidgetComponent } from './reviews-widget/reviews-widget.component';
import { ReviewDetailComponent } from './reviews-widget/review-detail/review-detail.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsWidgetComponent,
    ReviewDetailComponent,
    StarRatingComponent
  ],
  imports: [ BrowserModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
