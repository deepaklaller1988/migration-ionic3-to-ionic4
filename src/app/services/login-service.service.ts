import { Injectable } from '@angular/core';
import {LoadingController, NavController, ToastController } from '@ionic/angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private afAuth : AngularFireAuth,private navCtrl :NavController,private toastCtrl : ToastController,
              private afire : AngularFirestore, private lodingCtrl : LoadingController, private storage : Storage) 
              { }

             async login(email, password) {
                let loader = await this.lodingCtrl.create({
                    message: 'Logging in...'
                });
                loader.present();
                this.storage.get('ids').then(ids => {
                    let oneSignalIds = (ids == null) ? { userId: 'noId', pushToken: 'noId' } : ids;
                    this.afAuth.auth.signInWithEmailAndPassword(email, password)
                        .then(res => {
                            console.log(res);
                            localStorage.setItem('uid', res.user.uid);
                            this.afire.collection('users').doc(res.user.uid).update({
                                lastLoginAt: Date.now(),
                                playerId: oneSignalIds.userId,
                                pushToken: oneSignalIds.pushToken
                            }).then(res => {
                                this.showToast('Login Successful!');
                                this.navCtrl.navigateRoot(["TabsPage", { tabsHideOnSubPages: true }]);
                                loader.dismiss();
                            }).catch(error => {
                                this.showToast(error.message);
                                loader.dismiss();
                            });
                        }).catch(error => {
                            this.showToast(error.message);
                            loader.dismiss();
                        });
                });
            }
        
            async showToast(message) {
                let toast = await this.toastCtrl.create({
                    message: message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }
}
