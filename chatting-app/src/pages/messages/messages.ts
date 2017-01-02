import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {
  channelId = 1;
  text = "";
  username = "";
  messages = [];

  constructor(public navCtrl: NavController, private navParams: NavParams, private service: ChatService) {
    this.channelId = navParams.get('channelId');
    this.username = navParams.get('username');
    this.update();
  }

  send() {
    let message = {
      FromUser: this.username,
      TextContent: this.text,
      Channels_Id_Messages: this.channelId
    };

    this.service.sendMessage(message).then(() => {
      this.update();
      this.text = "";
    });
  }

  update() {
    this.service.getMessages(this.channelId)
      .subscribe(
      messages => this.messages = messages,
      console.log);
  }
}
