import { Component,ViewChild } from "@angular/core";

import { WorkScheduleService } from "../../services/workschedule-service";
import { Person } from '../tab-page-1/tab-page-1';
import { Tab2 } from '../tab-page-2/tab-page-2';
import { Notifi } from '../notification/notification';

@Component({
    templateUrl:"workschedule.html",
    providers: [WorkScheduleService]

})
export class Workschedule{ 
    data:any;
    params:any;
    @ViewChild('tabs') tabRef: any;
    tab1Root=Person;
    tab2Root=Tab2;

    constructor( private workschduleservice:WorkScheduleService ,){
        this.params=this.workschduleservice.getTitle();
        this.data=this.workschduleservice.getDataForLayout1();
        
    }

    
}