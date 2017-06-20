import { Injectable } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Review } from "./review";

@Injectable()
export class ReviewService {

  constructor(private http: Http) { }

  getReviews(): Promise<Review[]> {
    return this.http.get('../assets/reviews.json')
      .toPromise()
      .then(reviews => reviews.json() || {})
      .then(reviews => this.keepSomeReviews(reviews, 4))
      .then(reviews => this.randomizeReviews(reviews))
      .catch(this.handleError);
  }

  // Just for demo pourpouse and because of the small number of reviews available, 
  // I'm filtering client side. In a real world app, this is server responability
  private keepSomeReviews(reviews, numberOfReviewsToKeep: number): Promise<Review[]>{
    let reviewsToRemove: number = reviews.length - numberOfReviewsToKeep;

    while(reviewsToRemove > 0) {      
      let toRemove = Math.floor(Math.random() * reviews.length);    
      reviews.splice(toRemove, 1);                                  // Remove a random element using the toRemove index
      reviewsToRemove--;
    }

    return reviews;
  }

  /**
 * Randomize reviews using Durstenfeld shuffle algorithm.
 */
  private randomizeReviews(reviews): Promise<Review[]>{
    for (let i = reviews.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = reviews[i];
      reviews[i] = reviews[j];
      reviews[j] = temp;
    }
    return reviews;
}

  private handleError(error) {
    console.log('error:',error);
    throw(`${error._body || ''}`);
  }

}
