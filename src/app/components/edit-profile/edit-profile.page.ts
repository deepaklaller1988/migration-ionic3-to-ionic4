import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { EditProfileService } from '../../services/edit-profile.service';
import * as firebase from 'firebase';
import { UserService } from '../../services/user.service';
import { async } from 'q';
import { concat } from 'bytebuffer';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  private uid: string;
	public user: any = {
		username: '',
		email: '',
		mobileNumber: '',
		phoneNumber: '',
		about: '',
		birthDate: '',
		gender: 'male',
		education: {
			qualification: '',
			University: '',
			profile: '',
			company: '',
		},
		currentAddress: {
			street: '',
			city: '',
			pincode: '',
			country: ''
		},
		permanentAddress: {
			street: '',
			city: '',
			pincode: '',
			country: ''
		}
	}

	public flag: number;

	constructor( public navCtrl: NavController,
		public editProfileService: EditProfileService,
		private toastCtrl: ToastController,
		private loadingCtrl: LoadingController,
		private userService: UserService) {
		this.uid = localStorage.getItem('uid');
		this.editProfileService.getUserDetails(this.uid).valueChanges()
			.subscribe((res: any) => {
				this.user = res;
				console.log(this.user.gender);
			});
	}
  ngOnInit() {
  }
  onChangeHandler($event) {
    this.user.gender = $event.target.value;
  }
	onSubmit(form: NgForm) {
		console.log("jjsjhs",this.user.gender);
		if ((this.user.mobileNumber.length > 9) && (this.user.mobileNumber.length < 13)) {
			this.editProfileService.submitUserDetails(this.user, this.uid)
				.then(res => {
					this.navCtrl.pop();
				});
		} else {
			this.showToast('Please enter valid mobile number');
		}
	}

	selectImage(event, flag) {
		if (event.target.files && event.target.files[0]) {
			var reader = new FileReader();
			reader.onload = (event: any) => {
				this.flag = flag;
				this.uploadImage();
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	}

	async uploadImage() {
		let loader = await this.loadingCtrl.create({
			message: 'Changing Image...'
		});
		loader.present();
		let storageRef = firebase.storage().ref();
		let file;
		if (this.flag == 1) {
			file = (<HTMLInputElement>document.getElementById('inputFileCoverEdit')).files[0];
		} else {
			file = (<HTMLInputElement>document.getElementById('inputFileProfileEdit')).files[0];
		}
		let imageName = Date.now().toString() + file.name;
		storageRef.child('users/' + this.uid + '/profile/' + imageName)
			.put(file, { contentType: 'image/*' }).then(res => {
				storageRef.child('users/' + this.uid + '/profile/' + imageName).getDownloadURL()
					.then(url => {
						setTimeout(() => {
							storageRef.child('thumb/users/' + this.uid + '/profile/' + 'thumb_' + imageName).getDownloadURL()
								.then(thumbUrl => {
									this.userService.changeProfilePic(url, this.flag, this.uid, thumbUrl)
										.then(res => {
											this.showToast('Image has been Changed!');
											loader.dismiss();
										}).catch(error => {
											this.showToast(error.message);
											loader.dismiss();
										});
								});
						}, 7000);
					}).catch(error => {
						this.showToast(error.message);
						loader.dismiss();
					});
			}).catch(error => {
				this.showToast(error.message);
				loader.dismiss();
			});
	}

	async showToast(message) {
		let toast =await this.toastCtrl.create({
			message: message,
			duration: 4000,
			position: 'bottom'
		});
		toast.present();
	}

}
