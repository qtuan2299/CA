import { Component } from "@angular/core";
import { NavParams, NavController, reorderArray } from "ionic-angular";
import { NotificationService } from "../../services/notification-service";
import { DataJsonController } from "../../controller/datajsoncontroller";
import { Key } from "../../key/key";
import { Notifidetail } from "../notificationdetail/notifidetail";
@Component({
    templateUrl:"notification.html",
    providers: [NotificationService]

})
export class Notifi{ 
    params:any;
    Item:string;
    Time:string;
    //page: Array<{Item: string, Time: string}>=[];
    page:any;
    item:any;
    animateItems = [];
    animateClass:any;

    constructor( NavP:NavParams,public NavCrtl:NavController ,private datajsonCtrl: DataJsonController, private key:Key){
        
         //this.animateClass = { 'fade-in-left-item': true };
        this.item=NavP.get("item");
        this.page=this.datajsonCtrl.HandleViewEvent(this.key.Get_Notification_Page);
        this.params=this.datajsonCtrl.HandleViewEvent(this.key.Get_Notification_Title);
        // console.log(this.animateClass.length);
        // console.log(this.animateClass[0].item);
        // console.log(this.animateClass[0].time);
        // for (let index = 0; index < this.animateClass.length; index++) {
        //     setTimeout(function () {
        //          this.Item = this.animateClass[index].item;
        //         //console.log("item:",this.animateClass[index].item);
        //          this.Time = this.animateClass[index].time;
        //         //console.log("time",this.animateClass[index].time);
        //         this.page.push({Item: this.Item, Time: this.Time});

        //     }, 200 * index);
            
        // }
        
       
    }

    reorderItems = (indexes): void => {
        this.page = reorderArray(this.page, indexes);
    }

    openPage(item){
        this.NavCrtl.push(Notifidetail,{data:item});
    }
}
