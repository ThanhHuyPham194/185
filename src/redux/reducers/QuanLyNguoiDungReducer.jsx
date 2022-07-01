import { XOA_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";

const userData=[
    {"id":"01","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"02","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"03","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"04","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"05","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"06","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"07","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"08","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"01","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"01","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"01","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"01","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"02","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"03","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"14","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"15","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"16","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"17","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"18","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"14","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"15","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"16","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"17","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"18","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"14","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"15","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"16","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"17","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"18","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"14","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"15","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"16","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"17","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"18","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"14","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"15","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"16","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"17","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
    {"id":"18","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"11","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"12","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":true},
    {"id":"13","hoTen":"Tran Van Quy","email":"example@gmail.com","soDienThoai":"0333333333","vaiTro":"Super Admin","ngayTao":"20/7/2020","trangThai":false},
]

const stateDefault = {
    users: userData,

}




export const QuanLyNguoiDungReducer=(state=stateDefault,action)=>{
    switch (action.type) {
        case XOA_NGUOI_DUNG:
            return {
                ...stateDefault,
                users: state.users.filter((user)=>user.id!==action.payload),
            };
        default:
            return state;
            break;
    }
}
