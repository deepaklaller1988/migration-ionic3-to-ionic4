(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forgot-password/forgot-password.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forgot-password/forgot-password.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"form-content forget-pass\">\n  <form class=\"form-wrapper\">\n    <!-- logo-image -->\n    <img src=\"assets/icon/logo.png\" class=\"logo-img\">\n    <h6>Enter email address we will send you link to change password ?</h6>\n    <ion-item>\n      <ion-input type=\"email\" placeholder=\"Email Address\" name=\"email\" [(ngModel)]=\"email\"></ion-input>\n      <ion-icon item-left name=\"mail\"></ion-icon>\n    </ion-item>\n\n    <button ion-button block class=\"submit-btn\" type=\"button\"(click)=\"reqPassword()\" [disabled]=\"!email\">Submit</button>\n  </form>\n  <br>\n  <ion-row class=\"divider\">\n    <ion-col><hr></ion-col>\n    <ion-col col-2>Or</ion-col>\n    <ion-col><hr></ion-col>\n  </ion-row>\n  <div class=\"goto-btn-wrapper\">\n  \t<button ion-button block class=\"goto-btn\" (click)=\"goToLogin()\" type=\"submit\">Go to Log in</button>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.module.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/components/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.page.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_forget_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/forget-password.service */ "./src/app/services/forget-password.service.ts");




var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, fpService, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.fpService = fpService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot(["LoginPage", { tabsHideOnSubPages: true }]);
    };
    ForgotPasswordPage.prototype.reqPassword = function () {
        if ((this.email.length > 3)) {
            this.presentConfirm('Confirm email', 'Password reset link will be sent to ' + this.email);
        }
        else {
            this.showToast('Please enter valid email');
        }
    };
    ForgotPasswordPage.prototype.showToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 5000,
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
    ForgotPasswordPage.prototype.presentConfirm = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        _this.showToast('You can try again!');
                                    }
                                },
                                {
                                    text: 'Confirm',
                                    handler: function () {
                                        _this.fpService.forgetPassword(_this.email).then(function (res) {
                                            _this.showToast('Password reset link has been sent to ' + _this.email);
                                        }).catch(function (error) {
                                            _this.showToast(error.message);
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
    ForgotPasswordPage.prototype.ionViewWillEnter = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
    };
    ForgotPasswordPage.prototype.ionViewDidLeave = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    };
    ForgotPasswordPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_forget_password_service__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/components/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_forget_password_service__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ }),

/***/ "./src/app/services/forget-password.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/forget-password.service.ts ***!
  \*****************************************************/
/*! exports provided: ForgetPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordService", function() { return ForgetPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);



var ForgetPasswordService = /** @class */ (function () {
    function ForgetPasswordService(authService) {
        this.authService = authService;
    }
    ForgetPasswordService.prototype.forgetPassword = function (email) {
        return this.authService.auth.sendPasswordResetEmail(email);
    };
    ForgetPasswordService.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
    ]; };
    ForgetPasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], ForgetPasswordService);
    return ForgetPasswordService;
}());



/***/ })

}]);
//# sourceMappingURL=components-forgot-password-forgot-password-module-es5.js.map