import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: AngularFirestoreCollection<{}>;

  constructor(private afService: AngularFirestore) {
    this.users = afService.collection('users');
  }

  loggedinUserPosts(uid) {
    return this.afService.collection('posts', ref => ref.where('postedBy', '==', uid).orderBy('createdAt', 'desc'));
  }

  getUserDetailedInfo(uid) {
    return this.users.doc(uid).collection('profile').doc('detailedInfo');
  }

  getFollowers(uid) {
    return this.users.doc(uid).collection('followedBy');
  }

  getFollowings(uid) {
    return this.users.doc(uid).collection('followingTo');
  }

  changeProfilePic(url, flag, uid, thumbUrl) {
    if (flag == 1) {
      return this.users.doc(uid).update({ coverPic: url, coverPicThumb: thumbUrl });
    } else {
      return this.users.doc(uid).update({ profilePic: url, profilePicThumb: thumbUrl });
    }
  }

  deletePost(id) {
    return this.afService.collection('posts').doc(id).delete();
  }
}
