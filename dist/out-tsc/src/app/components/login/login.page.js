import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
let LoginPage = class LoginPage {
    constructor(service, navctrl, fb) {
        this.service = service;
        this.navctrl = navctrl;
        this.fb = fb;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['socialapp@test.com', Validators.required],
            password: ['123456', [Validators.required, Validators.minLength(6)]]
        });
    }
    onLogin() {
        let email = this.loginForm.controls['email'].value;
        let password = this.loginForm.controls['password'].value;
        this.service.login(email, password);
    }
    goToSignup() {
        this.navctrl.navigateForward("signup");
    }
    goToForgotPassword() {
        this.navctrl.navigateForward("ForgetPasswordPage");
    }
    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.tabber');
        if (tabs != null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
        if (localStorage.getItem('uid') != null) {
            this.navctrl.navigateRoot('TabsPage');
        }
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService, NavController,
        FormBuilder])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map