(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-message-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/message/message.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/message/message.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>Messages</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"notifications-content\">\n\t<div *ngIf=\"messageList\">\n\t\t<ion-item *ngIf=\"messageList?.length==0\">\n\t\t\t<p>Conversation not yet started.!</p>\n\t\t</ion-item>\n\t</div>\n\t<span *ngFor=\"let message of messageList\">\n\t\t<ion-item *ngIf=\"message?.receiverInfo | async as userInfo\" class=\"item\" (click)=\"goToChat(message?.chatId, userInfo?.uid, userInfo?.username)\">\n\t\t\t<ion-avatar item-left>\n\t\t\t\t<img src=\"{{userInfo?.profilePicThumb ? userInfo.profilePicThumb : userInfo.profilePic}}\" class=\"img-avatar\">\n\t\t\t</ion-avatar>\n\t\t\t<h2 class=\"name\">{{userInfo?.username}}</h2>\n\t\t\t<span *ngIf=\"message?.lastMsg | async as lastMsg\">\n\t\t\t\t<ion-note class=\"time\" item-right *ngIf=\"lastMsg[0]?.createdAt\">{{lastMsg[0]?.createdAt | amTimeAgo }}</ion-note>\n\t\t\t\t<span *ngIf=\"message?.counter | async as counter\">\n\t\t\t\t\t<span class=\"msg-count\" *ngIf=\"counter.length>0\">{{counter?.length}}</span>\n\t\t\t\t</span>\n\t\t\t\t<p class=\"description\">{{lastMsg[0]?.text}}</p>\n\t\t\t</span>\n\t\t</ion-item>\n\t</span>\n</ion-content>\n\n<ion-fab bottom right (click)=\"goToFollowedByList()\">\n\t<button ion-fab>\n\t\t<ion-icon name=\"chatboxes\"></ion-icon>\n\t</button>\n</ion-fab>"

/***/ }),

/***/ "./src/app/components/message/message.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/message/message.module.ts ***!
  \******************************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message.page */ "./src/app/components/message/message.page.ts");








const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_7__["MessagePage"]
    }
];
let MessagePageModule = class MessagePageModule {
};
MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_7__["MessagePage"]]
    })
], MessagePageModule);



/***/ }),

/***/ "./src/app/components/message/message.page.scss":
/*!******************************************************!*\
  !*** ./src/app/components/message/message.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/message/message.page.ts":
/*!****************************************************!*\
  !*** ./src/app/components/message/message.page.ts ***!
  \****************************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");




let MessagePage = class MessagePage {
    constructor(navCtrl, messageService) {
        this.navCtrl = navCtrl;
        this.messageService = messageService;
        this.messageList = [];
        this.uid = localStorage.getItem('uid');
        // this.messageList = this.messageService.getChatList(this.uid).snapshotChanges().subscribe(items => {
        //   return items.map(item => {
        //     const chatId = item.payload.doc.id;
        //     let data = item.payload.doc.data();
        //     let dataCopy = Object.assign({}, data);
        //     delete dataCopy.chatId;
        //     delete dataCopy[this.uid];
        //     delete dataCopy['createdAt'];
        //     let keys = Object.keys(dataCopy);
        //     data.receiverId = keys[0];
        //     data.receiverInfo = this.messageService.userInfo(data.receiverId).valueChanges();
        //     data.lastMsg = this.messageService.getLastMsg(chatId).valueChanges();
        //     data.counter = this.messageService.getUnreadMsgs(chatId, data.receiverId).valueChanges();
        //     return { chatId, ...data };
        //   });
        // });
        this.messageService.getChatList(this.uid).snapshotChanges().subscribe(items => {
            items.map(item => {
                const chatId = item.payload.doc.id;
                let data = item.payload.doc.data();
                let dataCopy = Object.assign({}, data);
                delete dataCopy['chatId'];
                delete dataCopy[this.uid];
                delete dataCopy['createdAt'];
                let keys = Object.keys(dataCopy);
                data['receiverId'] = keys[0];
                data['receiverInfo'] = this.messageService.userInfo(data['receiverId']).valueChanges();
                data['lastMsg'] = this.messageService.getLastMsg(chatId).valueChanges();
                data['counter'] = this.messageService.getUnreadMsgs(chatId, data['receiverId']).valueChanges();
                this.messageList.push(data);
            });
        });
    }
    ngOnInit() {
    }
    goToChat(chatId, uid, username) {
        this.navCtrl.navigateRoot(["chat", uid, username, chatId]);
    }
    goToFollowedByList() {
        this.navCtrl.navigateRoot("FollowerListPage");
    }
};
MessagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/message/message.page.html"),
        styles: [__webpack_require__(/*! ./message.page.scss */ "./src/app/components/message/message.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], MessagePage);



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



let MessageService = class MessageService {
    constructor(afService) {
        this.afService = afService;
        this.chats = this.afService.collection('chats');
        this.users = this.afService.collection('users');
    }
    getChatList(uid) {
        return this.afService.collection('chats', ref => ref.where(uid, '==', uid));
    }
    userInfo(uid) {
        return this.users.doc(uid);
    }
    getLastMsg(chatId) {
        return this.chats.doc(chatId).collection('messages', ref => ref.orderBy('createdAt', 'desc').limit(1));
    }
    getUnreadMsgs(chatId, receiverId) {
        return this.chats.doc(chatId).collection('messages', ref => ref.where('unread', '==', true).where('uid', '==', receiverId));
    }
};
MessageService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], MessageService);



/***/ })

}]);
//# sourceMappingURL=components-message-message-module-es2015.js.map