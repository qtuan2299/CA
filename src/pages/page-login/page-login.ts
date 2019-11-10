import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HomePage } from '../home/home';
import { User } from '../../services/globalData';
import { Token } from '../../services/token';

/**
 * Generated class for the PageLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-login',
  templateUrl: 'page-login.html',
})
export class PageLoginPage {
  //variable to test, don't worry
  status:any;
  data:any;
  header:any;
  check:any;
  //

  public username:string;
  public password:string;
  public isUsernameValid=true;
  public isPasswordValid=true;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public http:HTTP, 
    public gd:User, 
    public token:Token,
    public menuCtrl: MenuController ) {
      this.menuCtrl.enable(false,'myMenu')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageLoginPage');
  }
  getData(){
    this.http.setDataSerializer('json');
    this.http.post('http://192.168.1.221:8003/api/TokenAuth/Authenticate',{
      "userNameOrEmailAddress": this.username, 
      "password" : this.password,
      "rememberClient": 'true'
    },{})
    .then(data => {
      let Data = JSON.parse(data.data)
      if(data.status == 200){
        //let accessToken = Data.result.accessToken;
        this.token.setToken(Data.result.accessToken)
        let userId = Data.result.userId;
        let getUrlFromId = 'http://192.168.1.221:91/api/services/app/User/Get?Id='+userId;
        this.http.get(getUrlFromId,{
          // nothing
        },{
          'Authorization':'Bearer '+this.token.getToken(),
        }).then(data2=>{
          if(data2.status == 200){
            let Data2 = JSON.parse(data2.data)
            this.gd.setUser(Data2);
            console.log("Data2:",Data2);
            console.log("variable global: ",this.gd);
            this.menuCtrl.enable(true,'myMenu');          
            this.navCtrl.setRoot(HomePage);
          }
        }).catch(err => {
          console.log("error from get id user",err.error);
        })
      }
      else{
        this.isUsernameValid = false;
        this.isPasswordValid = false;
      }
    })
    .catch(error => {
        console.log("error page-login.ts: ",error.error);        
    })
  }
  SkipPage(){
    this.menuCtrl.enable(true,'myMenu');
    this.navCtrl.setRoot(HomePage);
  }
}
