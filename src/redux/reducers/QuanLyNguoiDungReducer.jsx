
const userData=[
    {"id":"01","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":true},
    {"id":"02","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":true},
    {"id":"03","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":false},
    {"id":"04","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":true},
    {"id":"05","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":false},
    {"id":"06","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":true},
    {"id":"07","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":false},
    {"id":"08","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":true},
    {"id":"01","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":true},
    {"id":"01","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":true},
    {"id":"01","hoten":"Tran Van Quy","email":"example@gmail.com","sodienthoai":"0333333333","vaitro":"Super Admin","ngaytao":"20/7/2020","trangthai":true}]

const stateDefault = {
    user: userData,

}




export const QuanLyNguoiDungReducer=(state=stateDefault,action)=>{
    switch (action.type) {
      
        default:
            return state;
            break;
    }
}
