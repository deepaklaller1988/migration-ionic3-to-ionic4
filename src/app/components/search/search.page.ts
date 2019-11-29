import { Component, OnInit } from '@angular/core';
import {NavController, LoadingController, ToastController, Events } from '@ionic/angular';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {  } from 'rxjs/add/operator/take';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public users;
	public uid: string;
	public usersCopy;

	constructor(public navCtrl: NavController,
		public searchService: SearchService,
		private loadingCtrl: LoadingController) {
			this.constructorfn();
		
  }
  
  ngOnInit() {
  }
  async constructorfn(){
    let loader = await this.loadingCtrl.create({
			message: 'Getting list...'
		});
		loader.present().then(() => {
			this.uid = localStorage.getItem('uid');
			this.users = this.usersCopy = this.searchService.usersList().valueChanges().pipe(map( items => {
				return items.map((item: any) => {
					item.checkIsFollowing = this.searchService.checkIsFollowing(item.uid, this.uid).valueChanges();
					return { ...item };
				});
			}));
		}).then(() => {
			loader.dismiss();
		});
  }
	onEnterSearch(event) {
		let val = event.target.value;
		if (val && val.trim() != '') {
			this.users = this.searchService.SearchUser(val).valueChanges().pipe(map( items => {
				return items.map((item: any) => {
					item.checkIsFollowing = this.searchService.checkIsFollowing(item.uid, this.uid).valueChanges();
					return { ...item };
				});
			}));
		} else {
			this.users = this.usersCopy;
		}
	}

	followUnfollowUser(isFollowing: boolean, ouid) {
		if (isFollowing) {
			this.searchService.unfollowUser(ouid, this.uid).then();
		} else {
			this.searchService.followUser(ouid, this.uid).then();
		}
	}

	goToOthersProfile(uid) {
		this.navCtrl.navigateRoot(["OthersProfilePage", { uid: uid }]);
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
}
