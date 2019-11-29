import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private users: AngularFirestoreCollection<{}>;

  constructor(private afService: AngularFirestore) {
    this.users = afService.collection('users');
  }

  getUser(uid) {
    return this.afService.collection('users', ref => ref.where('uid', '==', uid));
  }

  checkIsFollowing(ouid, cuid) {
    return this.users.doc(cuid).collection('followingTo', ref => ref.where('followingTo', '==', ouid));
  }

  followUser(ouid, cuid) {
    return this.users.doc(cuid).collection('followingTo').doc(ouid).set({
      createdAt: Date.now(),
      followingTo: ouid
    }).then(() => {
      this.users.doc(ouid).collection('followedBy').doc(cuid).set({
        createdAt: Date.now(),
        followedBy: cuid
      });
    })
  }

  unfollowUser(ouid, cuid) {
    return this.users.doc(cuid).collection('followingTo').doc(ouid).delete().then(() => {
      this.users.doc(ouid).collection('followedBy').doc(cuid).delete();
    });
  }
}
