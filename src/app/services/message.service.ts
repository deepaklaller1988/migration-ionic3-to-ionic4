import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private chats: AngularFirestoreCollection<{}>;
  private users: AngularFirestoreCollection<{}>;

  constructor(private afService: AngularFirestore) {
      this.chats = this.afService.collection('chats');
      this.users = this.afService.collection('users');
  }

  getChatList(uid) {
      return this.afService.collection('chats', ref => ref.where(uid, '==', uid));
  }

  userInfo(uid) {
      return this.users.doc(uid);
  }

  getLastMsg(chatId) {
      return this.chats.doc(chatId).collection('messages', ref => ref.orderBy('createdAt', 'desc').limit(1));
  }

  getUnreadMsgs(chatId, receiverId) {
      return this.chats.doc(chatId).collection('messages', ref => ref.where('unread', '==', true).where('uid', '==', receiverId));
  }
}
