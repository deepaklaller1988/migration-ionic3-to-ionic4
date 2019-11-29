import { Component, OnInit,OnDestroy } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ChatService } from '../../services/chat.service';
import { Router,ActivatedRoute } from '@angular/router';
//import { Content } from 'ionic-angular/index';
import { Observable } from 'rxjs';
import {map,takeWhile} from 'rxjs/operators';
//import 'rxjs/add/operator/takeWhile';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnDestroy {
  //for this page, sender => loggedin user & receiver => other user
  //@ViewChild(Content) content: Content;
  private receiverId: string;
  private senderId: string;
  public username: string;
  public message: string;
  private chatId: string;
  public chat;
  private alive: boolean = true;


    constructor(
    private chatService: ChatService,
    // private navParams: NavParams, //this is ionic 4
    private loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute
    ) {
      this.constructorfn();
    }

  async constructorfn(){
    const loader = await this.loadingCtrl.create({
      message: 'Getting info...'
    });
    loader.present().then(() => {
       this.receiverId = this.route.snapshot.paramMap.get('uid');
       this.senderId = localStorage.getItem('uid');
       this.chatId = this.route.snapshot.paramMap.get('chatId');
       this.username = this.route.snapshot.paramMap.get('username');
        if (this.chatId) {
            this.getChat();
        } else {
            this.chatService.checkChatAvailability(this.senderId, this.receiverId).valueChanges().subscribe((res: any) => {
                if (res.length > 0) {
                    this.chatId = res[0].chatId;
                    this.getChat();
                } else {
                    const chatId = Date.now();
                    this.chatId = chatId.toString();
                    this.chatService.chatInitializer(this.senderId, this.receiverId, this.chatId).then(() => {
                        this.getChat();
                    });
                }
            });
        }
    }).then(() => {
        loader.dismiss();
    });
  }

  getChat() {
      this.chat = this.chatService.getChat(this.chatId).snapshotChanges().pipe(map( items => {
          return items.map((item: any) => {
              const msgId = item.payload.doc.id;
              let data = item.payload.doc.data()
              if (data.uid != this.senderId && data.unread) {
                  this.chatService.markAsRead(this.chatId, msgId).then();
              }
              this.scrollToBottom();
              return { msgId, ...data };
          });
      })).pipe(takeWhile(() => this.alive));
  }

  ngOnDestroy() {
      this.alive = false;
  }

  onClickSend() {
      this.chatService.sendMessage(this.chatId, this.senderId, this.message).then(() => {
          this.message = '';
          this.scrollToBottom();
      });

  }

  scrollToBottom() {
      setTimeout(() => {
        console.log('no chat');
         // this.content.scrollToBottom();
      }, 500);
  }

}
