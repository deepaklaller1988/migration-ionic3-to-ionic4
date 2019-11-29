import { Component, OnInit } from '@angular/core';
import {NavController, NavParams } from '@ionic/angular';
import { CommentsService } from '../../services/comments.service';
import { Router,NavigationExtras ,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {  } from 'rxjs/add/operator/take';
// import { Content } from '@ionic/angular/index';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  //@ViewChild(Content) content: Content;

  private uid: string;
  public post: any;
  public comment: string;
  public comments: any = [];
  private loggedinUserInfo;
 
  constructor(private navCtrl: NavController,
    //private navParams: NavParams,
    private router: Router,
    private route: ActivatedRoute,
    private commentService: CommentsService,
    private homeService: HomeService) {
    this.uid = localStorage.getItem('uid');
    //this.post = this.navParams.get('post');
    console.log('>>>>>',this.route.snapshot.queryParams);
    this.post = JSON.parse(this.route.snapshot.queryParams['post']);

    this.post.postOf = this.homeService.getUserInfo(this.post.postedBy).valueChanges();
    this.homeService.getUserInfo(this.uid).valueChanges().subscribe(res => {
      this.loggedinUserInfo = res;
    }, error => { });
    this.comments = this.commentService.getComments(this.post.postId).snapshotChanges().pipe( map(items => {
      return items.map((item: any) => {
        let data = item.payload.doc.data();
        const commentId = item.payload.doc.id;
        data.commentedByInfo = this.homeService.getUserInfo(data.commentedBy).valueChanges();
        return { commentId, ...data };
      }); 
    }));
  }
  ngOnInit() {
  }
  postComment(post, playerId) {
    this.commentService.postComment(this.loggedinUserInfo.username, playerId, post.postId, post.postedBy, this.comment, this.uid).then(() => {
      this.comment = '';
      this.scrollToBottom();
    });
  }

  scrollToBottom() { //called from html & ts
    //this.content.scrollToBottom();
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

  userDetails() {
    this.navCtrl.navigateRoot('user-profile');
  }

  likePost(post, liked, playerId) {
    if (liked) {
      this.homeService.unlikePost(post.postId, this.uid).then();
    } else {
      this.homeService.likePost(this.loggedinUserInfo.username, playerId, post.postId, post.postedBy, this.uid).then();
    }
  }

  

}
