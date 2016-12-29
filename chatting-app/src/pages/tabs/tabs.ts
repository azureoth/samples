import { Component } from '@angular/core';

import { MessagesPage } from '../messages/messages';
import { AboutPage } from '../about/about';
import { ChannelsPage } from '../channels/channels';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MessagesPage;
  tab2Root: any = AboutPage;
  tab3Root: any = ChannelsPage;

  constructor() {

  }
}
