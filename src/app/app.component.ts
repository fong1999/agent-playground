import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  constructor(private msalService: MsalService) {
    const account = this.msalService.instance.getActiveAccount();
    if (!account) {
      this.msalService.loginRedirect();  // ✅ Redirect to login if not signed in
    }
  }
}
