import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  private chatData: any;

  constructor(private http: HttpClient) {
    this.loadChatData().subscribe(data => {
      this.chatData = data;
    });
  }

  loadChatData(): Observable<any> {
    return this.http.get('assets/responses-data.json');
  }

  getResponse(message: string): string {
    if (!this.chatData) {
      return "I'm sorry, I don't have enough data right now. Please try again later.";
    }

    const intents = this.chatData.intents;
    for (let intent of intents) {
      for (let pattern of intent.patterns) {
        const regex = new RegExp(pattern, 'i');
        if (regex.test(message)) {
          const responses = intent.responses;
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }
    return "I'm sorry, I don't understand that.";
  }

}

