import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { PushNotificationService } from '../services/pushnotification.servics';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private appId: string = "e194af8d-50b1-4150-958d-afb0df854256";
  private users: AngularFirestoreCollection<{}>;
  private posts: AngularFirestoreCollection<{}>;

  constructor(private afService: AngularFirestore,
    private pushNotificationService: PushNotificationService) {
    this.users = this.afService.collection('users');
    this.posts = this.afService.collection('posts');
  }

  getComments(postId) {
    return this.posts.doc(postId).collection('commentedBy', ref => ref.orderBy('createdAt', 'asc'));
  }

  postComment(username, playerId, postId, uid, comment, luid) {
    return this.posts.doc(postId).collection('commentedBy').add({
      createdAt: Date.now(),
      type: 'comment',
      comment: comment,
      commentedBy: luid
    }).then(() => {
      if ((luid != uid)) {
        this.users.doc(uid).collection('notifications').doc(postId + '-' + luid).set({
          createdAt: Date.now(),
          uid: luid,
          postId: postId,
          event: 'commented on',
          read: false
        }).then(() => {
          if (playerId != 'noId') {
            let message = {
              app_id: this.appId,
              contents: { "en": username + ' commented on your post' },
              include_player_ids: [playerId]
            }
            this.pushNotificationService.sendNotification(message).subscribe(res => { });
          }
        });
      }
    });
  }
}
