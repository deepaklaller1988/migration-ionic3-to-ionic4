import { Component, OnInit } from '@angular/core';
import {NavController, LoadingController, ToastController, Events } from '@ionic/angular';
import { NotificationService } from '../../services/notification.service';
import { HomeService } from '../../services/home.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {  } from 'rxjs/add/operator/take';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor( public navCtrl: NavController,
    private notificationService: NotificationService,
    private loadingCtrl: LoadingController,
    private homeService: HomeService,
    private toastCtrl: ToastController) {
      this.constructorfn();
  }

  ngOnInit() {
  }

  private uid: string;
  public notifications;

  async constructorfn() {
    this.uid = localStorage.getItem('uid');
    let loader = await this.loadingCtrl.create({
      message: 'Getting Notifications...'
    });
    loader.present().then(() => {
      this.notifications = this.notificationService.getNotifications(this.uid).valueChanges().pipe(map( items => {
        return items.map((item: any) => {
          item.userInfo = this.notificationService.userInfo(item.uid).valueChanges();
          return { ...item };
        });
      }));
    }).then(() => {
      loader.dismiss();
    })
  }

  async goToCommentPage(notification) {
    let loader = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    loader.present();
    this.notificationService.getSinglePost(notification.postId).valueChanges().pipe(map((item: any) => {
      if (item) {
        let data = item;
        let postId = notification.postId;
        data.liked = this.homeService.checkIsLiked(postId, this.uid).valueChanges();
        data.postOf = this.homeService.getUserInfo(data.postedBy).valueChanges();
        data.likedBy = this.homeService.getLikes(postId).valueChanges();
        data.commentedBy = this.homeService.getComments(postId).valueChanges();
        data.sharedBy = this.homeService.getShares(postId).valueChanges();
        if (data.isSharedPost) {
          data.whosePostInfo = this.homeService.getUserInfo(data.whosePost).valueChanges();
        }
        return { postId, ...data };
      } else {
        this.notificationService.markAsRead(notification.postId, this.uid, notification.uid);
        this.showToast('Post was removed');
      }
    })).subscribe((res) => {
      if (res) {
        this.notificationService.markAsRead(res.postId, this.uid, notification.uid);
        loader.dismiss();
        this.navCtrl.navigateRoot(["home", { post: res }]);
      } else {
        loader.dismiss();
      }
    });
  }

  async markAllAsRead() {
    let loader = await this.loadingCtrl.create({
      message: 'Marking all as read...'
    });
    loader.present().then(() => {
      this.notificationService.getNotifications(this.uid).valueChanges().pipe(map(items => {
        return items.map((item: any) => {
          this.notificationService.markAllAsRead(item, this.uid).then();
        });
      })).subscribe();
    }).then(() => {
      loader.dismiss();
    });
  }

  goToPostPage(post?, postOf?) {
    if (post) {
      post.playerId = postOf.playerId;
      post.profilePic = postOf.profilePic;
      this.navCtrl.navigateRoot(["PostPage", { post: post }]);
    } else {
      this.navCtrl.navigateRoot("PostPage");
    }
  }

  async showToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }

}
