import { Injectable } from "@angular/core";

@Injectable()
export class User{
    public user:any;
    
    setUser(_user){
        this.user = _user;
    }
    getUser(){
        return this.user;
    }
}