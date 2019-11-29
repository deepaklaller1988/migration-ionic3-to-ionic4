(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/notification/notification.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/notification/notification.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title class=\"ion-text-center\" >Notifications</ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-button (click)=\"markAllAsRead()\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"notifications-content\">\n    <div *ngIf=\"notifications | async as notifications\">\n      <ion-item *ngIf=\"notifications?.length==0\">\n        <p>No unread notifications.!</p>\n      </ion-item>\n    </div>\n    <span *ngFor=\"let notification of notifications | async\">\n      <ion-item *ngIf=\"notification?.userInfo | async as userInfo\" class=\"item\" (click)=\"goToCommentPage(notification)\">\n        <ion-avatar item-left>\n          <img src=\"{{userInfo?.profilePicThumb ? userInfo.profilePicThumb : userInfo.profilePic}}\" class=\"img-avatar\">\n        </ion-avatar>\n        <p>{{userInfo.username}}&nbsp;{{notification.event}}&nbsp;your post.</p>\n        <ion-note class=\"time\">{{notification.createdAt | amTimeAgo }}</ion-note>\n      </ion-item>\n    </span>\n  </ion-content>\n  <ion-fab bottom right (click)=\"goToPostPage()\">\n    <button ion-fab>\n      <ion-icon name=\"add\"></ion-icon>\n    </button>\n  </ion-fab>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/notification/notification.module.ts ***!
  \****************************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification.page */ "./src/app/components/notification/notification.page.ts");








const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_7__["NotificationPage"]
    }
];
let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_7__["NotificationPage"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "./src/app/components/notification/notification.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/notification/notification.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/notification/notification.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/notification/notification.page.ts ***!
  \**************************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let NotificationPage = class NotificationPage {
    constructor(navCtrl, notificationService, loadingCtrl, homeService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.notificationService = notificationService;
        this.loadingCtrl = loadingCtrl;
        this.homeService = homeService;
        this.toastCtrl = toastCtrl;
        this.constructorfn();
    }
    ngOnInit() {
    }
    constructorfn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.uid = localStorage.getItem('uid');
            let loader = yield this.loadingCtrl.create({
                message: 'Getting Notifications...'
            });
            loader.present().then(() => {
                this.notifications = this.notificationService.getNotifications(this.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(items => {
                    return items.map((item) => {
                        item.userInfo = this.notificationService.userInfo(item.uid).valueChanges();
                        return Object.assign({}, item);
                    });
                }));
            }).then(() => {
                loader.dismiss();
            });
        });
    }
    goToCommentPage(notification) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            loader.present();
            this.notificationService.getSinglePost(notification.postId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((item) => {
                if (item) {
                    let data = item;
                    let postId = notification.postId;
                    data.liked = this.homeService.checkIsLiked(postId, this.uid).valueChanges();
                    data.postOf = this.homeService.getUserInfo(data.postedBy).valueChanges();
                    data.likedBy = this.homeService.getLikes(postId).valueChanges();
                    data.commentedBy = this.homeService.getComments(postId).valueChanges();
                    data.sharedBy = this.homeService.getShares(postId).valueChanges();
                    if (data.isSharedPost) {
                        data.whosePostInfo = this.homeService.getUserInfo(data.whosePost).valueChanges();
                    }
                    return Object.assign({ postId }, data);
                }
                else {
                    this.notificationService.markAsRead(notification.postId, this.uid, notification.uid);
                    this.showToast('Post was removed');
                }
            })).subscribe((res) => {
                if (res) {
                    this.notificationService.markAsRead(res.postId, this.uid, notification.uid);
                    loader.dismiss();
                    this.navCtrl.navigateRoot(["home", { post: res }]);
                }
                else {
                    loader.dismiss();
                }
            });
        });
    }
    markAllAsRead() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loadingCtrl.create({
                message: 'Marking all as read...'
            });
            loader.present().then(() => {
                this.notificationService.getNotifications(this.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(items => {
                    return items.map((item) => {
                        this.notificationService.markAllAsRead(item, this.uid).then();
                    });
                })).subscribe();
            }).then(() => {
                loader.dismiss();
            });
        });
    }
    goToPostPage(post, postOf) {
        if (post) {
            post.playerId = postOf.playerId;
            post.profilePic = postOf.profilePic;
            this.navCtrl.navigateRoot(["PostPage", { post: post }]);
        }
        else {
            this.navCtrl.navigateRoot("PostPage");
        }
    }
    showToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
NotificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(/*! raw-loader!./notification.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/notification/notification.page.html"),
        styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/components/notification/notification.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], NotificationPage);



/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_pushnotification_servics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pushnotification.servics */ "./src/app/services/pushnotification.servics.ts");





let HomeService = class HomeService {
    constructor(afService, pushNotiService, http) {
        this.afService = afService;
        this.pushNotiService = pushNotiService;
        this.http = http;
        this.appId = "e194af8d-50b1-4150-958d-afb0df854256";
        this.baseUrl = 'https://us-central1-firestrore-ionic-social-app.cloudfunctions.net/followingPosts/';
        this.users = afService.collection('users');
        this.posts = afService.collection('posts');
        this.chats = afService.collection('chats');
    }
    getUserInfo(uid) {
        console.log(">>>>>>>>>", this.users.doc(uid));
        return this.users.doc(uid);
    }
    getPosts(uid) {
        return this.http.get(this.baseUrl + uid);
    }
    checkIsLiked(postId, uid) {
        return this.posts.doc(postId).collection('likedBy', ref => ref.where('likedBy', '==', uid));
    }
    getLikes(postId) {
        return this.posts.doc(postId).collection('likedBy');
    }
    getComments(postId) {
        return this.posts.doc(postId).collection('commentedBy');
    }
    getShares(postId) {
        return this.posts.doc(postId).collection('sharedBy');
    }
    unlikePost(postId, likeId) {
        return this.posts.doc(postId).collection('likedBy').doc(likeId).delete();
    }
    likePost(username, playerId, postId, uid, luid) {
        return this.posts.doc(postId).collection('likedBy').doc(luid).set({
            createdAt: Date.now(),
            type: 'like',
            likedBy: luid
        }).then(res => {
            if ((luid != uid)) {
                this.users.doc(uid).collection('notifications').doc(postId + '-' + luid).set({
                    createdAt: Date.now(),
                    event: 'liked',
                    uid: luid,
                    postId: postId,
                    read: false
                }).then(() => {
                    if (playerId != 'noId') {
                        let message = {
                            app_id: this.appId,
                            contents: { "en": username + ' liked your post' },
                            include_player_ids: [playerId]
                        };
                        this.pushNotiService.sendNotification(message).subscribe(res => { });
                    }
                });
            }
        });
    }
    getMessageCount(uid) {
        return this.afService.collection('chats', ref => ref.where(uid, '==', uid));
    }
    getUnreadMessageCount(chatId, uid) {
        return this.chats.doc(chatId).collection('messages', ref => ref.where('unread', '==', true).where('uid', '==', uid));
    }
    getNotificationCount(uid) {
        return this.users.doc(uid).collection('notifications');
    }
};
HomeService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _services_pushnotification_servics__WEBPACK_IMPORTED_MODULE_4__["PushNotificationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _services_pushnotification_servics__WEBPACK_IMPORTED_MODULE_4__["PushNotificationService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HomeService);



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



let NotificationService = class NotificationService {
    constructor(afService) {
        this.users = afService.collection('users');
        this.posts = afService.collection('posts');
    }
    getNotifications(uid) {
        return this.users.doc(uid).collection('notifications', ref => ref.orderBy('createdAt', 'desc'));
    }
    userInfo(uid) {
        return this.users.doc(uid);
    }
    getSinglePost(postId) {
        return this.posts.doc(postId);
    }
    markAsRead(postId, luid, ouid) {
        return this.users.doc(luid).collection('notifications').doc(postId + '-' + ouid).delete();
    }
    markAllAsRead(item, uid) {
        return this.users.doc(uid).collection('notifications').doc(item.postId + '-' + item.uid).delete();
    }
};
NotificationService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], NotificationService);



/***/ })

}]);
//# sourceMappingURL=notification-notification-module-es2015.js.map