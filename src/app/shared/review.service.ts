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
      .then(res => res.json() || {})
      .catch(this.handleError);
  }

  private handleError(error) {
    console.log('error:',error);
    throw(`${error._body || ''}`);
  }

}
