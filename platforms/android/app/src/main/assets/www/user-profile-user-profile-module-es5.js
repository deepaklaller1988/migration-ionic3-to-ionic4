(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/user-profile.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-profile/user-profile.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Profile</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)=\"goToSettings()\">\n          <ion-icon name=\"settings\"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"profile-content\">\n    <div *ngIf=\"loggedinUserinfo | async as userInfo\">\n      <div class=\"profile-header\">\n        <div class=\"bg-overlay\"></div>\n        <div class=\"header-wrapper\">\n          <img src=\"{{userInfo?.coverPicThumb ? userInfo?.coverPicThumb: userInfo.coverPic? userInfo.coverPic : 'assets/img/profile-bg3.jpg'}}\"\n           class=\"profile-bg-img\">\n          <ion-row>\n            <ion-col col-5>\n              <div class=\"avtar-wrapper\">\n                <img src=\"{{userInfo?.profilePicThumb ? userInfo.profilePicThumb: userInfo.profilePic}}\" class=\"avatar\" imageViewer>\n              </div>\n            </ion-col>\n            <!-- name and follow-btn-->\n            <ion-col col-7>\n              <h2 class=\"name\">{{userInfo?.username}}</h2>\n              <p class=\"place ion-text-wrap\">\n                <ion-icon name=\"pin\" *ngIf=\"userInfo?.city\"></ion-icon>&nbsp;&nbsp; {{userInfo?.city}}</p>\n            </ion-col>\n          </ion-row>\n          <!-- name and pic -->\n          <!-- detail -->\n        </div>\n  \n        <ion-row class=\"counter-link\">\n          <!-- followers -->\n          <ion-col class=\"ion-text-center\" (click)=\"goToFollowedByList()\">\n            <p class=\"count\" *ngIf=\"followedBy | async as followedBy\">{{followedBy?.length}}</p>\n            <p class=\"count-text\">Followers</p>\n          </ion-col>\n          <!-- following -->\n          <ion-col class=\"ion-text-center\" (click)=\"goToFollowingToList()\">\n            <p class=\"count\" *ngIf=\"followingTo | async as followingTo\">{{followingTo?.length}}</p>\n            <p class=\"count-text\">Following</p>\n          </ion-col>\n          <!-- post -->\n          <ion-col class=\"ion-text-center\" (click)=\"onClickPostsCount()\">\n            <p class=\"count\">{{posts?.length}}</p>\n            <p class=\"count-text\">Post</p>\n          </ion-col>\n          <!-- pics-->\n          <ion-col class=\"ion-text-center\" (click)=\"onClickPhotosCount()\">\n            <p class=\"count\">{{postImages?.length}}</p>\n            <p class=\"count-text\">Photos</p>\n          </ion-col>\n        </ion-row>\n        <!-- detail -->\n      </div>\n      <!-- profile header -->\n  \n      <!--segment for post and images-->\n      <ion-segment [(ngModel)]=\"profile\">\n        <!-- segment btn for About -->\n        <ion-segment-button value=\"about\">\n          <ion-icon name=\"bicycle\"></ion-icon>&nbsp;About\n        </ion-segment-button>\n        <!-- segment btn for Post -->\n        <ion-segment-button value=\"post\">\n          <ion-icon name=\"document\"></ion-icon>&nbsp;Post\n        </ion-segment-button>\n        <!-- segment btn for photo gallery -->\n        <ion-segment-button value=\"photos-gallery\">\n          <ion-icon name=\"images\"></ion-icon>&nbsp;Photos\n        </ion-segment-button>\n      </ion-segment>\n      <!-- content -->\n      <div [ngSwitch]=\"profile\">\n        <!-- about-->\n        <div *ngSwitchCase=\"'about'\" class=\"about\">\n          <ion-row class=\"header\">\n            <ion-col col-9>\n              <h6>Basic Info</h6>\n            </ion-col>\n            <ion-col class=\"ion-text-right\">\n              <button ion-button icon-only small outline (click)=\"goToEditProfile()\">\n                <ion-icon name=\"create\"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <div class=\"cotent\" *ngIf=\"detailedUserInfo | async as detailedUserInfo\">\n            <ion-row class=\"cotent-item\">\n              <ion-col col-4>\n                <ion-icon name=\"pin\"></ion-icon>Lives in </ion-col>\n              <ion-col class=\"details\">\n                <span *ngIf=\"detailedUserInfo?.currentAddress?.city\">{{detailedUserInfo?.currentAddress?.city + ', '}}{{detailedUserInfo?.currentAddress?.country}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"cotent-item\">\n              <ion-col col-4>\n                <ion-icon name=\"home\"></ion-icon>Hometown </ion-col>\n              <ion-col class=\"details\">\n                <span *ngIf=\"detailedUserInfo?.permanentAddress?.city\">{{detailedUserInfo?.permanentAddress?.city+ ', '}}{{detailedUserInfo?.permanentAddress?.country}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"cotent-item\">\n              <ion-col col-4>\n                <ion-icon name=\"mail\"></ion-icon>Email:</ion-col>\n              <ion-col class=\"details\">\n                <span>{{detailedUserInfo?.email}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"cotent-item\">\n              <ion-col col-4>\n                <ion-icon name=\"phone-portrait\"></ion-icon>Mobile: </ion-col>\n              <ion-col class=\"details\">\n                <span>{{detailedUserInfo?.mobileNumber}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"cotent-item\">\n              <ion-col col-4>\n                <ion-icon name=\"call\"></ion-icon>Phone: </ion-col>\n              <ion-col class=\"details\">\n                <span>{{detailedUserInfo?.phoneNumber}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"cotent-item\">\n              <ion-col col-4>\n                <ion-icon name=\"person\"></ion-icon>Gender: </ion-col>\n              <ion-col class=\"details\">\n                <span>{{detailedUserInfo?.gender}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"cotent-item\">\n              <ion-col col-4>\n                <ion-icon name=\"bonfire\"></ion-icon>Birth: </ion-col>\n              <ion-col class=\"details\">\n                <span>{{detailedUserInfo?.birthDate | date}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"cotent-item\">\n              <ion-col col-4>\n                <ion-icon name=\"school\"></ion-icon>Education: </ion-col>\n              <ion-col class=\"details\">\n                <span *ngIf=\"detailedUserInfo?.education?.qualification\">{{detailedUserInfo?.education?.qualification+ ' from '}}{{detailedUserInfo?.education?.University}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"cotent-item\">\n              <ion-col col-4>\n                <ion-icon name=\"card\"></ion-icon>About: </ion-col>\n              <ion-col class=\"details\">\n                <span>{{detailedUserInfo?.about}}</span>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n  \n        <!-- Post-->\n        <ion-list *ngSwitchCase=\"'post'\">\n          <div *ngIf=\"posts?.length==0\">\n            <ion-item>\n              <p>No post updated yet.!</p>\n            </ion-item>\n          </div>\n          <ion-card class=\"post\" *ngFor=\"let post of posts\">\n            <ion-card-content no-padding>\n              <ion-row>\n                <ion-col col-12>\n                  <ion-row>\n                    <ion-col col-11>\n                      <p>{{post?.createdAt | amTimeAgo}}</p>\n                    </ion-col>\n                    <ion-col col-1>\n                      <ion-icon class=\"delete\" name=\"close\" (click)=\"onClickRemovePost(post?.postId, post?.postPicThumb, post?.postPic)\">\n                      </ion-icon>\n                    </ion-col>\n  \n                  </ion-row>\n                  <ion-row>\n                    <img *ngIf=\"post?.isImgPost\" src=\"{{post?.postPicThumb? post.postPicThumb: post.postPic}}\" class=\"post-image\" imageViewer>\n                  </ion-row>\n                </ion-col>\n                <ion-col col-12>\n                  <h2 class=\"description\">{{post?.oldPostText? post?.oldPostText : post?.postText}}</h2>\n  \n                  <!--counts-->\n                  <ion-row class=\"footer-row\">\n                    <div *ngIf=\"post?.likedBy | async as likedBy\" (click)=\"goToUserList(likedBy)\">\n                      <ion-icon name=\"heart\"></ion-icon>\n                      <span class=\"count\">{{likedBy?.length}}</span>\n                    </div>\n                    <div *ngIf=\"post?.commentedBy | async as commentedBy\" (click)=\"goToUserList(commentedBy)\">\n                      <ion-icon name=\"chatbubbles\"></ion-icon>\n                      <span class=\"count\">{{commentedBy?.length}}</span>\n                    </div>\n                    <div *ngIf=\"post?.sharedBy | async as sharedBy\" (click)=\"goToUserList(sharedBy)\">\n                      <ion-icon name=\"share-alt\"></ion-icon>\n                      <span class=\"count\">{{sharedBy?.length}}</span>\n                    </div>\n                  </ion-row>\n                  <!--counts end-->\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n  \n        <!-- pics -->\n        <div *ngSwitchCase=\"'photos-gallery'\">\n          <div *ngIf=\"postImages?.length==0\">\n            <ion-item>\n              <p>No images posted yet.!</p>\n            </ion-item>\n          </div>\n          <div class=\"gallary-grid\">\n            <div class=\"img-wrap\" *ngFor=\"let img of postImages\">\n              <img src=\"{{img}}\" imageViewer>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--content -->\n  </ion-content>\n  \n  <ion-fab bottom right (click)=\"goToPostPage()\">\n    <button ion-fab>\n      <ion-icon name=\"add\"></ion-icon>\n    </button>\n  </ion-fab>"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.module.ts ***!
  \****************************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm5/ngx-moment.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/components/user-profile/user-profile.page.ts");








var routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_7__["UserProfilePage"]
    }
];
var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_7__["UserProfilePage"]]
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.page.ts ***!
  \**************************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, userService, toastCtrl, homeService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.homeService = homeService;
        this.alertCtrl = alertCtrl;
        this.profile = 'about'; //segment selector
        this.uid = localStorage.getItem('uid');
        this.loggedinUserinfo = this.homeService.getUserInfo(this.uid).valueChanges(); // user's details
        this.followedBy = this.userService.getFollowers(this.uid).valueChanges();
        this.followingTo = this.userService.getFollowings(this.uid).valueChanges();
        this.detailedUserInfo = this.userService.getUserDetailedInfo(this.uid).valueChanges();
        this.userService.loggedinUserPosts(this.uid).snapshotChanges() // user's posts
            .subscribe(function (res) {
            _this.posts = [];
            _this.postImages = [];
            res.forEach(function (item) {
                var postId = item.payload.doc.id;
                var data = item.payload.doc.data();
                data.postId = postId;
                data.likedBy = _this.homeService.getLikes(postId).valueChanges();
                data.commentedBy = _this.homeService.getComments(postId).valueChanges();
                data.sharedBy = _this.homeService.getShares(postId).valueChanges();
                _this.posts.push(data);
                if (data.isImgPost) {
                    _this.postImages.push(data.postPic);
                }
            });
        }, function (error) {
            _this.showToast(error.message);
        });
    }
    UserProfilePage.prototype.ngOnInit = function () {
    };
    UserProfilePage.prototype.showToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 4000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfilePage.prototype.onClickPostsCount = function () {
        this.profile = 'post';
    };
    UserProfilePage.prototype.onClickPhotosCount = function () {
        this.profile = 'photos-gallery';
    };
    UserProfilePage.prototype.onClickRemovePost = function (id, img, thumb) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Delete post?',
                            // message: 'Do you want to remove this post?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        //do nothing
                                    }
                                },
                                {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.userService.deletePost(id).then(function () {
                                            if (img) {
                                                _this.removeImageFromStorage(img);
                                            }
                                            if (thumb) {
                                                _this.removeImageFromStorage(thumb);
                                            }
                                            _this.showToast('Post has been removed');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfilePage.prototype.removeImageFromStorage = function (url) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().refFromURL(url).delete().then(function (res) {
        }).catch(function (error) { return _this.showToast(error.message); });
    };
    UserProfilePage.prototype.goToEditProfile = function () {
        this.navCtrl.navigateRoot("EditProfilePage");
    };
    UserProfilePage.prototype.goToFollowingToList = function () {
        this.navCtrl.navigateRoot("FollowingListPage");
    };
    UserProfilePage.prototype.goToFollowedByList = function () {
        this.navCtrl.navigateRoot("FollowerListPage");
    };
    UserProfilePage.prototype.goToSettings = function () {
        this.navCtrl.navigateRoot("SettingsPage");
    };
    UserProfilePage.prototype.goToUserList = function (users) {
        this.navCtrl.navigateRoot(["UserListPage", { users: users }]);
    };
    UserProfilePage.prototype.goToPostPage = function (post, postOf) {
        if (post) {
            post.playerId = postOf.playerId;
            post.profilePic = postOf.profilePic;
            this.navCtrl.navigateRoot(["PostPage", { post: post }]);
        }
        else {
            this.navCtrl.navigateRoot("PostPage");
        }
    };
    UserProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/user-profile.page.html"),
            styles: [__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/components/user-profile/user-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], UserProfilePage);
    return UserProfilePage;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



var UserService = /** @class */ (function () {
    function UserService(afService) {
        this.afService = afService;
        this.users = afService.collection('users');
    }
    UserService.prototype.loggedinUserPosts = function (uid) {
        return this.afService.collection('posts', function (ref) { return ref.where('postedBy', '==', uid).orderBy('createdAt', 'desc'); });
    };
    UserService.prototype.getUserDetailedInfo = function (uid) {
        return this.users.doc(uid).collection('profile').doc('detailedInfo');
    };
    UserService.prototype.getFollowers = function (uid) {
        return this.users.doc(uid).collection('followedBy');
    };
    UserService.prototype.getFollowings = function (uid) {
        return this.users.doc(uid).collection('followingTo');
    };
    UserService.prototype.changeProfilePic = function (url, flag, uid, thumbUrl) {
        if (flag == 1) {
            return this.users.doc(uid).update({ coverPic: url, coverPicThumb: thumbUrl });
        }
        else {
            return this.users.doc(uid).update({ profilePic: url, profilePicThumb: thumbUrl });
        }
    };
    UserService.prototype.deletePost = function (id) {
        return this.afService.collection('posts').doc(id).delete();
    };
    UserService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es5.js.map