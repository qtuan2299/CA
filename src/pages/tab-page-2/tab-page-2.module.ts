import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab2 } from './tab-page-2';
import { NotifidetailModule } from '../notificationdetail/notifidetail.module';




@NgModule({
  declarations: [
    Tab2
  ],
  imports: [
    IonicPageModule.forChild(Tab2),
    NotifidetailModule,
  ],
  entryComponents: [Tab2]
 
})
export class Tab2Module { }
