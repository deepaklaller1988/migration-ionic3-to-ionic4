import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  private users: AngularFirestoreCollection<{}>;
  constructor(private afService: AngularFirestore) {
      this.users = this.afService.collection('users');
  }

  getUserDetails(uid) {
      return this.users.doc(uid).collection('profile').doc('detailedInfo');
  }

  submitUserDetails(userDetails, uid) {
      return this.users.doc(uid).update({
          username: userDetails.username.charAt(0).toUpperCase() + userDetails.username.slice(1),
          email: userDetails.email,
          city: userDetails.currentAddress.city
      }).then(() => {
          this.users.doc(uid).collection('profile').doc('detailedInfo').set(userDetails).then();
      })
  }
  
}
