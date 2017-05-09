import {EventEmitter, Output} from "@angular/core";
export class AuthenticationBasePage{
  constructor(){}

  @Output()
  private authenticationStateChanged = new EventEmitter();

  onStateChanged(newState:string):void{
    console.log(newState);
    this.authenticationStateChanged.emit(newState);
  }

}
