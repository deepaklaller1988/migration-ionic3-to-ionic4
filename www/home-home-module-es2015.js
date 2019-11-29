(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar hideBackButton color=\"primary\">\n        <ion-buttons slot=\"start\" menuToggle>\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n          </ion-buttons>\n        <ion-title class=\"ion-text-center\">Timeline</ion-title>\n       <ion-buttons slot=\"end\">\n          <ion-button icon-only (click)=\"goToMessage()\">\n            <ion-icon name=\"chatboxes\"></ion-icon>\n            <ion-badge item-right>{{msgCount>0?'New':''}}</ion-badge>\n          </ion-button>\n        </ion-buttons> \n    </ion-toolbar>\n  </ion-header>\n<ion-content class=\"home-content\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh(uid, $event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card class=\"home-header\">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src=\"{{loggedinUserInfo?.profilePicThumb ? loggedinUserInfo?.profilePicThumb : loggedinUserInfo?.profilePic}}\" (click)=\"goToProfile()\">\n      </ion-avatar>\n      <p (click)=\"goToPostPage()\">What's in your mind ? {{loggedinUserInfo?.username}}</p>\n    </ion-item>\n  </ion-card>\n  <!-- homer header -->\n\n  <!-- home-post -->\n\n\n  <ion-item *ngIf=\"isPostsNotAvailable\">\n    <p>No posts are there. Start following user to see their post.</p>\n  </ion-item>\n  <ion-card class=\"home-post\" *ngFor=\"let post of followedUsersPost | async\">\n    <div *ngIf=\"post.postOf | async as postOf\">\n      <ion-item>\n        <ion-avatar item-start>\n          <img (click)=\"userDetails(post?.postedBy)\" src=\"{{postOf?.profilePicThumb ? postOf?.profilePicThumb : postOf?.profilePic}}\">\n        </ion-avatar>\n        <h2 class=\"user-name\">\n          <span (click)=\"userDetails(post?.postedBy)\">{{postOf.username}} </span>\n          <span class=\"shared\" *ngIf=\"post?.isSharedPost\">&nbsp; shared &nbsp;\n            <span class=\"shared-name\" *ngIf=\"post?.whosePostInfo | async as whosePostInfo\" (click)=\"userDetails(post?.whosePost)\">{{whosePostInfo.username}}'s </span> post. </span>\n        </h2>\n        <p class=\"publish-date\">{{post?.createdAt | amTimeAgo }}</p> \n      </ion-item>\n      <img *ngIf=\"post?.isImgPost\" src=\"{{post?.postPicThumb ? post.postPicThumb : post.postPic}}\" (click)=\"goToCommentPage(post)\"\n        class=\"big-image\">\n      <p class=\"description\" (click)=\"goToCommentPage(post)\">{{post?.postText}}</p>\n      <hr *ngIf=\"post?.isSharedPost\">\n      <p class=\"description\" *ngIf=\"post?.isSharedPost\" (click)=\"goToCommentPage(post)\">{{post?.oldPostText}}</p>\n\n      <ion-row class=\"counter-row\">\n        <ion-col *ngIf=\"post?.likedBy | async as likedBy\" (click)=\"goToUserList(likedBy)\">\n          <button ion-button icon-left clear small class=\"footer-btn\">\n            {{likedBy.length}} &nbsp;&nbsp;\n            <ion-icon class=\"heart-2\" name=\"thumbs-up\"></ion-icon>\n          </button>\n        </ion-col>\n\n        <ion-col *ngIf=\"post?.commentedBy | async as commentedBy\" (click)=\"goToUserList(commentedBy)\">\n          <button ion-button icon-left clear small class=\"footer-btn\">\n            {{commentedBy.length}} &nbsp;&nbsp;\n            <ion-icon name=\"chatbubbles\"></ion-icon>\n          </button>\n        </ion-col>\n\n        <ion-col *ngIf=\"post?.sharedBy | async as sharedBy\" (click)=\"goToUserList(sharedBy)\">\n          <button ion-button icon-left clear small class=\"footer-btn\">\n            {{sharedBy.length}} &nbsp;&nbsp;\n            <ion-icon name=\"share-alt\"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <!-- foooter row with buttons likes comment and share  -->\n      <ion-row class=\"footer-row\">\n        <ion-col class=\"ion-no-padding\" chatbubbles-center>\n          <button ion-button icon-left clear small class=\"footer-btn\" *ngIf=\"post?.liked | async as liked\" [ngClass]=\"{like: liked.length==1}\"\n            (click)=\"likePost(post, liked.length==1, postOf.playerId)\">\n            <ion-icon name=\"heart\"></ion-icon>&nbsp;&nbsp; {{liked.length==1?'Unlike':'Like'}}\n          </button>\n        </ion-col>\n        <!-- photo button -->\n        <ion-col class=\"ion-no-padding\" chatbubbles-center>\n          <button ion-button icon-left clear small class=\"footer-btn\" (click)=\"goToCommentPage(post)\">\n            <ion-icon name=\"chatbubbles\"></ion-icon>&nbsp;&nbsp; Comment\n          </button>\n        </ion-col>\n        <!-- check-in button -->\n        <ion-col class=\"ion-no-padding\" chatbubbles-center>\n          <button ion-button icon-left clear small class=\"footer-btn last\" (click)=\"goToPostPage(post, postOf)\">\n            <ion-icon name=\"share-alt\"></ion-icon>&nbsp;&nbsp; Share\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- footer row -->\n  </ion-card>\n  <!-- homer post -->\n\n</ion-content>\n<!-- home content  -->\n\n<ion-fab bottom right (click)=\"goToPostPage()\">\n  <button ion-fab>\n    <ion-icon name=\"add\"></ion-icon>\n  </button>\n</ion-fab>"

/***/ }),

