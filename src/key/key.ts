import { Injectable } from "@angular/core";

@Injectable()
export class Key{
    
    constructor(){}
    public abc:number=1;
    public Get_App_Page:number = 1;
    public Get_App_Title:number = 2;
    public Action_App_Toggle:number = 3;
    public Get_App_GroupShow:number = 4;
    public Action_App_SelectPageForOpen:number = 5;
    public Action_App_OpenPage:number = 6;
    public Action_App_GoPage:number = 7;
    public Get_Home_Page:number =8;
    public Get_Home_Title:number =9;
    public Action_Home_Click:number =10;
    public Get_NewsDetail_Page:number =11;
    public Get_Newsdetail_Title:number =12;
    public Get_Notification_Page:number =13;
    public Get_Notification_Title:number =14;
    public Get_Wokschedule_Page:number =15;
    public Get_Workschedule_Title:number =16;
    public Get_Tab1_Data:number = 17;
    public Get_Tab2_Data:number = 18;

    // My Test _ Tuan.
    public Get_Test_Data:number = 200;
    public REQUEST_FAILD = 201;

}