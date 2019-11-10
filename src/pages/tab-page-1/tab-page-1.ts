import { Component } from '@angular/core';
import { WorkScheduleService } from '../../services/workschedule-service';
import { NavParams, NavController } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications'

@Component({
  selector: 'date-pipe',
  templateUrl: 'tab-page-1.html',
  providers: [WorkScheduleService, LocalNotifications]
})
export class Person {
  params: any = {};
  d= new Date();       
  time:any;
  constructor(NavP:NavParams,public NavCrtl:NavController ,private workschedule: WorkScheduleService,
    private localNotifications: LocalNotifications,
   
    ) {
   
    this.params=this.workschedule.getDataForLayout1();
    this.schedulelocalNotification();
    
  }
  schedulelocalNotification(){
    for (let i = 0; i < this.params.length; i++) {
       this.time=this.params[i].time.split(':');
       if(this.time[0]-this.d.getHours()==1||this.time[0]-this.d.getHours()==0)
            this.localNotifications.schedule({
            title: this.params[i].title +' '+ this.params[i].time,
             text: this.params[i].title +'\n'+ this.params[i].time
              +'\n'+ this.params[i].person +'\n'
              +this.params[i].pin+'\n'+this.params[i].contact
            // trigger: {at: new Date(this.d.getDay(),this.time[0],this.time[1])},
             // sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
            });    
      }
    }
  testEvent(){
    this.localNotifications.schedule({
      title: 'wtf'
    });
  }
}
