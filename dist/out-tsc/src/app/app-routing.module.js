import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
// import {LoginPage} from './components/login/login.page';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginPageModule) },
    { path: 'signup', loadChildren: './components/signup/signup.module#SignupPageModule' },
    { path: 'forgot-password', loadChildren: './components/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
    { path: '', loadChildren: './components/tabs/tabs.module#TabsPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map