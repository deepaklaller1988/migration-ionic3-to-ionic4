import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import {SignUpService} from '../../services/sign-up.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup;
  constructor(private navctrl : NavController ,private formBuilder : FormBuilder,private signUpService: SignUpService) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  ngOnInit() {
    
  }

  onRegister() {
    let username = this.signupForm.controls['username'].value;
    let password = this.signupForm.controls['password'].value;
    let confirmPassword = this.signupForm.controls['confirmPassword'].value;
    let email = this.signupForm.controls['email'].value;
    this.signUpService.registerUser(username, email, password, confirmPassword);
  }

  goToLogin() {
    this.navctrl.navigateRoot(["LoginPage", { tabsHideOnSubPages: true }]);
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
