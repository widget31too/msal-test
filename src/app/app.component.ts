import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'msal-test';

  constructor(public auth: AuthService) {
  }

  public doLogout() {
    this.auth.logout();
  }
}
