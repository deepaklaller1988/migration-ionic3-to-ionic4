import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { PushNotificationService } from '../services/pushnotification.servics';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private appId: string = "e194af8d-50b1-4150-958d-afb0df854256";
  private users: AngularFirestoreCollection<{}>;
  private posts: AngularFirestoreCollection<{}>;
  private chats: AngularFirestoreCollection<{}>;
  private baseUrl: string = 'https://us-central1-firestrore-ionic-social-app.cloudfunctions.net/followingPosts/';

  constructor(private afService: AngularFirestore,
      private pushNotiService: PushNotificationService,
      private http: HttpClient) {
      this.users = afService.collection('users');
      this.posts = afService.collection('posts');
      this.chats = afService.collection('chats');
  }

  getUserInfo(uid) {
      console.log(">>>>>>>>>",this.users.doc(uid));
      return this.users.doc(uid);
  }

  getPosts(uid) { // this API hit will give loggedin plus followed users post only
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
                      }
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
}
