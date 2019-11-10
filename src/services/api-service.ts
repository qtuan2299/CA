import { Injectable } from "@angular/core";
import { Http,Response } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class API{
    constructor(private http:Http){}
    urlAPI='http://localhost:21021/api/services/app/TinTuc/GetListAsync';
    getData(){
        return this.http.get(this.urlAPI).map((res: Response) => res.json());
    }
    // getData(){
    //     return this.http.get(this.u).map((response: Response) => response.json());
    // }
}