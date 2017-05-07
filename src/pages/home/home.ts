import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from "../../app/models/user.model";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user:User = {
    name: "a@b.com",
    pass: "aaaaaa"
  };
  private isAuthenticated: boolean = false;
  private loggedInUser: firebase.User;

  constructor(public navCtrl: NavController, private af: AngularFire){
    this.af.auth.subscribe((auth)=>{
      if(!auth){
        return;
      }
      this.loggedInUser = auth.auth;
      this.isAuthenticated = true;
    });
  }

  onLogin(){
    this.af.auth.login({
        email: this.user.name,
        password: this.user.pass,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      })
  }

}
