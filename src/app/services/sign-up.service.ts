import { Injectable } from '@angular/core';
import {LoadingController, NavController, ToastController } from '@ionic/angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {Storage} from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

    //Any image url this will be set as a default profile pic until user do not set anyone
    private profilePic: string = 'https://firebasestorage.googleapis.com/v0/b/firestrore-ionic-social-app.appspot.com/o/profilePic.png?alt=media&token=1ec76018-b4a5-4eb9-b5cd-a3bf8d8a0b7e';

    constructor(private afAuth : AngularFireAuth,private navCtrl :NavController,private toastCtrl : ToastController,
      private afire : AngularFirestore, private lodingCtrl : LoadingController, private storage : Storage) 
      { }

      async registerUser(username, email, password, confirmPassword) {
      let loader = await this.lodingCtrl.create({
        message: 'Logging in...'
      });
        loader.present();
        if (password == confirmPassword) {
            this.storage.get('ids').then(ids => {
                let oneSignalIds = (ids == null) ? { userId: 'noId', pushToken: 'noId' } : ids;
                this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                    .then((res: any) => {
                        //res.uid replace res.user.uid
                        localStorage.setItem('uid', res.user.uid);
                        this.afire.collection('users').doc(res.user.uid).set({
                            createdAt: Date.now(),
                            lastLoginAt: Date.now(),
                            username: username.charAt(0).toUpperCase() + username.slice(1),
                            playerId: oneSignalIds.userId,
                            pushToken: oneSignalIds.pushToken,
                            email: email,
                            uid: res.user.uid,
                            profilePic: this.profilePic,
                            coverPic: null,
                            canDoMessage: false,  // default false so everybody can't do message
                        }).then(() => {
                            this.afire.collection('users').doc(res.user.uid).collection('profile').doc('detailedInfo').set({
                                username: username.charAt(0).toUpperCase() + username.slice(1),
                                email: email,
                                mobileNumber: res.user.phoneNumber,
                                phoneNumber: '',
                                about: '',
                                birthDate: '',
                                gender: '',
                                education: {
                                    qualification: '',
                                    University: '',
                                    profile: '',
                                    company: '',
                                },
                                currentAddress: {
                                    street: '',
                                    city: '',
                                    pincode: '',
                                    country: ''
                                },
                                permanentAddress: {
                                    street: '',
                                    city: '',
                                    pincode: '',
                                    country: ''
                                }
                            }).then();
                            this.showToast('Sign up Successful!');
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
            }).catch(error => {
                this.showToast(error.message);
                loader.dismiss();
            });
        } else {
            this.showToast('Confirm Password Doesn\'t match, Try again');
            loader.dismiss();
        }
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
