import React from "react";
import login from '../../assets/img/login.png';
export default function Login() {
  return (
    <div className="container login">
        <div className="img-login ">
            <img src={login} alt="login" className="w-100" />
        </div>
      <form className="form-login">
        <h1 className="mb-5">Đăng Nhập</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mã Số *</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nhập Mã Số Của Bạn"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mật Khẩu *</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Nhập Mật Khẩu Của Bạn "
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label check-label" htmlFor="exampleCheck1">
            Nhớ Thông Tin
          </label>
        </div>
        <button type="submit" className="btn btn-primary submit-login">
          Đăng Nhập 
        </button>
      </form>
    </div>
  );
}
