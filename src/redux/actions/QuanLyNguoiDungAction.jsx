import Password from "antd/lib/input/Password";
import Swal from "sweetalert2";

export const DangNhapAction = (thongTinDangNhap, navigate) => {
    const Swal = require("sweetalert2");
  const { userName, passWord } = thongTinDangNhap;

  if (userName === "admin" && passWord === "admin") {
    return navigate("./admin/adminhome");
  }else if(userName==="user" && passWord==="user") {
    return navigate("./user/userhome");
  }else {
    navigate("/");
    return(Swal.fire({
        position: 'center',
        icon: 'error',
        width:400,
        html:'<span style="color:#1A48E9;font-size:20px;text-align:center;">Tài khoản hoặc mật khẩu không đúng</span>',
        showConfirmButton: false,
        timer: 1500,
        iconColor:'red',
      }))
  }
};
