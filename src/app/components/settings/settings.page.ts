import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import { async } from 'q';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public canDoMessage: boolean = false;
  public allowPushNoti: boolean = true;
  private uid: string;
  private users: AngularFirestoreDocument<{}>;

  constructor(public navCtrl: NavController,
    private afService: AngularFirestore,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth) {
    
  }

  ngOnInit() {
  }
  async constructorfn(){
    this.uid = localStorage.getItem('uid');
    this.users = this.afService.collection('users').doc(this.uid);
    let loader = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    loader.present();
    this.users.valueChanges()
      .subscribe((res: any) => {
        this.canDoMessage = res.canDoMessage;
        loader.dismiss();
      }, error => {
        loader.dismiss();
      });
  }
  async allowMessageFromAnyOne() {
    let loader = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.users.update({ canDoMessage: this.canDoMessage })
      .then(() => {
        loader.dismiss();
      }).catch(error => {
        loader.dismiss();
      });
  }

  allowPushNotification() {
    this.storage.set('allowPushNoti', this.allowPushNoti).then(() => {
      if (!this.allowPushNoti) {
        this.users.update({
          playerId: 'noId',
          pushToken: 'noId'
        });
      } else {
        this.storage.get('ids').then(ids => {
          if (ids.pushToken) {
            this.users.update({
              playerId: ids.userId,
              pushToken: ids.pushToken
            });
          }
        });
      }
    });
  }

  async goToLogout() {
    let loader = await this.loadingCtrl.create({
      message: 'Logging out...'
    });
    loader.present();
    this.afService.collection('users').doc(this.uid).update({
      playerId: 'noId',
      pushToken: 'noId'
    }).then(() => {
      this.afAuth.auth.signOut().then(() => {
        localStorage.clear();
        this.navCtrl.navigateRoot(["login", { tabsHideOnSubPages: true }]);
        loader.dismiss();
      }).catch(error => {
        loader.dismiss();
      });
    }).catch(error => {
      loader.dismiss();
    });
  }

  ionViewWillEnter() {
    if (localStorage.getItem('uid') == null) {
      this.navCtrl.navigateRoot(['login', { tabsHideOnSubPages: true }]);
    }
  }

  goToChangePassword() {
    this.navCtrl.navigateRoot("change-password");
  }
  goToBlockedList() {
    this.navCtrl.navigateRoot("blocked-list");
  }

}
