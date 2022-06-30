import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { store } from "../../../redux/configStore";



export default function AdminHome() {
  const {user} = useSelector(state=>state.QuanLyNguoiDungReducer);
  
  
  console.log(user);
let navigate=useNavigate();
  return (
    <div className="container-adminhome">
      <div className="search-admin">
        <h1>DANH SÁCH NHÂN VIÊN </h1>
        <div className="option">

        <div className="search-input">
          <input type="text" placeholder="Tìm Kiếm"/>
          <button className="btn btn-search">
          <i class="fab fa-sistrix"></i>
          </button>
        </div>
        <div className="btn-get-user">
          <button className="btn btn-success btn-get" onClick={()=>{
            navigate("/admin/register");
          }}>Tạo Người Dùng</button>
        </div>
        </div>
      </div>
      <div className="container-table">

      
      <table class="table table-user">
        <thead>
          <tr>
            <th className="tr-1 tr-0">ID</th>
            <th className="tr-1">Họ Và Tên</th>
            <th className="tr-1">Email</th>
            <th className="tr-1">Số Điện Thoại</th>
            <th className="tr-1">Vai Trò </th>
            <th className="tr-1">Ngày Tạo</th>
            <th className="tr-1">Trạng Thái </th>
            <th className="tr-1 tr-2">Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {user&&user.map((item,index)=>{
            return (
          <tr key={index}>
            <td scope="row">{item.id}</td>
            <td>{item.hoten}</td>
            <td>{item.email}</td>
            <td>{item.sodienthoai}</td>
            <td>{item.vaitro}</td>
            <td>{item.ngaytao}</td>
            
            <td className="active">
              <i class="fa fa-circle"></i>
              Đang Hoạt Động
            </td>
            <td>
              <button className="btn btn-pen">
                <i class="fa fa-pen"></i>
              </button>
              <button className="btn btn-alt">
                <i class="fa fa-trash-alt"></i>{" "}
              </button>
            </td>
          </tr>
            );
          })}



        </tbody>
      </table>

<nav aria-label="Page navigation example page-nav">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">«</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">»</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
</div>
    </div>
  );
}
