import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../services/login-service.service';
import {NavController} from '@ionic/angular';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  constructor(private service : LoginServiceService, private navctrl : NavController ,
              private fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['socialapp@test.com', Validators.required],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(){
    let email = this.loginForm.controls['email'].value
    let password = this.loginForm.controls['password'].value
    this.service.login(email,password)
  }

  goToSignup() {
    this.navctrl.navigateForward("signup");
  }
  goToForgotPassword() {
    this.navctrl.navigateForward("ForgetPasswordPage");
  }

  ionViewWillEnter(){
let tabs = document.querySelectorAll('.tabber');
if(tabs != null){
  Object.keys(tabs).map((key)=>{
    tabs[key].style.transform = 'translateY(56px)'
  })
}
if(localStorage.getItem('uid') != null){
  this.navctrl.navigateRoot('TabsPage')
}
  }

  
}
