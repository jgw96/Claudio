import {NavController, Page, Tabs, Platform} from 'ionic-angular';

import {HomePage} from '../home/home';
import {SettingsPage} from "../settings/settings";

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  
  public tab1Root: any;
  public tab3Root: any;
  public isMD: boolean;
  
  onPageLoaded() {
    if (this.platform.is("android") || this.platform.is("core")) {
      this.isMD = true;
    }
    else {
      this.isMD = false;
    }
  }

  constructor(public nav: NavController, private platform: Platform) {
    // set the root pages for each tab
    this.tab1Root = HomePage;
    this.tab3Root = SettingsPage;
  }

}
