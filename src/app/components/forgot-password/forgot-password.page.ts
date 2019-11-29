import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { ForgetPasswordService } from '../../services/forget-password.service';
import { async } from 'q';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public email: string;

  constructor(public navCtrl: NavController,
    private fpService: ForgetPasswordService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  goToLogin() {
    this.navCtrl.navigateRoot(["LoginPage", { tabsHideOnSubPages: true }]);
  }

  reqPassword() {
    if ((this.email.length > 3)) {
      this.presentConfirm('Confirm email', 'Password reset link will be sent to ' + this.email);
    } else {
      this.showToast('Please enter valid email');
    }
  }

  async showToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'bottom'
    });
    toast.present();
  }

  async presentConfirm(title, message) {
    let alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.showToast('You can try again!');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.fpService.forgetPassword(this.email).then((res: any) => {
              this.showToast('Password reset link has been sent to ' + this.email);
            }).catch(error => {
              this.showToast(error.message);
            });
          }
        }
      ]
    });
    alert.present();
  }

  ionViewWillEnter() { //required to hide tabs on this
    let tabs = document.querySelectorAll('.tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.transform = 'translateY(56px)';
      });
    }
  }

  ionViewDidLeave() { //required to show tabs on home page
    let tabs = document.querySelectorAll('.tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.transform = 'translateY(0)';
      });
    }
  }



}
