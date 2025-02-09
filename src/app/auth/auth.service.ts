import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private msalService: MsalService) {}

  login() {
    this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);
    });
  }

  logout() {
    this.msalService.logoutPopup();
  }

  getUser() {
    return this.msalService.instance.getActiveAccount();
  }
}
