import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

import { NewsdetailService } from "../../services/newsdetail-service";
import { DataJsonController } from "../../controller/datajsoncontroller";
import { Key } from "../../key/key";
@Component({
    templateUrl:"newsdetail.html",
    providers: [NewsdetailService]
})
export class Newsdetail{ 
    params:any;
    //page:any;
    item:any;
    
    constructor( NavP:NavParams,public NavCrtl:NavController,private datajSonCtrl:DataJsonController, private key:Key){

        // waiting me....QTuan
        this.params=this.datajSonCtrl.HandleViewEvent(this.key.Get_Newsdetail_Title);
        this.item=NavP.get("page");
    }  
}