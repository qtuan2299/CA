import { Component } from "@angular/core";
import { NavParams, NavController, AlertController, Nav } from "ionic-angular";
import { User } from "../../services/globalData";
import { Token } from "../../services/token";
import { PageLoginPage } from "../page-login/page-login";

@Component({
  templateUrl:"profile.html",
  selector:"profile"
})

export class Profile{
  user:any;
  constructor(NavP:NavParams,
      public NavCtrl:NavController,
      public gd:User,
      public token:Token,
      public alertCtrl:AlertController,
      ){
        console.log("get variable global: ",gd.getUser());        
        this.user = gd.getUser();
        if(token.getToken()==""){
          let alert = alertCtrl.create({
            title: 'Notification',
            message: 'You are not log in! \n Log in now!',
            buttons:[
              {
                text: 'Cancel',
                role: 'canel',
                handler: () => {
                  
                }
              },
              {
                text: 'Log In',
                handler: () => {
                  NavCtrl.push(PageLoginPage)
                }
              }
            ]
          });
          alert.present();
        }
    }
}