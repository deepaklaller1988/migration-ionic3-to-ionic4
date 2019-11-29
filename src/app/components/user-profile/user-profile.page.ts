import { Component, OnInit } from '@angular/core';
import {NavController, ToastController, AlertController} from '@ionic/angular';
import { HomeService } from '../../services/home.service';
import { UserService } from '../../services/user.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  
  public profile: string = 'about'; //segment selector
  public loggedinUserinfo;
  public flag: number;  // flag 1 for cover & 0 for profile
  public posts: Array<{}>;
  public postImages: string[];
  private uid: string;
  public followedBy;
  public followingTo;
  public detailedUserInfo;

  constructor(private navCtrl: NavController,
    public userService: UserService,
    private toastCtrl: ToastController,
    private homeService: HomeService,
    private alertCtrl: AlertController) {
    this.uid = localStorage.getItem('uid');
    this.loggedinUserinfo = this.homeService.getUserInfo(this.uid).valueChanges(); // user's details
    this.followedBy = this.userService.getFollowers(this.uid).valueChanges();
    this.followingTo = this.userService.getFollowings(this.uid).valueChanges();
    this.detailedUserInfo = this.userService.getUserDetailedInfo(this.uid).valueChanges();
    this.userService.loggedinUserPosts(this.uid).snapshotChanges()  // user's posts
      .subscribe(res => {
        this.posts = [];
        this.postImages = [];
        res.forEach((item: any) => {
          const postId = item.payload.doc.id;
          let data = item.payload.doc.data();
          data.postId = postId;
          data.likedBy = this.homeService.getLikes(postId).valueChanges();
          data.commentedBy = this.homeService.getComments(postId).valueChanges();
          data.sharedBy = this.homeService.getShares(postId).valueChanges();
          this.posts.push(data);
          if (data.isImgPost) {
            this.postImages.push(data.postPic);
          }
        });
      }, error => {
        this.showToast(error.message);
      });
  }
  ngOnInit() {
  }

  async showToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }

  onClickPostsCount() {
    this.profile = 'post';
  }

  onClickPhotosCount() {
    this.profile = 'photos-gallery';
  }

  async onClickRemovePost(id, img, thumb) {
    let alert = await this.alertCtrl.create({
      message: 'Delete post?',
      // message: 'Do you want to remove this post?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //do nothing
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.userService.deletePost(id).then(() => {
              if (img) {
                this.removeImageFromStorage(img);
              }
              if (thumb) {
                this.removeImageFromStorage(thumb);
              }
              this.showToast('Post has been removed');
            });
          }
        }
      ]
    });
    alert.present(); 
  }

  removeImageFromStorage(url) {
    firebase.storage().refFromURL(url).delete().then(res => {
    }).catch(error => this.showToast(error.message));
  }

  goToEditProfile() {
    this.navCtrl.navigateRoot("edit-profile");
  }
  goToFollowingToList() {
    this.navCtrl.navigateRoot("following-list");
  }
  goToFollowedByList() {
    this.navCtrl.navigateRoot("follower-list");
  }
  goToSettings() {
    this.navCtrl.navigateRoot("settings");
  }
  goToUserList(users) {
    this.navCtrl.navigateRoot(["user-list", { users: users }]);
  }

  goToPostPage(post?, postOf?) {
    if (post) {
      post.playerId = postOf.playerId;
      post.profilePic = postOf.profilePic;
      this.navCtrl.navigateRoot(["post", { post: post }]);
    } else {
      this.navCtrl.navigateRoot("post");
    }
  }

}
