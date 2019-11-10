import { Component } from "@angular/core";
import { NavParams, NavController, reorderArray } from "ionic-angular";
import { DataJsonController } from "../../controller/datajsoncontroller";
import { Key } from "../../key/key";
import { Notifidetail } from "../notificationdetail/notifidetail";
import { Tab2Module } from "./tab-page-2.module";
import { WorkScheduleService } from "../../services/workschedule-service";
import { NotificationService } from "../../services/notification-service";
@Component({
    templateUrl:"tab-page-2.html",
    providers: [WorkScheduleService,NotificationService]

})
export class Tab2{ 
    params:any;
    page:any;
    item:any;

    constructor( NavP:NavParams,public NavCrtl:NavController ,private datajsonCtrl: DataJsonController, private key:Key){
        
        this.item=NavP.get("item");
        this.page=this.datajsonCtrl.HandleViewEvent(this.key.Get_Notification_Page);
        this.params=this.datajsonCtrl.HandleViewEvent(this.key.Get_Notification_Title);
    }

    reorderItems = (indexes): void => {
        this.page = reorderArray(this.page, indexes);
    }
}
