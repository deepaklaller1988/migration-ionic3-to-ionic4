(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat/chat.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat/chat.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>{{username}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"chat-content\">\n  <div *ngIf=\"chat | async as chat\">\n      <ion-item *ngIf=\"chat?.length==0\">\n          <p>Conversation not yet started.!</p>\n      </ion-item>\n  </div>\n  <div *ngFor=\"let msg of chat | async\">\n      <ion-row *ngIf=\"(msg.uid == senderId); else other_content\">\n          <ion-col class=\"chat-box\" col-10>\n              <div class=\"chat-header\">\n                  <span class=\"time\">{{ msg.createdAt| amTimeAgo }}</span>\n              </div>\n              <p class=\"msg\" class=\"ion-text-wrap\">{{msg.text}}</p>\n          </ion-col>\n      </ion-row>\n      <ng-template #other_content>\n          <ion-row>\n              <ion-col class=\"chat-box-right\" col-10 offset-2>\n                  <div class=\"chat-header\">\n                      <span class=\"time\">{{msg.createdAt | amTimeAgo }}</span>\n                  </div>\n                  <p class=\"msg rt\" class=\"ion-text-wrap\">{{msg.text}}</p>\n              </ion-col>\n          </ion-row>\n      </ng-template>\n  </div>\n  <p class=\"devider-time\"></p>\n  <br>\n  <br>\n  <br>\n  <ion-footer>\n      <ion-row class=\"chat-footer\">\n          <ion-col col-10 class=\"ion-no-padding\">\n              <ion-item>\n                  <ion-input type=\"text\" placeholder=\" Type message...\" name=\"message\" id=\"message\" [(ngModel)]=\"message\"></ion-input>\n              </ion-item>\n          </ion-col>\n          <ion-col col-2 class=\"ion-no-padding\">\n              <button ion-button icon only type=\"button\" [disabled]=\"!message\" class=\"send-btn\" (click)=\"onClickSend()\">\n                  <ion-icon class=\"enter-btn\" name=\"send\"></ion-icon>\n              </button>\n          </ion-col>\n      </ion-row>\n  </ion-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/chat/chat.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/chat/chat.module.ts ***!
  \************************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.page */ "./src/app/components/chat/chat.page.ts");








const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]
    }
];
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/components/chat/chat.page.scss":
/*!************************************************!*\
  !*** ./src/app/components/chat/chat.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/chat/chat.page.ts":
/*!**********************************************!*\
  !*** ./src/app/components/chat/chat.page.ts ***!
  \**********************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






//import 'rxjs/add/operator/takeWhile';
let ChatPage = class ChatPage {
    constructor(chatService, 
    // private navParams: NavParams, //this is ionic 4
    loadingCtrl, router, route) {
        this.chatService = chatService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.route = route;
        this.alive = true;
        this.constructorfn();
    }
    constructorfn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                message: 'Getting info...'
            });
            loader.present().then(() => {
                this.receiverId = this.route.snapshot.paramMap.get('uid');
                this.senderId = localStorage.getItem('uid');
                this.chatId = this.route.snapshot.paramMap.get('chatId');
                this.username = this.route.snapshot.paramMap.get('username');
                if (this.chatId) {
                    this.getChat();
                }
                else {
                    this.chatService.checkChatAvailability(this.senderId, this.receiverId).valueChanges().subscribe((res) => {
                        if (res.length > 0) {
                            this.chatId = res[0].chatId;
                            this.getChat();
                        }
                        else {
                            const chatId = Date.now();
                            this.chatId = chatId.toString();
                            this.chatService.chatInitializer(this.senderId, this.receiverId, this.chatId).then(() => {
                                this.getChat();
                            });
                        }
                    });
                }
            }).then(() => {
                loader.dismiss();
            });
        });
    }
    getChat() {
        this.chat = this.chatService.getChat(this.chatId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(items => {
            return items.map((item) => {
                const msgId = item.payload.doc.id;
                let data = item.payload.doc.data();
                if (data.uid != this.senderId && data.unread) {
                    this.chatService.markAsRead(this.chatId, msgId).then();
                }
                this.scrollToBottom();
                return Object.assign({ msgId }, data);
            });
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(() => this.alive));
    }
    ngOnDestroy() {
        this.alive = false;
    }
    onClickSend() {
        this.chatService.sendMessage(this.chatId, this.senderId, this.message).then(() => {
            this.message = '';
            this.scrollToBottom();
        });
    }
    scrollToBottom() {
        setTimeout(() => {
            console.log('no chat');
            // this.content.scrollToBottom();
        }, 500);
    }
};
ChatPage.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat/chat.page.html"),
        styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/components/chat/chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ChatPage);



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



let ChatService = class ChatService {
    constructor(afService) {
        this.afService = afService;
        this.chats = this.afService.collection('chats');
    }
    chatInitializer(senderId, receiverId, chatId) {
        //do not add any new property to body object otherwise code will break
        let body = {};
        body['createdAt'] = Number(chatId);
        body['chatId'] = chatId;
        body[senderId] = senderId;
        body[receiverId] = receiverId;
        return this.chats.doc(chatId).set(body);
    }
    checkChatAvailability(senderId, receiverId) {
        return this.afService.collection('chats', ref => ref.where(senderId, '==', senderId).where(receiverId, '==', receiverId));
    }
    getChat(chatId) {
        return this.chats.doc(chatId).collection('messages', ref => ref.orderBy('createdAt', 'asc'));
    }
    sendMessage(chatId, senderId, message) {
        return this.chats.doc(chatId).collection('messages').add({
            createdAt: Date.now(),
            uid: senderId,
            unread: true,
            text: message
        });
    }
    markAsRead(chatId, msgId) {
        return this.chats.doc(chatId).collection('messages').doc(msgId).update({ unread: false });
    }
};
ChatService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], ChatService);



/***/ })

}]);
//# sourceMappingURL=components-chat-chat-module-es2015.js.map