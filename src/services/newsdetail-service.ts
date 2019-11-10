import { Injectable } from "@angular/core";
import { API } from "./api-service";

@Injectable()
export class NewsdetailService{
        constructor(private api:API){}
    getTitle = (): string => 'Tin Nổi Bật';    
    getDataNewsDetail(){
        return this.api.getData();
    }
       
}