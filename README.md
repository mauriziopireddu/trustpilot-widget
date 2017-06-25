# Trustpilot Widget
![TrustpilotWidget preview](https://github.com/mauriziopireddu/trustpilotWidget/blob/master/preview.png?raw=true)

## Run demo 
To run the demo use `npm install` and `ng serve`. 
Navigate to `http://localhost:4200/`

## Tools and requirements
1. **CSS should be made with a CSS precompiler:** the project uses SASS
2. **You can use all third party JS libraries**
3. **All HTML/SCSS/CSS and JS, needs to be custom made... i.e. by you**
4. **Use 'Helvetica Neue', Arial, Helvetica, sans-serif; for the font stack:**
 the custom font-family is defined in *style.sass* and it is used in all of the demo

## Technologies
* [Angular 4](https://angular.io)
* [Bulma.io](http://bulma.io/)
* [FontAwesome](http://fontawesome.io/)

## Code organization
The project is organized by features (as suggested in the best practices section of Angular documentation)

#### Components
1. **reviews-widget:** this is the main component. It calls the review service to retrieve the data and instantiates the review-details components
2. **review-detail:** it represents a review
3. **start-rating:** it renders the stars of a review. As it is used multiple times in the demo, it's located in the *shared* folder
#### Services
**review.service:** retrieves the data from the *review.json* file. The reviews are chosen at random using Durstenfeld shuffle algorithm as its running time is O(n)

#### Model
**review:** it represents a review
 
## Style
 **style.sass:** here I defined a custom color palette. The colors are inspired from the trustpilot logo and from the Material Design practices
 
