import { Component } from '@angular/core';
import {AuthenticationBasePage} from "../AuthenticationBasePage";
import {FireAppUser} from "../../app/models/fireappuser.model";
import {AuthMethods, AuthProviders, AngularFire} from "angularfire2";
@Component({
  selector: 'div[page-login-page]',
  templateUrl: 'login-page.html',
})
export class LoginPage extends AuthenticationBasePage {

  constructor(private af: AngularFire) {
    super();
  }


  private user:FireAppUser = {
    Email: "aaa@bbbcccasd.com",
    Password: "aaaaaa"
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(){
    this.af.auth.login({
        email: this.user.Email,
        password: this.user.Password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      })
  }}
