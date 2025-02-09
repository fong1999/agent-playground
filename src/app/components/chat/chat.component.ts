import { Component, OnInit } from '@angular/core';

declare const WebChat: any;  // Declaring WebChat globally

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatIframeUrl: string = 'https://your-copilot-studio-url'; // Replace with actual URL

  ngOnInit(): void {
    this.loadChatBot();
  }

  loadChatBot() {
    const directLine = WebChat.createDirectLine({
      token: '<your-direct-line-token>' // Replace with actual token
    });

    WebChat.renderWebChat(
      {
        directLine: directLine,
        userID: "You-customized-prefix" + Math.random().toString().substr(2, 8),
        styleOptions: { hideUploadButton: true }
      },
      document.getElementById('webchat')
    );
  }
}
