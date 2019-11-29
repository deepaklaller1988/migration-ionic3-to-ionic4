import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class FollowingListService {
  private users: AngularFirestoreCollection<{}>;

  constructor(private afService: AngularFirestore) {
    this.users = this.afService.collection('users');
  }

  userInfo(uid) {
    return this.users.doc(uid);
  }

  getFollowings(uid) {
    return this.users.doc(uid).collection('followingTo');
  }

  unfollowUser(ouid, cuid) {
    return this.users.doc(cuid).collection('followingTo').doc(ouid).delete().then(() => {
      this.users.doc(ouid).collection('followedBy').doc(cuid).delete();
    });
  }
}
