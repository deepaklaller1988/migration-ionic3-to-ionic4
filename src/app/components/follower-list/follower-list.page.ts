import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FollowerListService } from '../../services/follower-list.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {  } from 'rxjs/add/operator/take';
@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.page.html',
  styleUrls: ['./follower-list.page.scss'],
})
export class FollowerListPage implements OnInit {
  public followers;
	private uid: string;

	constructor(public navCtrl: NavController,
		private followerService: FollowerListService) {
		this.uid = localStorage.getItem('uid');
		this.followers = this.followerService.getFollowers(this.uid).valueChanges().pipe(map(items => {
			return items.map((item: any) => {
				item.followerInfo = this.followerService.userInfo(item.followedBy).valueChanges();
				return { ...item };
			});
		}));
	}

	goToOthersProfile(uid) {
		this.navCtrl.navigateRoot(["others-profile",uid ]);
	}

	goToChat(uid, username) {
		this.navCtrl.navigateRoot(["chat",uid,username ]);
	}

  ngOnInit() {
  }

}
