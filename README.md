# MsalTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24. It is a test application to demonstrate an issue with MSAL and/or Azure AD B2C, where logout will sometimes not fully clear the user authentication.
* Log in, then log out within 10 minutes. Second login will require re-entering credentials.
* Log in, then log out after 15 minutes. Second login will automatically reauthenticate, without requiring credentials

https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/1759

## MSAL Configuration

This project assumes an Azure AD B2C tenant for authentication. Modify the values of tenantConfig in src/environments/environment.ts for your B2C tenant
* tenant
* clientID
* b2cScopes

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
