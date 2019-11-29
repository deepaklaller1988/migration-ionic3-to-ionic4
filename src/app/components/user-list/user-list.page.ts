import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { UserListService } from '../../services/user-list.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map,takeWhile} from 'rxjs/operators';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  private userList;
	public uid: string;
	public users;

	constructor(public navCtrl: NavController,
		private userListService: UserListService,
    //private navParams: NavParams
    private router: Router,
    private route: ActivatedRoute
    ) {

		if (JSON.parse(this.route.snapshot.queryParams['users'])) {
			this.uid = localStorage.getItem('uid');
			this.userList = JSON.parse(this.route.snapshot.queryParams['users']);
			this.users = [];
			this.userList.forEach(item => {
				this.getDetailedInfo(item);
			});
		}
	}
  ngOnInit() {
  }
	async getDetailedInfo(item) {
		if (item.likedBy) {
			await this.users.push(this.userListService.getUser(item.likedBy).valueChanges().pipe(map(items => {
				return items.map((usr: any) => {
					usr.checkIsFollowing = this.userListService.checkIsFollowing(usr.uid, this.uid).valueChanges();
					return { ...usr };
				});
			})));
		}
		if (item.commentedBy) {
			await this.users.push(this.userListService.getUser(item.commentedBy).valueChanges().pipe(map(items => {
				return items.map((usr: any) => {
					usr.checkIsFollowing = this.userListService.checkIsFollowing(usr.uid, this.uid).valueChanges();
					return { ...usr };
				});
			})));
		}
		if (item.sharedBy) {
			await this.users.push(this.userListService.getUser(item.sharedBy).valueChanges().pipe(map( items => {
				return items.map((usr: any) => {
					usr.checkIsFollowing = this.userListService.checkIsFollowing(usr.uid, this.uid).valueChanges();
					return { ...usr };
				});
			})));
		}
		if (item.followedBy) {
			await this.users.push(this.userListService.getUser(item.followedBy).valueChanges().pipe(map(items => {
				return items.map((usr: any) => {
					usr.checkIsFollowing = this.userListService.checkIsFollowing(usr.uid, this.uid).valueChanges();
					return { ...usr };
				});
			})));
		}
		if (item.followingTo) {
			await this.users.push(this.userListService.getUser(item.followingTo).valueChanges().pipe(map(items => {
				return items.map((usr: any) => {
					usr.checkIsFollowing = this.userListService.checkIsFollowing(usr.uid, this.uid).valueChanges();
					return { ...usr };
				});
			})));
		}
	}

	followUnfollowUser(isFollowing: boolean, ouid) {
		if (isFollowing) {
			this.userListService.unfollowUser(ouid, this.uid).then();
		} else {
			this.userListService.followUser(ouid, this.uid).then();
		}
	}

	goToOthersProfile(uid) {
		if (uid == this.uid) {
			this.goToProfile();
		} else {
			this.navCtrl.navigateRoot(["others-profile", uid ]);
		}
	}

	goToProfile() {
		this.navCtrl.navigateRoot("user-profile");
	}
  

}
