import { Component } from '@angular/core';
import { ChatBotService } from '../services/chat-bot.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
  userInput: string = '';
  messages: { text: string, user: boolean }[] = [];
  isDataLoaded: boolean = false;

  constructor(private chatService: ChatBotService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.chatService.loadChatData().subscribe(() => {
      this.isDataLoaded = true;
    });

  }

  onMessageclose(){
this.dialog.closeAll()
  }
  sendMessage() {
    if (this.userInput.trim() !== '' && this.isDataLoaded) {
      this.messages.push({ text: this.userInput, user: true });
      const botResponse = this.chatService.getResponse(this.userInput);
      this.messages.push({ text: botResponse, user: false });
      this.userInput = '';
    } else if (!this.isDataLoaded) {
      this.messages.push({ text: "Data is still loading. Please wait.", user: false });
    }
  }

}
