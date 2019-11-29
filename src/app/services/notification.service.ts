import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    private users: AngularFirestoreCollection<{}>;
    private posts: AngularFirestoreCollection<{}>;

    constructor(afService: AngularFirestore) {
        this.users = afService.collection('users');
        this.posts = afService.collection('posts');
    }

    getNotifications(uid) {
        return this.users.doc(uid).collection('notifications', ref => ref.orderBy('createdAt', 'desc'));
    }

    userInfo(uid) {
        return this.users.doc(uid);
    }

    getSinglePost(postId) {
        return this.posts.doc(postId);
    }

    markAsRead(postId, luid, ouid) {
        return this.users.doc(luid).collection('notifications').doc(postId + '-' + ouid).delete();
    }

    markAllAsRead(item, uid) {
        return this.users.doc(uid).collection('notifications').doc(item.postId + '-' + item.uid).delete();
    }
}
