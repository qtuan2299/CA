import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MenuService } from '../services/menu-services';
import { MenuController } from '../controller/menu-controller';
import { MenuModel } from '../model/menu-model';
import { Workschedule } from '../pages/workschedule/workschedule';
import { Notifi } from '../pages/notification/notification';
import { PageLoginPage } from '../pages/page-login/page-login';
import { Profile } from '../pages/profile/profile';
@Component({
  providers : [MenuService,MenuController,MenuModel],
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PageLoginPage;
  params:any;
  pages:any;
  username:any;

  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu:MenuController) {
    this.initializeApp();
    this.params = menu.HandleViewEventgetID();
    //console.log(menu.HandleViewEventgetID());
    this.pages = menu.HandleViewEventgetAllThems();
    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage }
    // ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    if(page.icon)
    { 
      this.toggleGroup(page);
    }
    else
    {
     this.goPage(page); 
     
    }
  }
  
  selectPageForOpen(value: string): any {
    let page:any;

    switch (value) {
      case "profile":
        page = Profile;
        break;

      case "meeting":
        page = Workschedule;
        break;

    }
    return page;
  }
  toggleGroup(group: any) {
    group.IsActive = !group.IsActive;
  }
  goPage(page) {
    if(page.theme=="news") this.nav.setRoot(HomePage);
    else this.nav.push(this.selectPageForOpen(page.theme));
  }
  isGroupShown(group: any) {
    return group.IsActive;
  }
  HandelControllerEvent(event:any,data:any){
    this.pages =data;
  }
}
