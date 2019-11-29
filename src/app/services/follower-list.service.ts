import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class FollowerListService {
  private users: AngularFirestoreCollection<{}>;

  constructor(private afService: AngularFirestore) {
    this.users = this.afService.collection('users');
  }

  userInfo(uid) {
    return this.users.doc(uid);
  }

  getFollowers(uid) {
    return this.users.doc(uid).collection('followedBy');
  }
}
