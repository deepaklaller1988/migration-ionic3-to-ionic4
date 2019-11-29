import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { HomeService } from '../../services/home.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  private uid: string;
  public post: any;
  private playerId: string;
  public showTextArea: boolean = false;
  private isSharedPost: boolean = false;
  public loggedinUserInfo;
  public localImgUrl: string;
  private postPic: string;
  public postText: string;
  public isImgPost: boolean = false;


  //to get post via params if it's shared post
  constructor(public navCtrl: NavController,
   // private navParams: NavParams,  // IN ionic 4  not working
   private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private homeService: HomeService) {
    this.uid = localStorage.getItem('uid');
    this.post = JSON.parse(this.route.snapshot.queryParams['post']);
  
    if (this.post) {
      this.post.postOf = this.homeService.getUserInfo(this.post.postedBy).valueChanges();
      this.playerId = this.post.playerId;
      this.showTextArea = true;
      this.isSharedPost = true;
      if (this.post.isImgPost) {
        this.isImgPost = true;
      }
    } else {
      this.playerId = 'noId';
    }
  }
  ngOnInit() {
  }

  //to get user info on ViewWillEnteer
  ionViewWillEnter() {
    this.loggedinUserInfo = this.homeService.getUserInfo(this.uid).valueChanges();
  }

  //to show text area
  onClickOption() {
    this.showTextArea = true;
  }

  // to select between shared or new post
  postStatus() {
    if (this.isSharedPost) {
      this.postSharedStatus();
    } else {
      this.postNewStatus();
    }
  }

  //to update shared post info on sharedby collection
  submitPostSharedList() {
    this.postService.submitPostSharedList(this.post.postId, this.uid).then();
  }

  //to store post as a shared post
  async postSharedStatus() {
    let loader = await this.loadingCtrl.create({
      message: 'Sharing Status...'
    });
    loader.present();
    if (this.post.isImgPost) {
      this.postService.storeStatusDetails(this.loggedinUserInfo.username, this.playerId, this.post.postText, this.post.isImgPost, this.isSharedPost, this.post.postPic, this.postText, this.post.postedBy, this.post.postId, this.uid, this.post.postPicThumb)
        .then(res => {
          this.submitPostSharedList();
          this.showToast('Image status has been Shared!');
          this.navCtrl.pop();
          loader.dismiss();
        })
        .catch(error => {
          this.showToast(error.message);
          loader.dismiss();
        });
    } else {
      this.postService.storeStatusDetails(this.loggedinUserInfo.username, this.playerId, this.post.postText, this.post.isImgPost, this.isSharedPost, null, this.postText, this.post.postedBy, this.post.postId, this.uid, this.post.postPicThumb)
        .then(res => {
          this.submitPostSharedList();
          this.showToast('Status has been shared!');
          this.navCtrl.pop();
          loader.dismiss();
        })
        .catch(error => {
          this.showToast(error.message);
          loader.dismiss();
        });
    }
  }

  //to store new post with or without image
 async postNewStatus() {
    let loader = await this.loadingCtrl.create({
      message: 'Posting Your Status...'
    });
    loader.present();
    if (this.isImgPost) {
      let storageRef = firebase.storage().ref();
      let file = (<HTMLInputElement>document.getElementById('inputFileId')).files[0];
      let imageName = Date.now().toString() + file.name;
      storageRef.child('users/' + this.uid + '/posts/' + imageName)
        .put(file, { contentType: 'image/*' })
        .then(res => {
          storageRef.child('users/' + this.uid + '/posts/' + imageName).getDownloadURL()
            .then(url => {
              this.postPic = url;
              setTimeout(() => {
                storageRef.child('thumb/users/' + this.uid + '/posts/' + 'thumb_' + imageName).getDownloadURL().then((thumbUrl) => {
                  this.postService.storeStatusDetails(this.loggedinUserInfo.username, this.playerId, this.postText, this.isImgPost, this.isSharedPost, this.postPic, null, null, null, this.uid, thumbUrl)
                    .then(res => {
                      this.showToast('Image status has been posted!');
                      this.navCtrl.pop();
                      loader.dismiss();
                    })
                    .catch(error => {
                      this.showToast(error.message);
                      loader.dismiss();
                    });
                }).catch(error => {
                  this.showToast(error.message);
                })
              }, 7000);
            }).catch(error => {
              this.showToast(error.message);
              loader.dismiss();
            });
        }).catch(error => {
          this.showToast(error.message);
          loader.dismiss();
        });
    } else {
      this.postService.storeStatusDetails(this.loggedinUserInfo.username, this.playerId, this.postText, this.isImgPost, this.isSharedPost, null, null, null, null, this.uid, null)
        .then(res => {
          this.showToast('Status has been posted!');
          this.navCtrl.pop();
          loader.dismiss();
        })
        .catch(error => {
          this.showToast(error.message);
          loader.dismiss();
        });
    }
  }

  //selected image will be taken as localImgUrl
  selectImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localImgUrl = event.target.result;
        this.isImgPost = true;
      }
      reader.readAsDataURL(event.target.files[0]);
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

  goToProfile() {
    this.navCtrl.navigateRoot("UserProfilePage");
  }

  userDetails(uid) {
    if (uid == this.uid) {
      this.goToProfile();
    } else {
      this.navCtrl.navigateRoot(["OthersProfilePage", { uid: uid }]);
    }
  }

}
