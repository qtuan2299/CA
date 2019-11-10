import { Injectable } from "@angular/core";
import { API } from "./api-service";

@Injectable()
export class NotificationService{
    constructor( private api:API){}
    getTitle = (): string => 'Thông báo';
    getData(){ // không dùng cái này do không có api 
        return this.api.getData(); // dòng này chỉ để chưng không xài.
    }
    getAllThemes = (): Array<any> => {
        return [
            { "item" : "Góp y sửa đổi ý kiến", "time" : "27/09/2019","image":"assets/images/avatar-small/0.jpg",
            "subtitle":"(PL)- Nhờ dịch vụ hành chính công trực tuyến nên việc cấp đổi hộ chiếu hiện được thực hiện dễ dàng, người dân chỉ việc ở nhà hoàn tất các thủ tục bằng điện thoại hoặc máy tính…",
            "data":"Từ tháng 8-2015, Phòng Quản lý xuất nhập cảnh (PA08, Công an TP.HCM) bắt đầu áp dụng khai hồ sơ trực tuyến (dịch vụ hành chính công mức độ ba). Đến nay việc này đã cho thấy nhiều lợi ích thực tế cho người dân và cả các cán bộ làm việc."},
            { "item" : "Sủa đổi bổ sung một số quy ddijnhj đánh giá", "time" : "05/09/2019", "image":"assets/images/avatar/3-thu-tuc-2_dguq",
            "subtitle":"(PL)- Nhờ dịch vụ hành chính công trực tuyến nên việc cấp đổi hộ chiếu hiện được thực hiện dễ dàng, người dân chỉ việc ở nhà hoàn tất các thủ tục bằng điện thoại hoặc máy tính…",
            "data":"12321341234Từ tháng 8-2015, Phòng Quản lý xuất nhập cảnh (PA08, Công an TP.HCM) bắt đầu áp dụng khai hồ sơ trực tuyến (dịch vụ hành chính công mức độ ba). Đến nay việc này đã cho thấy nhiều lợi ích thực tế cho người dân và cả các cán bộ làm việc."},
            { "item" : "Thông báo lịch kiểm tra CCHC", "time" : "09/05/2019", "image":"assets/images/avatar/3-thu-tuc-2_dguq",
            "subtitle":"(PL)- Nhờ dịch vụ hành chính công trực tuyến nên việc cấp đổi hộ chiếu hiện được thực hiện dễ dàng, người dân chỉ việc ở nhà hoàn tất các thủ tục bằng điện thoại hoặc máy tính…",
            "data":"dfasdfasdfTừ tháng 8-2015, Phòng Quản lý xuất nhập cảnh (PA08, Công an TP.HCM) bắt đầu áp dụng khai hồ sơ trực tuyến (dịch vụ hành chính công mức độ ba). Đến nay việc này đã cho thấy nhiều lợi ích thực tế cho người dân và cả các cán bộ làm việc."}
            
          ]
    };
}
