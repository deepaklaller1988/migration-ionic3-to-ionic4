(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-post-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/post/post.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/post/post.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"post-content\">\n  <ion-card class=\"post-header\" *ngIf=\"loggedinUserInfo | async as userInfo\" (click)=\"goToProfile()\">\n    <ion-item>\n      <ion-avatar item-left>\n        <img src=\"{{userInfo?.profilePicThumb? userInfo.profilePicThumb: userInfo.profilePic}}\">\n      </ion-avatar>\n      <div class=\"user-name\">{{userInfo?.username}}</div>\n    </ion-item>\n  </ion-card>\n  <!-- homer header -->\n\n  <ion-card class=\"home-post\" *ngIf=\"isSharedPost\">\n    <ion-item (click)=\"userDetails(post?.postedBy)\">\n      <ion-avatar item-start>\n        <img src=\"{{post?.profilePicThumb? post.profilePicThumb : post.profilePic}}\">\n      </ion-avatar>\n      <h2 *ngIf=\"post?.postOf | async as postOf\" class=\"user-name\">{{postOf?.username}}</h2>\n      <p class=\"publish-date\">{{post?.createdAt | amTimeAgo }}</p>\n    </ion-item>\n    <img *ngIf=\"post?.isImgPost\" src=\"{{post?.postPicThumb? post.postPicThumb: post.postPic}}\" class=\"big-image\">\n    <p class=\"description\">{{post?.postText}}</p>\n  </ion-card>\n\n  <ion-card class=\"other-option\" (click)=\"onClickOption()\">\n    <button ion-item type=\"button\" *ngIf=\"!isSharedPost\">\n      <ion-icon name=\"heart\" item-left></ion-icon>\n      Status\n    </button>\n    <div class=\"upload-item-wrapper\" *ngIf=\"!isSharedPost\">\n      <button type=\"button\" ion-item class=\"upload-item\">\n        <ion-icon name=\"images\" item-left></ion-icon>\n        Photo\n      </button>\n      <input type=\"file\" id=\"inputFileId\" accept=\"image/*\" (change)=\"selectImage($event)\">\n    </div>\n    <!-- <button ion-item type=\"button\" *ngIf=\"!isSharedPost\">\n      <ion-icon name=\"navigate\" item-left></ion-icon>\n      Checkin\n    </button> -->\n    <ion-item class=\"input-item\" *ngIf=\"showTextArea\">\n      <ion-textarea placeholder=\"What's on your mind?\" [(ngModel)]=\"postText\">\n      </ion-textarea>\n    </ion-item>\n    <img *ngIf=\"localImgUrl\" src=\"{{localImgUrl}}\" width=\"300\">\n    <div class=\"text-right\">\n      <button type=\"button\" ion-button class=\"btn-post\" *ngIf=\"!isImgPost\" [disabled]=\"!postText\" (click)=\"postStatus()\">Post</button>\n      <button type=\"button\" ion-button class=\"btn-post\" *ngIf=\"isImgPost\" (click)=\"postStatus()\">Post</button>\n    </div>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/components/post/post.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/post/post.module.ts ***!
  \************************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post.page */ "./src/app/components/post/post.page.ts");








const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_7__["PostPage"]
    }
];
let PostPageModule = class PostPageModule {
};
PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_7__["PostPage"]]
    })
], PostPageModule);



/***/ }),

