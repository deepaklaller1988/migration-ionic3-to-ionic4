import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
let SignupPage = class SignupPage {
    constructor(navctrl, formBuilder, signUpService) {
        this.navctrl = navctrl;
        this.formBuilder = formBuilder;
        this.signUpService = signUpService;
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
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
};
SignupPage = tslib_1.__decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.page.html',
        styleUrls: ['./signup.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController, FormBuilder, SignUpService])
], SignupPage);
export { SignupPage };
//# sourceMappingURL=signup.page.js.map