import { Injectable } from "@angular/core";
import { DataJsonModel } from "../model/dataJson-model";

@Injectable()
export class DataJsonController{
    constructor(public datajsonmodel:DataJsonModel){}
    /// error
    HandleViewEvent(event:number){
        console.log("datajsoctrl: ");
        
        return this.datajsonmodel.HandleControllerEvent(event);
    }
}