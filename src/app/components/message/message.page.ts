import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MessageService } from '../../services/message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  private uid: string;
  public messageList =[];

  constructor(public navCtrl: NavController,
    private messageService: MessageService) {
    this.uid = localStorage.getItem('uid');
    // this.messageList = this.messageService.getChatList(this.uid).snapshotChanges().subscribe(items => {
    //   return items.map(item => {
    //     const chatId = item.payload.doc.id;
    //     let data = item.payload.doc.data();
    //     let dataCopy = Object.assign({}, data);
    //     delete dataCopy.chatId;
    //     delete dataCopy[this.uid];
    //     delete dataCopy['createdAt'];
    //     let keys = Object.keys(dataCopy);
    //     data.receiverId = keys[0];
    //     data.receiverInfo = this.messageService.userInfo(data.receiverId).valueChanges();
    //     data.lastMsg = this.messageService.getLastMsg(chatId).valueChanges();
    //     data.counter = this.messageService.getUnreadMsgs(chatId, data.receiverId).valueChanges();
    //     return { chatId, ...data };
    //   });
    // });
    this.messageService.getChatList(this.uid).snapshotChanges().subscribe(items => {   

      items.map(item => {
        const chatId = item.payload.doc.id;
        let data = item.payload.doc.data();
        let dataCopy = Object.assign({}, data);
        delete dataCopy['chatId'];
        delete dataCopy[this.uid];
        delete dataCopy['createdAt'];
        let keys = Object.keys(dataCopy);
        data['receiverId'] = keys[0];
        data['receiverInfo'] = this.messageService.userInfo(data['receiverId']).valueChanges();
        data['lastMsg'] = this.messageService.getLastMsg(chatId).valueChanges();
        data['counter'] = this.messageService.getUnreadMsgs(chatId, data['receiverId']).valueChanges();
        this.messageList.push(data);
      });
    });

  }

  ngOnInit() {
  }

  goToChat(chatId, uid, username) {
    this.navCtrl.navigateRoot(["chat",  uid, username, chatId ]);
  }
  goToFollowedByList() {
    this.navCtrl.navigateRoot("FollowerListPage");
  }

}
