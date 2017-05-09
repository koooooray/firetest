import {Component, Output} from '@angular/core';
import {AuthenticationBasePage} from "../AuthenticationBasePage";
import {FireAppUser, TestUser} from "../../app/models/fireappuser.model";
import {AuthenticationService} from "../../providers/authentication-service";
@Component({
  selector: 'div[page-signin-page]',
  templateUrl: 'signin-page.html',
})
export class SigninPage extends AuthenticationBasePage {

  constructor(private authenticationService: AuthenticationService) {
    super();
  }

  private signInUser: FireAppUser = TestUser.John;
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  signIn():void{
    if(this.signInUser.Email && this.signInUser.PasswordConfirm && this.signInUser.PasswordConfirm && this.signInUser.PasswordConfirm === this.signInUser.Password){
      console.log(this.authenticationService.CreateUser(this.signInUser.Email, this.signInUser.Password));
    }
  }

}
