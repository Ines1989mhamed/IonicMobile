import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../../models/user";
import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  passwordType : string ='password';
  passwordShown : boolean=false;
  user = {} as User;

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
  }
 
   login() {
    
        this.navCtrl.setRoot('MenuPage');
    
  }
  togglePassword()
  {
    if(this.passwordShown){
      this.passwordShown=false;
      this.passwordType='password;'
    }
    else{
      this.passwordShown=true;
      this.passwordType='text';
    }
  }
}