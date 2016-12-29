import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AlertController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { ChatService } from '../../chat.service';
import { MessagesPage } from '../messages/messages';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html'
})
export class ChannelsPage {

  channels = [];
  username = "";
  newChannel = "";

  constructor(public navCtrl: NavController, private http: Http, private service: ChatService, private alertCtrl: AlertController) {
    this.update();
  }

  openChannel(channelId: number) {
    if (!this.username) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'You need to set a username first',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    this.navCtrl.push(MessagesPage, {
      channelId: channelId,
      username: this.username
    });
  }

  createChannel() {
    let channel = {
      Name: this.newChannel
    };

    this.service.createChannel(channel).then(() => {
      this.update();
      this.newChannel = "";
    });
  }

  update() {
    this.service.getChannels()
      .subscribe(
      channels => this.channels = channels,
      err => {
        console.log(err);
      });
  }
}