/***/ "./src/app/components/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/components/home/home.page.ts");








const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_6__["MomentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/components/home/home.page.scss":
/*!************************************************!*\
  !*** ./src/app/components/home/home.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/home/home.page.ts":
/*!**********************************************!*\
  !*** ./src/app/components/home/home.page.ts ***!
  \**********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






//import 'rxjs/add/operator/take';
//@IonicPage()
let HomePage = class HomePage {
    constructor(navCtrl, loadingCtrl, homeService, toastCtrl, events, router) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.homeService = homeService;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.router = router;
        this.msgCount = 0;
        this.isPostsNotAvailable = false;
        this.construfun();
    }
    //nnnnnn
    ngOnInit() {
    }
    construfun() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.uid = localStorage.getItem('uid');
            let loader = yield this.loadingCtrl.create({
                message: 'Preparing! Please wait...'
            });
            loader.present();
            this.homeService.getUserInfo(this.uid).valueChanges().subscribe(res => {
                this.loggedinUserInfo = res;
                this.getFollowedUsersPost(this.uid);
                loader.dismiss();
            }, error => {
                this.navCtrl.navigateRoot(['LoginPage', { tabsHideOnSubPages: true }]);
            });
        });
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
    doRefresh(uid, refresher) {
        this.getFollowedUsersPost(uid, refresher);
    }
    ionViewWillEnter() {
        if (localStorage.getItem('uid') == null) {
            this.navCtrl.navigateRoot(['LoginPage', { tabsHideOnSubPages: true }]);
        }
        else {
            this.uid = localStorage.getItem('uid');
            this.getUnreadMessageCount();
            this.homeService.getNotificationCount(localStorage.getItem('uid')).valueChanges()
                .subscribe(res => {
                this.events.publish('notificationCount', res.length);
            });
        }
    }
    getUnreadMessageCount() {
        this.homeService.getMessageCount(this.uid).valueChanges().subscribe(items => {
            return items.map((item) => {
                this.msgCount = 0;
                const chatId = item.chatId;
                delete item.chatId;
                delete item[this.uid];
                delete item['createdAt'];
                const keys = Object.keys(item);
                const receiverId = keys[0];
                this.homeService.getUnreadMessageCount(chatId, receiverId).valueChanges().subscribe((res) => {
                    if (res.length > 0) {
                        this.msgCount = 1;
                    }
                });
            });
        });
    }
    getFollowedUsersPost(uid, refresher) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.followedUsersPost = yield this.homeService.getPosts(uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((items) => {
                if (items.message) {
                    this.isPostsNotAvailable = true;
                }
                else {
                    return items.map((item) => {
                        const postId = item.postId;
                        let data = item;
                        data.liked = this.homeService.checkIsLiked(postId, this.uid).valueChanges();
                        data.postOf = this.homeService.getUserInfo(data.postedBy).valueChanges();
                        data.likedBy = this.homeService.getLikes(postId).valueChanges();
                        data.commentedBy = this.homeService.getComments(postId).valueChanges();
                        data.sharedBy = this.homeService.getShares(postId).valueChanges();
                        if (data.isSharedPost) {
                            data.whosePostInfo = this.homeService.getUserInfo(data.whosePost).valueChanges();
                        }
                        return Object.assign({ postId }, data);
                    });
                }
            }));
            if (refresher) {
                refresher.complete();
            }
        });
    }
    likePost(post, liked, playerId) {
        if (liked) {
            this.homeService.unlikePost(post.postId, this.uid).then();
        }
        else {
            this.homeService.likePost(this.loggedinUserInfo.username, playerId, post.postId, post.postedBy, this.uid).then();
        }
    }
    goToProfile() {
        this.navCtrl.navigateRoot("UserProfilePage");
    }
    goToMessage() {
        this.navCtrl.navigateRoot("message");
    }
    goToCommentPage(post) {
        this.navCtrl.navigateRoot(["CommentsPage", { post: post }]);
    }
    goToUserList(users) {
        this.navCtrl.navigateRoot(["UserListPage", { users: users }]);
    }
    goToPostPage(post, postOf) {
        if (post) {
            console.log(post);
            post.playerId = postOf.playerId;
            post.profilePic = postOf.profilePic;
            let navigationExtras = {
                queryParams: {
                    post: JSON.stringify(post)
                }
            };
            this.router.navigate(['post'], navigationExtras);
        }
        else {
            this.router.navigate(['post']);
        }
    }
    userDetails(uid) {
        if (uid == this.uid) {
            this.goToProfile();
        }
        else {
            this.navCtrl.navigateRoot(["OthersProfilePage", { uid: uid }]);
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/components/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomePage);



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



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map