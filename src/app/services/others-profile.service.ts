import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class OthersProfileService {
  private users: AngularFirestoreCollection<{}>;

  constructor(private afService: AngularFirestore) {
      this.users = afService.collection('users');
  }

  otherUserInfo(uid) {
      return this.users.doc(uid);
  }

  otherUserDetailedInfo(uid) {
      return this.users.doc(uid).collection('profile').doc('detailedInfo');
  }

  otherUserPosts(uid) {
      return this.afService.collection('posts', ref => ref.where('postedBy', '==', uid).orderBy('createdAt', 'desc'));
  }

  getFollowers(uid) {
      return this.users.doc(uid).collection('followedBy');
  }

  getFollowings(uid) {
      return this.users.doc(uid).collection('followingTo');
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
