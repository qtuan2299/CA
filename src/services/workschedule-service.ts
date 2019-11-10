import { Injectable } from "@angular/core";

@Injectable()
export class WorkScheduleService{
    constructor(){}
    getTitle = ():String => 'Lịch công tác';
    getDataForLayout1=():any =>{
        return  [
                    { "title" : "Họp xét nâng mức lương trước thời hạn 2018" , "time" : "08:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "Dự hội nghị thành ủy" , "time" : "09:00" , "person" : "" , "pin" : "Thành Phố" , "contact" : "Đ/c Cư,"},
                    { "title" : "Nhóm Ủy Viên Văn Hóa xã hội làm việc với các đơn vị" , "time" : "10:00" , "person" : "" , "pin" : "HT.KV1" , "contact" : "Đ/c Hòa,theo thư mời"},
                    { "title" : "Đi nhậu" , "time" : "16:00" , "person" : "Thắng, Giang" , "pin" : "vỉa hè" , "contact" : "Đ/c Tuấn,"},
                    { "title" : "Họp xét nâng mức lương trước thời hạn 2018" , "time" : "08:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "2.Họp xét nâng mức lương trước thời hạn 2018" , "time" : "09:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "3.Họp xét nâng mức lương trước thời hạn 2018" , "time" : "10:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "4.Họp xét nâng mức lương trước thời hạn 2018" , "time" : "11:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "5.Họp xét nâng mức lương trước thời hạn 2018" , "time" : "12:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "6.Họp xét nâng mức lương trước thời hạn 2018" , "time" : "13:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "7.Họp xét nâng mức lương trước thời hạn 2018" , "time" : "14:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "8.Họp xét nâng mức lương trước thời hạn 2018" , "time" : "15:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "9.Họp xét nâng mức lương trước thời hạn 2018" , "time" : "16:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    { "title" : "10.Họp xét nâng mức lương trước thời hạn 2018" , "time" : "17:00" , "person" : "Dương Hống Thắng" , "pin" : "" , "contact" : ","},
                    
                ]
        
    };

}