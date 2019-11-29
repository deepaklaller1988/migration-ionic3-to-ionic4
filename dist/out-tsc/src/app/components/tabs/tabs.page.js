import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
//import {IonicPage} from '@';
//@IonicPage()
let TabsPage = class TabsPage {
    constructor(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
        // home = 'HomePage';
        // notifications = 'NotificationPage';
        // search = 'SearchPage';
        // profile = 'UserProfilePage';
        this.home = 'home';
        this.notifications = 'home1';
        this.search = 'home2';
        this.profile = 'home3';
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
};
TabsPage = tslib_1.__decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: './tabs.page.html',
        styleUrls: ['./tabs.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        Events])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map