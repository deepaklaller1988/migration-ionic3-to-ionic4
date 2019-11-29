import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { PushNotificationService } from '../services/pushnotification.servics';
let HomeService = class HomeService {
    constructor(afService, pushNotiService, http) {
        this.afService = afService;
        this.pushNotiService = pushNotiService;
        this.http = http;
        this.appId = "e194af8d-50b1-4150-958d-afb0df854256";
        this.baseUrl = 'https://us-central1-firestrore-ionic-social-app.cloudfunctions.net/followingPosts/';
        this.users = afService.collection('users');
        this.posts = afService.collection('posts');
        this.chats = afService.collection('chats');
    }
    getUserInfo(uid) {
        return this.users.doc(uid);
    }
    getPosts(uid) {
        return this.http.get(this.baseUrl + uid);
    }
    checkIsLiked(postId, uid) {
        return this.posts.doc(postId).collection('likedBy', ref => ref.where('likedBy', '==', uid));
    }
    getLikes(postId) {
        return this.posts.doc(postId).collection('likedBy');
    }
    getComments(postId) {
        return this.posts.doc(postId).collection('commentedBy');
    }
    getShares(postId) {
        return this.posts.doc(postId).collection('sharedBy');
    }
    unlikePost(postId, likeId) {
        return this.posts.doc(postId).collection('likedBy').doc(likeId).delete();
    }
    likePost(username, playerId, postId, uid, luid) {
        return this.posts.doc(postId).collection('likedBy').doc(luid).set({
            createdAt: Date.now(),
            type: 'like',
            likedBy: luid
        }).then(res => {
            if ((luid != uid)) {
                this.users.doc(uid).collection('notifications').doc(postId + '-' + luid).set({
                    createdAt: Date.now(),
                    event: 'liked',
                    uid: luid,
                    postId: postId,
                    read: false
                }).then(() => {
                    if (playerId != 'noId') {
                        let message = {
                            app_id: this.appId,
                            contents: { "en": username + ' liked your post' },
                            include_player_ids: [playerId]
                        };
                        this.pushNotiService.sendNotification(message).subscribe(res => { });
                    }
                });
            }
        });
    }
    getMessageCount(uid) {
        return this.afService.collection('chats', ref => ref.where(uid, '==', uid));
    }
    getUnreadMessageCount(chatId, uid) {
        return this.chats.doc(chatId).collection('messages', ref => ref.where('unread', '==', true).where('uid', '==', uid));
    }
    getNotificationCount(uid) {
        return this.users.doc(uid).collection('notifications');
    }
};
HomeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        PushNotificationService,
        HttpClient])
], HomeService);
export { HomeService };
//# sourceMappingURL=home.service.js.map