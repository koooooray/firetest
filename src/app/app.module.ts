import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";
import {AuthenticationService} from "../providers/authentication-service";
import {SigninPage} from "../pages/signin-page/signin-page";
import {LoginPage} from "../pages/login-page/login-page";
import {ForgotPasswordPage} from "../pages/forgot-password-page/forgot-password-page";
import {SigninComponent} from "../components/signin-component/signin-component";

export const firebaseConfig = {
  apiKey: "AIzaSyBR6aMOSmc48hcch6omz1_2WYJPc1kSsdY",
  authDomain: "firetest-f3e2a.firebaseapp.com",
  databaseURL: "https://firetest-f3e2a.firebaseio.com",
  storageBucket: "firetest-f3e2a.appspot.com",
  messagingSenderId: "456372354543"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninComponent,
    LoginPage,
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
