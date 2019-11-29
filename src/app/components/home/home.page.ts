import { Component, OnInit } from '@angular/core';
import {NavController, LoadingController, ToastController, Events } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {  } from 'rxjs/add/operator/take';
//import 'rxjs/add/operator/take';
//@IonicPage()
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public followedUsersPost: Observable<any>;
  public loggedinUserInfo;
  public uid: string;
  public msgCount: number = 0;
  public isPostsNotAvailable: boolean = false;

  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private homeService: HomeService,
    private toastCtrl: ToastController,
    private events: Events,
    private router: Router
    ) {
      this.construfun();
  }

//nnnnnn
  ngOnInit() {
  }
  async construfun() {
    this.uid = localStorage.getItem('uid');
    let loader = await this.loadingCtrl.create({
      message: 'Preparing! Please wait...'
    });
    loader.present();
    this.homeService.getUserInfo(this.uid).valueChanges().subscribe(res => {
      this.loggedinUserInfo = res;
      this.getFollowedUsersPost(this.uid);
      loader.dismiss();
    }, error => {
      this.navCtrl.navigateRoot(['login', { tabsHideOnSubPages: true }]);
    });
  }
  async showToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }

  doRefresh(uid, refresher) {
    this.getFollowedUsersPost(uid, refresher)
  }

  ionViewWillEnter() {
    if (localStorage.getItem('uid') == null) {
      this.navCtrl.navigateRoot(['login', { tabsHideOnSubPages: true }]);
    } else {
      this.uid = localStorage.getItem('uid');
      this.getUnreadMessageCount();
      this.homeService.getNotificationCount(localStorage.getItem('uid')).valueChanges()
      .subscribe(res => {
        this.events.publish('notificationCount', res.length);
      });
    }
  }

  getUnreadMessageCount() {

    this.homeService.getMessageCount(this.uid).valueChanges().subscribe(items => {
      return items.map((item: any) => {
        this.msgCount = 0;
        const chatId = item.chatId;
        delete item.chatId;
        delete item[this.uid];
        delete item['createdAt'];
        const keys = Object.keys(item);
        const receiverId = keys[0];
        this.homeService.getUnreadMessageCount(chatId, receiverId).valueChanges().subscribe((res: any) => {
          if (res.length > 0) {
            this.msgCount = 1;
          }
        });
      });
    });
  }
  async getFollowedUsersPost(uid, refresher?) {
    this.followedUsersPost = await this.homeService.getPosts(uid).pipe(map( (items: any) => {
      if (items.message) {
        this.isPostsNotAvailable = true;
      } else {
        return items.map((item: any) => {
          const postId = item.postId;
          let data = item;
          data.liked = this.homeService.checkIsLiked(postId, this.uid).valueChanges();
          data.postOf = this.homeService.getUserInfo(data.postedBy).valueChanges();
          data.likedBy = this.homeService.getLikes(postId).valueChanges();
          data.commentedBy = this.homeService.getComments(postId).valueChanges();
          data.sharedBy = this.homeService.getShares(postId).valueChanges();
          if (data.isSharedPost) {
            data.whosePostInfo = this.homeService.getUserInfo(data.whosePost).valueChanges();
          }
          return { postId, ...data };
        });
      }
    }));
    if (refresher) {
      refresher.complete();
    }
  }

  likePost(post, liked, playerId) {
    if (liked) {
      this.homeService.unlikePost(post.postId, this.uid).then();
    } else {
      this.homeService.likePost(this.loggedinUserInfo.username, playerId, post.postId, post.postedBy, this.uid).then();
    }
  }

  goToProfile() {
    this.navCtrl.navigateRoot("user-profile");
  }

  goToMessage() {
    this.navCtrl.navigateRoot("message");
  }

  goToCommentPage(post) {
    console.log(post);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        post: JSON.stringify(post)
      }
    };
    this.navCtrl.navigateRoot(["comments"], navigationExtras);
  }

  goToUserList(users) {
    console.log('form',users);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        users: JSON.stringify(users)
      }
    };
    this.navCtrl.navigateRoot(["user-list"], navigationExtras);
  }

  goToPostPage(post?, postOf?) {
    if (post) {
      post.playerId = postOf.playerId;
      post.profilePic = postOf.profilePic;
      let navigationExtras: NavigationExtras = {
        queryParams: {
          post: JSON.stringify(post)
        }
      };
      this.router.navigate(['post'],navigationExtras );
    } else {
      this.router.navigate(['post']);
    }
  }

  userDetails(uid) {
    if (uid == this.uid) {
      this.goToProfile();
    } else {
      this.navCtrl.navigateRoot(["others-profile",uid ]);
    }
  }

}
