import { Component } from '@angular/core';

import { Platform,NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Storage} from '@ionic/storage'
import { from } from 'rxjs';
import {OneSignal} from '@ionic-native/onesignal/ngx'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[OneSignal]
})
export class AppComponent {
  public rootPage: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage : Storage,
    private oneSignal : OneSignal,
    private navctrl : NavController
  ) {
    if(localStorage.getItem('uid') != null){
      this.rootPage = 'TabsPage'
    } else {
      this.rootPage = 'LoginPage'
    }
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((res) => {
      this.statusBar.styleBlackOpaque();
      this.statusBar.backgroundColorByHexString('#3E3D3B');
      this.splashScreen.hide();
      if(res == 'cordova') {
        this.oneSignal.startInit('e194af8d-50b1-4150-958d-afb0df854256', '300836949208')
        this.oneSignal.getIds().then((res : any)=>{
          this.storage.set('ids',res)
        }).catch(error =>{ });
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None)
        this.oneSignal.handleNotificationReceived().subscribe(()=>{
        });
        this.oneSignal.handleNotificationOpened().subscribe((res)=>{
          this.navctrl.navigateForward('NotificationPage')
        })
        this.oneSignal.endInit();
      }
    });
  }
}
