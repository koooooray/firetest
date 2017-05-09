import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from "../../app/models/user.model";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {AuthenticationStates} from "../../app/models/AuthenticationStates";
import {authDataToAuthState} from "angularfire2/auth";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private isAuthenticated: boolean = false;
  private loggedInUser: firebase.User;
  private pageState: string = AuthenticationStates.Welcome;

  constructor(public navCtrl: NavController, private af: AngularFire){
    this.af.auth.subscribe((auth)=>{
      console.log("HERE", auth);
      this.loggedInUser = auth ? auth.auth : null;
      this.isAuthenticated = auth !== null;
    });
  }

  onStateChanged(newState:string):void{
    this.pageState = newState;
  }



  onLogout(){
    console.log(this.af.auth.logout());
  }

}
