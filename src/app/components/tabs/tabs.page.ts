import { Component, OnInit } from '@angular/core';
import {NavController,Events} from '@ionic/angular';
//import {IonicPage} from '@';

//@IonicPage()
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  // home = 'HomePage';
  // notifications = 'NotificationPage';
  // search = 'SearchPage';
  // profile = 'UserProfilePage';
  home = 'home';

  notifications = 'notification';
  search = 'search';
  profile = 'user-profile';
  public notificationCount: number;
  constructor(
    private navCtrl: NavController,
    private events: Events
    ) { 
      this.getNotificationCount();
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (localStorage.getItem('uid') == null) {
      this.navCtrl.navigateRoot('LoginPage');
    }
  }

  getNotificationCount() {
    this.events.subscribe('notificationCount', count => {
      this.notificationCount = count;
    });
  }

}
