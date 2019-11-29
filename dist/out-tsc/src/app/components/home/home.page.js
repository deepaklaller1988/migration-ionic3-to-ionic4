import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, Events } from '@ionic/angular';
import { HomeService } from '../../services/home.service';
import 'rxjs/add/operator/take';
//@IonicPage()
let HomePage = class HomePage {
    constructor(navCtrl, loadingCtrl, homeService, toastCtrl, events) {
        // this.uid = localStorage.getItem('uid');
        // let loader = await this.loadingCtrl.create({
        //   message: 'Preparing! Please wait...'
        // });
        // loader.present();
        // this.homeService.getUserInfo(this.uid).valueChanges().subscribe(res => {
        //   this.loggedinUserInfo = res;
        //   this.getFollowedUsersPost(this.uid);
        //   loader.dismiss();
        // }, error => {
        //   this.navCtrl.navigateRoot(['LoginPage', { tabsHideOnSubPages: true }]);
        // });
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.homeService = homeService;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.msgCount = 0;
        this.isPostsNotAvailable = false;
    }
    //nnnnnn
    ngOnInit() {
    }
    showToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    doRefresh(uid, refresher) {
        this.getFollowedUsersPost(uid, refresher);
    }
    ionViewWillEnter() {
        if (localStorage.getItem('uid') == null) {
            this.navCtrl.navigateRoot(['LoginPage', { tabsHideOnSubPages: true }]);
        }
        else {
            this.uid = localStorage.getItem('uid');
            this.getUnreadMessageCount();
            this.homeService.getNotificationCount(localStorage.getItem('uid')).valueChanges()
                .subscribe(res => {
                this.events.publish('notificationCount', res.length);
            });
        }
    }
    getUnreadMessageCount() {
        this.homeService.getMessageCount(this.uid).valueChanges().subscribe(items => {
            return items.map((item) => {
                this.msgCount = 0;
                const chatId = item.chatId;
                delete item.chatId;
                delete item[this.uid];
                delete item['createdAt'];
                const keys = Object.keys(item);
                const receiverId = keys[0];
                this.homeService.getUnreadMessageCount(chatId, receiverId).valueChanges().subscribe((res) => {
                    if (res.length > 0) {
                        this.msgCount = 1;
                    }
                });
            });
        });
    }
    getFollowedUsersPost(uid, refresher) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.followedUsersPost = yield this.homeService.getPosts(uid).map((items) => {
                if (items.message) {
                    this.isPostsNotAvailable = true;
                }
                else {
                    return items.map((item) => {
                        const postId = item.postId;
                        let data = item;
                        data.liked = this.homeService.checkIsLiked(postId, this.uid).valueChanges();
                        data.postOf = this.homeService.getUserInfo(data.postedBy).valueChanges();
                        data.likedBy = this.homeService.getLikes(postId).valueChanges();
                        data.commentedBy = this.homeService.getComments(postId).valueChanges();
                        data.sharedBy = this.homeService.getShares(postId).valueChanges();
                        if (data.isSharedPost) {
                            data.whosePostInfo = this.homeService.getUserInfo(data.whosePost).valueChanges();
                        }
                        return Object.assign({ postId }, data);
                    });
                }
            });
            if (refresher) {
                refresher.complete();
            }
        });
    }
    likePost(post, liked, playerId) {
        if (liked) {
            this.homeService.unlikePost(post.postId, this.uid).then();
        }
        else {
            this.homeService.likePost(this.loggedinUserInfo.username, playerId, post.postId, post.postedBy, this.uid).then();
        }
    }
    goToProfile() {
        //this.navCtrl.push("UserProfilePage");
    }
    goToMessage() {
        //this.navCtrl.push("MessagePage");
    }
    goToCommentPage(post) {
        //this.navCtrl.push("CommentsPage", { post: post });
    }
    goToUserList(users) {
        //this.navCtrl.push("UserListPage", { users: users });
    }
    goToPostPage(post, postOf) {
        if (post) {
            post.playerId = postOf.playerId;
            post.profilePic = postOf.profilePic;
            //this.navCtrl.push("PostPage", { post: post });
        }
        else {
            //this.navCtrl.push("PostPage");
        }
    }
    userDetails(uid) {
        if (uid == this.uid) {
            this.goToProfile();
        }
        else {
            //this.navCtrl.push("OthersProfilePage", { uid: uid });
        }
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        LoadingController,
        HomeService,
        ToastController,
        Events])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map