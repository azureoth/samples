import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ChannelsPage } from '../pages/channels/channels';
import { MessagesPage } from '../pages/messages/messages';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatService } from '../chat.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ChannelsPage,
    MessagesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ChannelsPage,
    MessagesPage,
    TabsPage
  ],
  providers: [ChatService]
})
export class AppModule {}
