import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: false
})
export class ChatComponent implements OnInit {
  userName: string = 'Not logged in';

  constructor(private msalService: MsalService) {}

  ngOnInit(): void {
    const account = this.msalService.instance.getActiveAccount();
    if (account) {
      this.userName = `Currently logged in as ${account.username}`;
    }
  }
}
