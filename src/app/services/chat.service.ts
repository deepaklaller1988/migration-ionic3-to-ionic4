import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chats: AngularFirestoreCollection<{}>;

  constructor(private afService: AngularFirestore) {
    this.chats = this.afService.collection('chats');
  }

  chatInitializer(senderId, receiverId, chatId) {
    //do not add any new property to body object otherwise code will break
    let body = {};
    body['createdAt'] = Number(chatId);
    body['chatId'] = chatId;
    body[senderId] = senderId;
    body[receiverId] = receiverId;
    return this.chats.doc(chatId).set(body);
  }

  checkChatAvailability(senderId, receiverId) {
    return this.afService.collection('chats', ref => ref.where(senderId, '==', senderId).where(receiverId, '==', receiverId));
  }

  getChat(chatId) {
    return this.chats.doc(chatId).collection('messages', ref => ref.orderBy('createdAt', 'asc'));
  }

  sendMessage(chatId, senderId, message) {
    return this.chats.doc(chatId).collection('messages').add({
      createdAt: Date.now(),
      uid: senderId,
      unread: true,
      text: message
    });
  }

  markAsRead(chatId, msgId) {
    return this.chats.doc(chatId).collection('messages').doc(msgId).update({ unread: false });
  }
}
