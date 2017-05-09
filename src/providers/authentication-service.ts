import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFire} from "angularfire2";


@Injectable()
export class AuthenticationService {

  constructor(private af: AngularFire) {
    console.log('Hello AuthenticationService Provider');
  }

  public CreateUser(email:string, pass:string){
    return this.af.auth.createUser({
      email: email,
      password: pass
    });

  }

}
