import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { NewsdetailService } from "../../services/newsdetail-service";

@Component({
    templateUrl:'notifidetail.html',
    providers: [NewsdetailService]
})
export class Notifidetail{
    data:any;
    constructor(NavP:NavParams, newdetail: NewsdetailService){
        this.data=NavP.get('data');
    }
}
