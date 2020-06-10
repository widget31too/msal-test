// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

// Replace the Azure AD B2C configuration information with your values
export const tenantConfig = {
  loginAuthorityDomain: "login.microsoftonline.com",
  tenant: "myb2ctenant.onmicrosoft.com",
  clientID: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  signUpSignInPolicy: "B2C_1_SignIn",
  b2cScopes: ["https://myb2ctenant.onmicrosoft.com/myapplication/access"],
  redirectUri: 'http://localhost:4200',
  postLogoutRedirectUri: 'http://localhost:4200/signout'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
