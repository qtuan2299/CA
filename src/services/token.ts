import { Injectable } from "@angular/core";

@Injectable()

export class Token{
    public token:any="";

    setToken(_token){
        this.token=_token;
    }
    getToken(){
        return this.token;
    }
}