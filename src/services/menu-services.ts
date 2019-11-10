import { IService } from './IService';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from './loading-services'

@Injectable()
export class MenuService implements IService {

    constructor(private loadingService: LoadingService) { }

    getId = (): string => 'menu';

    getTitle(){return {"title" :'Tin tức ANTT', "background":"assets/images/avatar/15.jpg"};}

    getAllThemes = () =>  [
      { 
        "title": "Thông tin cá nhân", 
        "theme": "profile", 
        "icon": false, 
        "iconitem":"contact",
        "IsActive":true,
        "sub":"",
        "listView": true
      },
      { 
        "title": "Tin tức",
        "theme": "news",
        "icon": false, 
        "iconitem":"paper-plane",
        "IsActive":true,
        "sub":"",
        "listView": true
      },            
      { 
        "title": "Lịch Công tác ",
        "theme": "meeting",
        "icon": false, 
        "iconitem":"calendar",
        "IsActive":false,
        "sub":"",
        "listView": true
      },   
      { 
        "title": "Báo cáo kết quả công tác", 
        "theme": "report", 
        "icon": false, 
        "iconitem":"browsers",
        "IsActive":true,
        "sub":"",
        "listView": true
      },
      { 
        "title": "Thống kê thông tin báo cáo",
        "theme": "statistical", 
        "icon": false,
        "iconitem":"podium",
        "IsActive":true,
        "sub":"",
        "listView": true
      },
      { 
        "title": "Tra cứu thông tin báo cáo", 
        "theme": "search",
        "icon": false,
        "iconitem":"folder-open",
        "IsActive":true,
        "sub":"",
        "listView": true
      }            
          ];
          
    

    getDataForTheme = (menuItem: any) => {
        return {
            "background": "assets/images/background/16.jpg",
            "image": "assets/images/logo/login-3.png",
            "title": "Ionic3 UI Theme - Blue Light"
        };
    };

    getEventsForTheme = (menuItem: any): any => {
        return {};
    };

    prepareParams = (item: any) => {
        return {
            title: item.title,
            data: {},
            events: this.getEventsForTheme(item)
        };
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        return new Observable(observer => {
            that.loadingService.hide();
            observer.next(this.getDataForTheme(item));
            observer.complete();
        });
    }
}
