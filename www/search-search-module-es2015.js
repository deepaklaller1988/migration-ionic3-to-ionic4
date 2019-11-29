(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>search</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n<ion-header>\n    <ion-toolbar>\n      <ion-searchbar (ionInput)=\"onEnterSearch($event)\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"search-content\">\n    <div *ngIf=\"users | async as users\">\n      <ion-item *ngIf=\"users?.length==0\">\n        <p>No user found.!</p>\n      </ion-item>\n    </div>\n    <div *ngFor=\"let user of users | async\">\n      <ion-item class=\"item\" *ngIf=\"user?.uid != uid\">\n        <ion-avatar item-left >\n          <img src=\"{{user.profilePicThumb? user.profilePicThumb: user.profilePic}}\" class=\"img-avatar\">\n        </ion-avatar>\n        <h2 class=\"name\" (click)=\"goToOthersProfile(user.uid)\">{{user.username}}</h2>\n        <p (click)=\"goToOthersProfile(user.uid)\">{{user.email}}</p>\n  \n        <div item-right class=\"right-btn\" *ngIf=\"user?.checkIsFollowing | async as following\">\n          <button ion-button class=\"btn-follow\" (click)=\"followUnfollowUser(following.length==1, user?.uid)\" [ngClass]=\"{unfollowBtn: following.length==1}\">\n            <span>{{following.length==1 ? 'UNFOLLOW': 'FOLLOW'}}</span>\n          </button>\n        </div>\n      </ion-item>\n    </div>\n  \n  </ion-content>\n  \n  \n  <ion-fab bottom right (click)=\"goToPostPage()\">\n    <button ion-fab>\n      <ion-icon name=\"add\"></ion-icon>\n    </button>\n  </ion-fab>"

/***/ }),

/***/ "./src/app/components/search/search.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/search/search.module.ts ***!
  \****************************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/components/search/search.page.ts");







const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/components/search/search.page.scss":
/*!****************************************************!*\
  !*** ./src/app/components/search/search.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/search/search.page.ts":
/*!**************************************************!*\
  !*** ./src/app/components/search/search.page.ts ***!
  \**************************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let SearchPage = class SearchPage {
    constructor(navCtrl, searchService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.searchService = searchService;
        this.loadingCtrl = loadingCtrl;
        this.constructorfn();
    }
    ngOnInit() {
    }
    constructorfn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loadingCtrl.create({
                message: 'Getting list...'
            });
            loader.present().then(() => {
                this.uid = localStorage.getItem('uid');
                this.users = this.usersCopy = this.searchService.usersList().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(items => {
                    return items.map((item) => {
                        item.checkIsFollowing = this.searchService.checkIsFollowing(item.uid, this.uid).valueChanges();
                        return Object.assign({}, item);
                    });
                }));
            }).then(() => {
                loader.dismiss();
            });
        });
    }
    onEnterSearch(event) {
        let val = event.target.value;
        if (val && val.trim() != '') {
            this.users = this.searchService.SearchUser(val).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(items => {
                return items.map((item) => {
                    item.checkIsFollowing = this.searchService.checkIsFollowing(item.uid, this.uid).valueChanges();
                    return Object.assign({}, item);
                });
            }));
        }
        else {
            this.users = this.usersCopy;
        }
    }
    followUnfollowUser(isFollowing, ouid) {
        if (isFollowing) {
            this.searchService.unfollowUser(ouid, this.uid).then();
        }
        else {
            this.searchService.followUser(ouid, this.uid).then();
        }
    }
    goToOthersProfile(uid) {
        this.navCtrl.navigateRoot(["OthersProfilePage", { uid: uid }]);
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
};
SearchPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.page.html"),
        styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/components/search/search.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], SearchPage);



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



let SearchService = class SearchService {
    constructor(afService) {
        this.afService = afService;
        this.users = afService.collection('users');
    }
    usersList() {
        return this.users;
    }
    checkIsFollowing(ouid, cuid) {
        return this.users.doc(cuid).collection('followingTo', ref => ref.where('followingTo', '==', ouid));
    }
    followUser(ouid, cuid) {
        return this.users.doc(cuid).collection('followingTo').doc(ouid).set({
            createdAt: Date.now(),
            followingTo: ouid
        }).then(() => {
            this.users.doc(ouid).collection('followedBy').doc(cuid).set({
                createdAt: Date.now(),
                followedBy: cuid
            });
        });
    }
    unfollowUser(ouid, cuid) {
        return this.users.doc(cuid).collection('followingTo').doc(ouid).delete().then(() => {
            this.users.doc(ouid).collection('followedBy').doc(cuid).delete();
        });
    }
    SearchUser(val) {
        return this.afService.collection('users', ref => ref.orderBy('username').startAt(val.charAt(0).toUpperCase() + val.slice(1)).endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'));
    }
};
SearchService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], SearchService);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map