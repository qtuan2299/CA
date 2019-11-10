import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Newsdetail } from './newsdetail';



@NgModule({
  declarations: [
    Newsdetail
  ],
  imports: [
    IonicPageModule.forChild(Newsdetail),

  ],
})
export class NewsdetailModule { }
