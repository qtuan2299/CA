import { MenuModel } from "../model/menu-model";
import { Injectable } from "@angular/core";

@Injectable()
export class MenuController{
    constructor( public menu:MenuModel){}
    HandleViewEventgetID(){
        return  this.menu.HandleViewEventGetID();
    }
    HandleViewEventgetAllThems(){
        return this.menu.HandleVieEventGetAllThems();
    }

}