import {Component, Output} from '@angular/core';
import {FireAppUser, TestUser} from "../../app/models/fireappuser.model";
import {AuthenticationService} from "../../providers/authentication-service";
import {SignInError} from "../../app/models/singinerror.model";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthenticationBasePage} from "../../pages/AuthenticationBasePage";

@Component({
  selector: 'div[page-signin-page]',
  templateUrl: 'signin-component.html'
})
export class SigninComponent extends AuthenticationBasePage{

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
    super();
    //this.signInForm = formBuilder.group(this.signInUser);
    this.signInForm = formBuilder.group({
      Email: ["", Validators.compose([Validators.required, Validators.email])],
      Password: ["", Validators.required],
      ConfirmPassword: ["", Validators.required]
    }, {validator: this.areEqual('Password', 'ConfirmPassword')});

    this.signInForm.statusChanges.subscribe((val)=>{
      console.log(val);
    })
  }

  private signInForm: FormGroup;
  private isUsernameTaken: boolean;
  private signInUser: FireAppUser = TestUser.Empty;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  };

  signIn():void{
    if(this.signInUser.Email && this.signInUser.PasswordConfirm && this.signInUser.PasswordConfirm && this.signInUser.PasswordConfirm === this.signInUser.Password){
      this.authenticationService.CreateUser(this.signInUser.Email, this.signInUser.Password)
        .then((auth)=>{
          console.log(auth);
        }).catch((err: SignInError)=>{
        if(err.code === "auth/email-already-in-use"){
          this.isUsernameTaken = true;
        }
      });
    }
  }

  areEqual(passKey: string, confirmKey: string){
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passKey];
      let confirmPassword = group.controls[confirmKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }else{
        return {
          mismatchedPasswords: false
        };
      }
    }
  }

  onSubmit(form: NgForm){
    //form.
  }


}
