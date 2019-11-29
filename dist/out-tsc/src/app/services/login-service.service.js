import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';
let LoginServiceService = class LoginServiceService {
    constructor(afAuth, navCtrl, toastCtrl, afire, lodingCtrl, storage) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.afire = afire;
        this.lodingCtrl = lodingCtrl;
        this.storage = storage;
    }
    login(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let loader = yield this.lodingCtrl.create({
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
LoginServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth, NavController, ToastController,
        AngularFirestore, LoadingController, Storage])
], LoginServiceService);
export { LoginServiceService };
//# sourceMappingURL=login-service.service.js.map