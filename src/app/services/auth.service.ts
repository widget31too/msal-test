import { Injectable } from '@angular/core';
import { tenantConfig } from 'src/environments/environment';
import { UserAgentApplication, AuthError, AuthResponse } from 'msal';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Configure the authority for Azure AD B2C
  private authority = "https://" + tenantConfig.loginAuthorityDomain + "/tfp/" + tenantConfig.tenant + "/" + tenantConfig.signUpSignInPolicy;
  private clientApplication: UserAgentApplication;
  public loginStatus = new BehaviorSubject<boolean>(false);

  constructor() {
    console.log('Creating MSAL service');
    this.clientApplication = new UserAgentApplication({
      auth: {
        clientId: tenantConfig.clientID,
        authority: this.authority,
        validateAuthority: false,
        redirectUri: tenantConfig.redirectUri,
        postLogoutRedirectUri: tenantConfig.postLogoutRedirectUri,
        navigateToLoginRequestUrl: false
      }
    });

    this.clientApplication.handleRedirectCallback((error: AuthError, response: AuthResponse) => {
      if (error) {
        console.log('Error acquiring the token:\n' + error.errorMessage);
        this.loginStatus.next(false);
      }
      else if (response.tokenType === 'id_token') {
        console.log('MSAL ID token received, request access token');
        this.refreshAccessToken();
      }
      else if (response.tokenType === 'access_token') {
        console.log('MSAL access token received');
        this.loginStatus.next(true);
      }
    });
  }

  public login() {
    console.log('MSAL Login');
    if (this.clientApplication.getAccount()) {
      console.log('Login has account, refresh access token');
      this.refreshAccessToken();
    }
    else {
      console.log('Need account, get login');
      this.clientApplication.loginRedirect({
        scopes: tenantConfig.b2cScopes,
        authority: this.authority
      })
    }
  }

  public logout() {
    console.log('MSAL logout');
    this.clientApplication.logout();
    this.loginStatus.next(false);
  }

  protected refreshAccessToken() {
    console.log('MSAL request silent refresh');
    this.clientApplication.acquireTokenSilent({
      scopes: tenantConfig.b2cScopes,
      authority: this.authority
    })
      .then(response => {
          console.log('MSAL received silent token');
          this.loginStatus.next(true);
        })
      .catch(error => {
        console.log('Error access token (silent): ' + error);
        console.log('MSAL request redirect refresh');
        this.clientApplication.acquireTokenRedirect({
          scopes: tenantConfig.b2cScopes,
          authority: this.authority
        })
      });

  }

}
