import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuService } from '../services/menu-services';
import { LoadingService } from '../services/loading-services';
import { MenuController } from '../controller/menu-controller';
import { API } from '../services/api-service';
import { HttpModule } from '@angular/http';
import { NewsdetailService } from '../services/newsdetail-service';
import { NewsdetailModule } from '../pages/newsdetail/newsdetail.module';
import { NotifiModule } from '../pages/notification/notification.module';
import { DataJsonController } from '../controller/datajsoncontroller';
import { DataJsonModel } from '../model/dataJson-model';
import { Key } from '../key/key';
import { NotificationService } from '../services/notification-service';
import { WorkScheduleService } from '../services/workschedule-service';
import { WorkscheduleModule } from '../pages/workschedule/workschedule.module';
import { HomeService } from '../services/home-service';
import { HTTP } from '@ionic-native/http';
import { PageLoginPage } from '../pages/page-login/page-login';
import { PageLoginPageModule } from '../pages/page-login/page-login.module';
import { ProfileModule } from '../pages/profile/profile.module';
import { User } from '../services/globalData';
import { Token } from '../services/token';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    NewsdetailModule,
    NotifiModule,
    WorkscheduleModule,
    PageLoginPageModule,
    ProfileModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MenuService,
    LoadingService,
    MenuController,
    API,
    DataJsonController,
    DataJsonModel,
    Key,
    NewsdetailService,
    NotificationService,
    WorkScheduleService,
    HomeService,
    User,
    Token,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
