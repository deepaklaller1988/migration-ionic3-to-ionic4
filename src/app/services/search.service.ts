import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private users: AngularFirestoreCollection<{}>;

  constructor(private afService: AngularFirestore) {
    this.users = afService.collection('users');
  }

  usersList() {
    return this.users;
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

  SearchUser(val) {
    return this.afService.collection('users', ref => ref.orderBy('username').startAt(val.charAt(0).toUpperCase() + val.slice(1)).endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff'));
  }
}