/***/ "./src/app/components/post/post.page.scss":
/*!************************************************!*\
  !*** ./src/app/components/post/post.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/post/post.page.ts":
/*!**********************************************!*\
  !*** ./src/app/components/post/post.page.ts ***!
  \**********************************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







let PostPage = class PostPage {
    //to get post via params if it's shared post
    constructor(navCtrl, 
    // private navParams: NavParams,  // IN ionic 4  not working
    router, route, postService, loadingCtrl, toastCtrl, homeService) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.postService = postService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.homeService = homeService;
        this.showTextArea = false;
        this.isSharedPost = false;
        this.isImgPost = false;
        this.uid = localStorage.getItem('uid');
        this.post = this.route.snapshot.queryParams['post'];
        console.log('aaaaaaaaaaaaaa', this.post.postOf);
        if (this.post) {
            this.post.postOf = this.homeService.getUserInfo(this.post.postedBy).valueChanges();
            console.log("LLLLLLLLLLL", this.post.postOf);
            this.playerId = this.post.playerId;
            this.showTextArea = true;
            this.isSharedPost = true;
            if (this.post.isImgPost) {
                this.isImgPost = true;
            }
        }
        else {
            this.playerId = 'noId';
        }
    }
    ngOnInit() {
    }
    //to get user info on ViewWillEnteer
    ionViewWillEnter() {
        this.loggedinUserInfo = this.homeService.getUserInfo(this.uid).valueChanges();
    }
    //to show text area
    onClickOption() {
        this.showTextArea = true;
    }
    // to select between shared or new post
    postStatus() {
        if (this.isSharedPost) {
            this.postSharedStatus();
        }
        else {
            this.postNewStatus();
        }
    }
    //to update shared post info on sharedby collection
    submitPostSharedList() {
        this.postService.submitPostSharedList(this.post.postId, this.uid).then();
    }
    //to store post as a shared post
    postSharedStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loadingCtrl.create({
                message: 'Sharing Status...'
            });
            loader.present();
            if (this.post.isImgPost) {
                this.postService.storeStatusDetails(this.loggedinUserInfo.username, this.playerId, this.post.postText, this.post.isImgPost, this.isSharedPost, this.post.postPic, this.postText, this.post.postedBy, this.post.postId, this.uid, this.post.postPicThumb)
                    .then(res => {
                    this.submitPostSharedList();
                    this.showToast('Image status has been Shared!');
                    this.navCtrl.pop();
                    loader.dismiss();
                })
                    .catch(error => {
                    this.showToast(error.message);
                    loader.dismiss();
                });
            }
            else {
                this.postService.storeStatusDetails(this.loggedinUserInfo.username, this.playerId, this.post.postText, this.post.isImgPost, this.isSharedPost, null, this.postText, this.post.postedBy, this.post.postId, this.uid, this.post.postPicThumb)
                    .then(res => {
                    this.submitPostSharedList();
                    this.showToast('Status has been shared!');
                    this.navCtrl.pop();
                    loader.dismiss();
                })
                    .catch(error => {
                    this.showToast(error.message);
                    loader.dismiss();
                });
            }
        });
    }
    //to store new post with or without image
    postNewStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loadingCtrl.create({
                message: 'Posting Your Status...'
            });
            loader.present();
            if (this.isImgPost) {
                let storageRef = firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref();
                let file = document.getElementById('inputFileId').files[0];
                let imageName = Date.now().toString() + file.name;
                storageRef.child('users/' + this.uid + '/posts/' + imageName)
                    .put(file, { contentType: 'image/*' })
                    .then(res => {
                    storageRef.child('users/' + this.uid + '/posts/' + imageName).getDownloadURL()
                        .then(url => {
                        this.postPic = url;
                        setTimeout(() => {
                            storageRef.child('thumb/users/' + this.uid + '/posts/' + 'thumb_' + imageName).getDownloadURL().then((thumbUrl) => {
                                this.postService.storeStatusDetails(this.loggedinUserInfo.username, this.playerId, this.postText, this.isImgPost, this.isSharedPost, this.postPic, null, null, null, this.uid, thumbUrl)
                                    .then(res => {
                                    this.showToast('Image status has been posted!');
                                    this.navCtrl.pop();
                                    loader.dismiss();
                                })
                                    .catch(error => {
                                    this.showToast(error.message);
                                    loader.dismiss();
                                });
                            }).catch(error => {
                                this.showToast(error.message);
                            });
                        }, 7000);
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
                this.postService.storeStatusDetails(this.loggedinUserInfo.username, this.playerId, this.postText, this.isImgPost, this.isSharedPost, null, null, null, null, this.uid, null)
                    .then(res => {
                    this.showToast('Status has been posted!');
                    this.navCtrl.pop();
                    loader.dismiss();
                })
                    .catch(error => {
                    this.showToast(error.message);
                    loader.dismiss();
                });
            }
        });
    }
    //selected image will be taken as localImgUrl
    selectImage(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event) => {
                this.localImgUrl = event.target.result;
                this.isImgPost = true;
            };
            reader.readAsDataURL(event.target.files[0]);
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
    goToProfile() {
        this.navCtrl.navigateRoot("UserProfilePage");
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
PostPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] }
];
PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: __webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/post/post.page.html"),
        styles: [__webpack_require__(/*! ./post.page.scss */ "./src/app/components/post/post.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
], PostPage);



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pushnotification_servics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pushnotification.servics */ "./src/app/services/pushnotification.servics.ts");




let PostService = class PostService {
    constructor(afService, pushNotificationService) {
        this.afService = afService;
        this.pushNotificationService = pushNotificationService;
        this.appId = 'e194af8d-50b1-4150-958d-afb0df854256';
        this.users = this.afService.collection('users');
        this.posts = this.afService.collection('posts');
    }
    submitPostSharedList(postId, uid) {
        return this.posts.doc(postId).collection('sharedBy').add({
            createdAt: Date.now(),
            type: 'share',
            sharedBy: uid
        });
    }
    storeStatusDetails(username, playerId, postText = null, isImgPost, isSharedPost, postPic, oldPostText = null, whosePost, postId, uid, thumbUrl) {
        return this.posts.add({
            createdAt: Date.now(),
            postText: postText,
            oldPostText: oldPostText,
            isImgPost: isImgPost,
            isSharedPost: isSharedPost,
            postPic: postPic,
            whosePost: whosePost,
            postedBy: uid,
            postPicThumb: thumbUrl
        }).then(res => {
            if (isSharedPost) {
                if (whosePost) {
                    if ((uid != whosePost)) {
                        this.users.doc(whosePost).collection('notifications').doc(postId + '-' + uid).set({
                            createdAt: Date.now(),
                            event: 'shared',
                            uid: uid,
                            postId: postId,
                            read: false
                        }).then(() => {
                            if (playerId != 'noId') {
                                let message = {
                                    app_id: this.appId,
                                    contents: { "en": username + ' shared your post' },
                                    include_player_ids: [playerId]
                                };
                                this.pushNotificationService.sendNotification(message).subscribe(res => { });
                            }
                        });
                    }
                }
            }
        });
    }
};
PostService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _pushnotification_servics__WEBPACK_IMPORTED_MODULE_3__["PushNotificationService"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _pushnotification_servics__WEBPACK_IMPORTED_MODULE_3__["PushNotificationService"]])
], PostService);



/***/ })

}]);
//# sourceMappingURL=components-post-post-module-es2015.js.map