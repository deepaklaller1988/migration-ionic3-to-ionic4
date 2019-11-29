import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  constructor(private authService: AngularFireAuth) {  }

    forgetPassword(email){
        return this.authService.auth.sendPasswordResetEmail(email);
    }
}
