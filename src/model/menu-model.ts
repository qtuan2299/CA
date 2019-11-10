import { MenuService } from "../services/menu-services";
import { Injectable } from "@angular/core";

@Injectable()
export class MenuModel{
    constructor(public menu:MenuService){}
    HandleViewEventGetID(){
        return this.menu.getId();
    }
    HandleVieEventGetAllThems(){
        return this.menu.getAllThemes();
    }
}