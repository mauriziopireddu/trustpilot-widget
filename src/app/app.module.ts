import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetContainerComponent } from './widget-container/widget-container.component';
import { ReviewsWidgetComponent } from './reviews-widget/reviews-widget.component';
import { ReviewDetailComponent } from './reviews-widget/review-detail/review-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetContainerComponent,
    ReviewsWidgetComponent,
    ReviewDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
