import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from '@ionic/angular';
import { HomeService } from '../../services/home.service';
import { OthersProfileService } from '../../services/others-profile.service';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-others-profile',
  templateUrl: './others-profile.page.html',
  styleUrls: ['./others-profile.page.scss'],
})
export class OthersProfilePage implements OnInit {

  public profile: string = 'about'; //segment selector
  private ouid: string; //other user id
  private luid: string; //loggedin user id
  public otherUserInfo;
  public otherUserDetailedInfo;
  public posts: Array<{}>;
  public postImages: Array<string>;
  public followedBy;
  public followingTo;
  public isFollowed;

  constructor(private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private userService: OthersProfileService,
    private router: Router,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private homeService: HomeService) {
    
  }
  ngOnInit() {
  }
  async constructorfn(){
    let loader = await this.loadingCtrl.create({
      message: 'Reading profile...'
    });
    loader.present();
    this.ouid = this.route.snapshot.paramMap.get('uid');
    this.luid = localStorage.getItem('uid');
    this.otherUserInfo = this.userService.otherUserInfo(this.ouid).valueChanges();
    this.otherUserDetailedInfo = this.userService.otherUserDetailedInfo(this.ouid).valueChanges(); //for other user's info
    this.followedBy = this.userService.getFollowers(this.ouid).valueChanges();
    this.followingTo = this.userService.getFollowings(this.ouid).valueChanges();
    this.isFollowed = this.userService.checkIsFollowing(this.ouid, this.luid).valueChanges();
    this.userService.otherUserPosts(this.ouid).snapshotChanges().subscribe(res => {
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
      loader.dismiss();
    }, error => {
      this.showToast(error.message);
    });
  }
  goToUserList(users) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        users: JSON.stringify(users)
      }
    };
    this.navCtrl.navigateRoot(["user-list"], navigationExtras);
  }

  onClickPostsCount() {
    this.profile = 'post';
  }

  onClickPhotosCount() {
    this.profile = 'photos-gallery';
  }

  followUnfollowUser(isFollowed) {
    if (isFollowed) {
      this.userService.unfollowUser(this.ouid, this.luid).then();
    } else {
      this.userService.followUser(this.ouid, this.luid).then();
    }
  }

  async showToast(message) {
    let toast = await  this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }

  async goToChat(canDoMessage: boolean, username: string) {
    if (!canDoMessage) {
      let loader =await  this.loadingCtrl.create({
        message: 'Checking...'
      });
      loader.present();
      this.userService.checkIsFollowing(this.luid, this.ouid).valueChanges().subscribe((res: any) => {
        if ((res.length == 1)) {
          this.navCtrl.navigateRoot(["chat", this.ouid,  username ]);
        } else {
          this.showToast('User should be your follower to Message');
        }
        loader.dismiss();
      });
    } else {
      this.navCtrl.navigateRoot(["chat", this.ouid,  username ]);
    }
  }

}
