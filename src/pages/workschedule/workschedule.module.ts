import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Workschedule } from './workschedule';
import { PersonalModule } from '../tab-page-1/tab-page-1.module';
import { Tab2Module } from '../tab-page-2/tab-page-2.module';

@NgModule({
  declarations: [
    Workschedule,
  ],
  imports: [
    IonicPageModule.forChild(Workschedule),
    PersonalModule,
    Tab2Module,
  ],
})
export class WorkscheduleModule { }
