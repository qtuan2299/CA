import { Injectable } from "@angular/core";
import { Key } from "../key/key";
import { NewsdetailService } from "../services/newsdetail-service";
import { NotificationService } from "../services/notification-service";
import { WorkScheduleService } from "../services/workschedule-service";
import { HomeService} from "../services/home-service";

@Injectable()
export class DataJsonModel{
    data:any;
    Objectdata;
    constructor(
        private key:Key, 
        private newsdetailservice:NewsdetailService,
        private notificationservice:NotificationService,
        private workschedule:WorkScheduleService,
        private homeservice:HomeService){}

    HandleControllerEvent(event:number){
        
        switch(event){
            case this.key.Get_Newsdetail_Title:
                //console.log(this.newsdetailservice.getTitle());
                return this.data = this.newsdetailservice.getTitle(); 
                //this.newsdetailservice.getTitle();
                //break;
            case this.key.Get_NewsDetail_Page:
                return this.data = this.newsdetailservice.getDataNewsDetail();
                //break; Không vào dc break đã return!
            
            case this.key.Get_Home_Page:
                console.log("dataJsonmodel: ",this.homeservice.getData());
                
                return this.data = this.homeservice.getData();

            case this.key.Get_Notification_Page:
                //this.Objectdata = new NotificationDTO(this.newsdetailservice.getTitle(),this.notificationservice.getAllThemes());
                return this.notificationservice.getAllThemes();
                //break;
            case this.key.Get_Notification_Title:
                return this.data = this.notificationservice.getTitle();
                //break;
            case this.key.Get_Tab1_Data:
                //to do something
                break;
            case this.key.Get_Tab2_Data:
                //to do something
                break;
            case this.key.Get_Wokschedule_Page:
                return this.data = this.workschedule.getDataForLayout1();
                //break;
            case this.key.Get_Workschedule_Title:
                return this.data = this.workschedule.getTitle();
                //break;
        }
    }
}