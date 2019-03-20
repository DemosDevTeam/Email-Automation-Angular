# EmailAutomationAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

There is not a landing page that the root url navigates to, due to a unique url being used with every user's intended sign up. The urls listed below are valid with this server alone, and the url `http://localhost:4200/feedback/:state/:city/:dateToBeCreated/:title` can be accessed while running a local instance of our node server project.

Valid urls:
  - `http://localhost:4200/landing-page/:state/:city` - landing page where users can sign up to recieve emails from our platform

  - `http://localhost:4200/dashboard/:state/:city` - city facing page for submitting content for next set of outgoing emails

  - `http://localhost:4200/successful-content-upload/:state/:city` - single button page after successful city content upload

  - `http://localhost:4200/successful-user-creation/:state/:city` - single button page after successful user sign up

  - `http://localhost:4200/successful-feedback/:state/:city` - single button page after successful feedback submission

The components linked to these url endpoints can be seen in src/app/app-routing.module.ts

## Components
The following is a list of the components used in our project (can be found in src/app/)
 * city-dashboard - city facing dashboard for content upload
 * content-block - nested in city-dashboard to store data related to each piece of content uploaded by city
 * landing-page - used for user sign up, no nested components
 * feedback - used for gathering user feedback; this is linked to from the emails we send out and the url dictates where we store data after the user has filled out our form. To see this component, comment out the contents of the ngOnSubmit function (but not the funciton itself) in this component and you will see the component rendered with placeholder data
 * successful-feedback - simple component used after feedback submission
 * successful-content-upload - simple component used after city content submission
 * successful-user-creation - simple component used after successful user creation (from landing page)

## Angular Documentation

To better understand our project, see the angular documentation as you read through our code. It can be accessed [here](https://angular.io/docs)
