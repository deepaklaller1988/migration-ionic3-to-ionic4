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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm5/ngx-moment.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.page */ "./src/app/components/chat/chat.page.ts");








var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
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
    return ChatPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






//import 'rxjs/add/operator/takeWhile';
var ChatPage = /** @class */ (function () {
    function ChatPage(chatService, 
    // private navParams: NavParams, //this is ionic 4
    loadingCtrl, router, route) {
        this.chatService = chatService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.route = route;
        this.alive = true;
        this.constructorfn();
    }
    ChatPage.prototype.constructorfn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Getting info...'
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present().then(function () {
                            _this.receiverId = _this.route.snapshot.paramMap.get('uid');
                            _this.senderId = localStorage.getItem('uid');
                            _this.chatId = _this.route.snapshot.paramMap.get('chatId');
                            _this.username = _this.route.snapshot.paramMap.get('username');
                            if (_this.chatId) {
                                _this.getChat();
                            }
                            else {
                                _this.chatService.checkChatAvailability(_this.senderId, _this.receiverId).valueChanges().subscribe(function (res) {
                                    if (res.length > 0) {
                                        _this.chatId = res[0].chatId;
                                        _this.getChat();
                                    }
                                    else {
                                        var chatId = Date.now();
                                        _this.chatId = chatId.toString();
                                        _this.chatService.chatInitializer(_this.senderId, _this.receiverId, _this.chatId).then(function () {
                                            _this.getChat();
                                        });
                                    }
                                });
                            }
                        }).then(function () {
                            loader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.getChat = function () {
        var _this = this;
        this.chat = this.chatService.getChat(this.chatId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (items) {
            return items.map(function (item) {
                var msgId = item.payload.doc.id;
                var data = item.payload.doc.data();
                if (data.uid != _this.senderId && data.unread) {
                    _this.chatService.markAsRead(_this.chatId, msgId).then();
                }
                _this.scrollToBottom();
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ msgId: msgId }, data);
            });
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }));
    };
    ChatPage.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ChatPage.prototype.onClickSend = function () {
        var _this = this;
        this.chatService.sendMessage(this.chatId, this.senderId, this.message).then(function () {
            _this.message = '';
            _this.scrollToBottom();
        });
    };
    ChatPage.prototype.scrollToBottom = function () {
        setTimeout(function () {
            console.log('no chat');
            // this.content.scrollToBottom();
        }, 500);
    };
    ChatPage.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
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
    return ChatPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



var ChatService = /** @class */ (function () {
    function ChatService(afService) {
        this.afService = afService;
        this.chats = this.afService.collection('chats');
    }
    ChatService.prototype.chatInitializer = function (senderId, receiverId, chatId) {
        //do not add any new property to body object otherwise code will break
        var body = {};
        body['createdAt'] = Number(chatId);
        body['chatId'] = chatId;
        body[senderId] = senderId;
        body[receiverId] = receiverId;
        return this.chats.doc(chatId).set(body);
    };
    ChatService.prototype.checkChatAvailability = function (senderId, receiverId) {
        return this.afService.collection('chats', function (ref) { return ref.where(senderId, '==', senderId).where(receiverId, '==', receiverId); });
    };
    ChatService.prototype.getChat = function (chatId) {
        return this.chats.doc(chatId).collection('messages', function (ref) { return ref.orderBy('createdAt', 'asc'); });
    };
    ChatService.prototype.sendMessage = function (chatId, senderId, message) {
        return this.chats.doc(chatId).collection('messages').add({
            createdAt: Date.now(),
            uid: senderId,
            unread: true,
            text: message
        });
    };
    ChatService.prototype.markAsRead = function (chatId, msgId) {
        return this.chats.doc(chatId).collection('messages').doc(msgId).update({ unread: false });
    };
    ChatService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ChatService);
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=components-chat-chat-module-es5.js.map