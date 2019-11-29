import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FollowingListService } from '../../services/following-list.service';
import { async } from 'q';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {  } from 'rxjs/add/operator/take';
@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.page.html',
  styleUrls: ['./following-list.page.scss'],
})
export class FollowingListPage implements OnInit {
	private uid: string;
	public followings;

	constructor(public navCtrl: NavController,
		private followingService: FollowingListService,
		private loadingCtrl: LoadingController) {
      this.constructorfn();
	}
  ngOnInit() {
  }
  async constructorfn(){
    this.uid = localStorage.getItem('uid');
		let loader = await this.loadingCtrl.create({
			message: 'Please wait...'
		});
		loader.present().then(() => {
			this.followings = this.followingService.getFollowings(this.uid).valueChanges().pipe(map(items => {
				return items.map((item: any) => {
					item.followingInfo = this.followingService.userInfo(item.followingTo).valueChanges();
					return { ...item };
				});
			}));
		}).then(() => {
			loader.dismiss();
		})
  }
	goToOthersProfile(uid) {
		this.navCtrl.navigateRoot(["others-profile",uid]);
	}

	async unfollowUser(ouid) {
		let loader = await this.loadingCtrl.create({
			message: 'Unfollowing...'
		});
		loader.present();
		this.followingService.unfollowUser(ouid, this.uid).then(() => {
			loader.dismiss();
		});
	}

}
