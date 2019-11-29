import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  public oldPassword: string;
  public newPassword: string;
  public confirmPassword: string;

  constructor(private afAuth: AngularFireAuth,
    private toastCtrl: ToastController) { }
  ngOnInit() {}
  
  onClickSave() {
    if ((this.newPassword.length > 5)) {
      if ((this.newPassword == this.confirmPassword)) {
        this.afAuth.auth.currentUser.updatePassword(this.newPassword)
          .then(res => {
            this.showToast('Your password has been changed');
            this.oldPassword = '';
            this.newPassword = '';
            this.confirmPassword = '';
          }).catch(error => {
            this.showToast(error.message);
          });
      } else {
        this.showToast('confirm Password doesn\'t match!');
      }
    } else {
      this.showToast('New password must be six character long');
    }
  }

  async showToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      position: 'bottom'
    });
    toast.present();
  }


}
