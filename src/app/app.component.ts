import { Component } from '@angular/core';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatbot';

constructor(public dialog: MatDialog){

}

  onSendMessage() {
    this.dialog.open(ChatBotComponent)
   
  }
}
