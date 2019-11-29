(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"form-content\">\n  <form class=\"form-wrapper\" [formGroup]=\"signupForm\" (ngSubmit)=\"onRegister()\">\n    <!-- logo-image -->\n    <img src=\"assets/icon/logo.png\" class=\"logo-img\">\n\n     <ion-item>\n      <ion-input type=\"text\" placeholder=\"Username\" formControlName=\"username\" ></ion-input>\n      <ion-icon item-left name=\"contact\"></ion-icon>\n    </ion-item>\n    \n    <ion-item>\n      <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n      <ion-icon item-left name=\"mail\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n       <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n       <ion-icon item-left name=\"lock\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n       <ion-input type=\"password\" placeholder=\"confirm password\" formControlName=\"confirmPassword\"></ion-input>\n       <ion-icon item-left name=\"lock\"></ion-icon>\n    </ion-item>\n\n\n    <button ion-button block class=\"submit-btn\" type=\"submit\" [disabled]=\"!signupForm.valid\">Sign up</button>\n  </form>\n  <br>\n  <ion-row class=\"divider\">\n    <ion-col><hr></ion-col>\n    <ion-col col-8>Already Have an Acount?</ion-col>\n    <ion-col><hr></ion-col>\n  </ion-row>\n  <div class=\"goto-btn-wrapper\">\n  \t<button ion-button block class=\"goto-btn\" (click)=\"goToLogin()\" type=\"submit\" >Goto Login</button>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/signup/signup.module.ts ***!
  \****************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup.page */ "./src/app/components/signup/signup.page.ts");








const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/components/signup/signup.page.scss":
/*!****************************************************!*\
  !*** ./src/app/components/signup/signup.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/signup/signup.page.ts":
/*!**************************************************!*\
  !*** ./src/app/components/signup/signup.page.ts ***!
  \**************************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sign-up.service */ "./src/app/services/sign-up.service.ts");





let SignupPage = class SignupPage {
    constructor(navctrl, formBuilder, signUpService) {
        this.navctrl = navctrl;
        this.formBuilder = formBuilder;
        this.signUpService = signUpService;
        this.signupForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    onRegister() {
        let username = this.signupForm.controls['username'].value;
        let password = this.signupForm.controls['password'].value;
        let confirmPassword = this.signupForm.controls['confirmPassword'].value;
        let email = this.signupForm.controls['email'].value;
        this.signUpService.registerUser(username, email, password, confirmPassword);
    }
    goToLogin() {
        this.navctrl.navigateRoot(["LoginPage", { tabsHideOnSubPages: true }]);
    }
    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
    }
    ionViewDidLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.page.html"),
        styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/components/signup/signup.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"]])
], SignupPage);



/***/ }),

/***/ "./src/app/services/sign-up.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sign-up.service.ts ***!
  \*********************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            }
            else {
                this.showToast('Confirm Password Doesn\'t match, Try again');
                loader.dismiss();
            }
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
};
SignUpService.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
SignUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], SignUpService);



/***/ })

}]);
//# sourceMappingURL=components-signup-signup-module-es2015.js.map