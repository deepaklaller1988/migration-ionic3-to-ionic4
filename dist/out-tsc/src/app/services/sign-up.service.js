import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';
let SignUpService = class SignUpService {
    constructor(afAuth, navCtrl, toastCtrl, afire, lodingCtrl, storage) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.afire = afire;
        this.lodingCtrl = lodingCtrl;
        this.storage = storage;
        //Any image url this will be set as a default profile pic until user do not set anyone
        this.profilePic = 'https://firebasestorage.googleapis.com/v0/b/firestrore-ionic-social-app.appspot.com/o/profilePic.png?alt=media&token=1ec76018-b4a5-4eb9-b5cd-a3bf8d8a0b7e';
    }
    registerUser(username, email, password, confirmPassword) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let loader = yield this.lodingCtrl.create({
                message: 'Logging in...'
            });
            loader.present();
            if (password == confirmPassword) {
                this.storage.get('ids').then(ids => {
                    let oneSignalIds = (ids == null) ? { userId: 'noId', pushToken: 'noId' } : ids;
                    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                        .then((res) => {
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
                            canDoMessage: false,
                        }).then(() => {
                            this.afire.collection('users').doc(res.user.uid).collection('profile').doc('detailedInfo').set({
                                username: username.charAt(0).toUpperCase() + username.slice(1),
                                email: email,
                                mobileNumber: res.phoneNumber,
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
            }
            else {
                this.showToast('Confirm Password Doesn\'t match, Try again');
                loader.dismiss();
            }
        });
    }
    showToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
SignUpService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth, NavController, ToastController,
        AngularFirestore, LoadingController, Storage])
], SignUpService);
export { SignUpService };
//# sourceMappingURL=sign-up.service.js.map