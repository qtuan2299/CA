import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Notifi } from './notification';
import { NotifidetailModule } from '../notificationdetail/notifidetail.module';




@NgModule({
  declarations: [
    Notifi
  ],
  imports: [
    IonicPageModule.forChild(Notifi),
    NotifidetailModule

  ]
})
export class NotifiModule { }
