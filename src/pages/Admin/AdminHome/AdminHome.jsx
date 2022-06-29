import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminHome() {
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
          <button className="btn btn-danger btn-post">Tải Danh Sách Lên</button>
          <button className="btn btn-success btn-get">Tạo Người Dùng</button>
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
          <tr>
            <td scope="row">01</td>
            <td>Trần Văn Quý</td>
            <td>abc@example.com</td>
            <td>0988012335</td>
            <td>Super Admin</td>
            <td>20/07/2020</td>
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

          <tr>
            <td scope="row"  className="disable">01</td>
            <td  className="disable">Trần Văn Quý</td>
            <td  className="disable">abc@example.com</td>
            <td  className="disable">0988012335</td>
            <td  className="disable">Super Admin</td>
            <td  className="disable">20/07/2020</td>
            <td className="disable">
              <i class="fa fa-circle"></i>
              Không Hoạt Động
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

          <tr>
            <td scope="row">01</td>
            <td>Trần Văn Quý</td>
            <td>abc@example.com</td>
            <td>0988012335</td>
            <td>Super Admin</td>
            <td>20/07/2020</td>
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
          <tr>
            <td scope="row">01</td>
            <td>Trần Văn Quý</td>
            <td>abc@example.com</td>
            <td>0988012335</td>
            <td>Super Admin</td>
            <td>20/07/2020</td>
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
          <tr>
            <td scope="row">01</td>
            <td>Trần Văn Quý</td>
            <td>abc@example.com</td>
            <td>0988012335</td>
            <td>Super Admin</td>
            <td>20/07/2020</td>
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
          <tr>
            <td scope="row">01</td>
            <td>Trần Văn Quý</td>
            <td>abc@example.com</td>
            <td>0988012335</td>
            <td>Super Admin</td>
            <td>20/07/2020</td>
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
          <tr>
            <td scope="row">01</td>
            <td>Trần Văn Quý</td>
            <td>abc@example.com</td>
            <td>0988012335</td>
            <td>Super Admin</td>
            <td>20/07/2020</td>
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
          <tr>
            <td scope="row">01</td>
            <td>Trần Văn Quý</td>
            <td>abc@example.com</td>
            <td>0988012335</td>
            <td>Super Admin</td>
            <td>20/07/2020</td>
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
          <tr>
            <td scope="row">01</td>
            <td>Trần Văn Quý</td>
            <td>abc@example.com</td>
            <td>0988012335</td>
            <td>Super Admin</td>
            <td>20/07/2020</td>
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
