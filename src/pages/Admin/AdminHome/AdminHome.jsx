import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { XoaNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";
import ReactPaginate from "react-paginate";

export default function AdminHome() {
  const { users } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();
  const Swal = require("sweetalert2");
  let navigate = useNavigate();

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 11;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  function handleClickDelete(id) {
    return Swal.fire({
      html:
        '<span style="color:#3D4852;font-size:24px;text-align:center;font-weight:700;">Bạn có muốn xoá người này!</span>' +
        '<p style="color:#ccc;font-size:18px;text-align:center;font-weight:500;margin-top:12px;">Bạn sẽ xoá vĩnh viễn người này.<br>Bấm Huỷ để trở lại.</p>',
      icon: "warning",
      iconColor: "red",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Xoá",
      cancelButtonText: "Huỷ",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(XoaNguoiDungAction(id));
        return Swal.fire({
          html:
            '<span style="color:#3D4852;font-size:24px;text-align:center;font-weight:700;">Xoá thành công!</span>' +
            '<p style="color:#ccc;font-size:18px;text-align:center;font-weight:500;margin-top:12px;">Bạn đã xoá vĩnh viễn người dùng.<br>Bấm Xong để trở về danh sách nhân viên.</p>',
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "Xong",
        });
      }
    });
  }
  return (
    <div className="container-adminhome">
      <div className="search-admin">
        <h1>DANH SÁCH NHÂN VIÊN </h1>
        <div className="option">
          <div className="search-input">
            <input type="text" placeholder="Tìm Kiếm" />
            <button className="btn btn-search">
              <i class="fab fa-sistrix"></i>
            </button>
          </div>
          <div className="btn-get-user">
            <button
              className="btn btn-success btn-get"
              onClick={() => {
                navigate("/admin/register");
              }}
            >
              Giao công việc
            </button>
            <button
              className="btn btn-success btn-get"
              onClick={() => {
                navigate("/admin/register");
              }}
            >
              Tạo Người Dùng
            </button>
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
            {currentItems &&
              currentItems.map((user, index) => {
                return (
                  <tr key={index}>
                    <td
                      className={`${user.trangThai ? "" : "disable"} `}
                      scope="row"
                    >
                      {user.id}
                    </td>
                    <td className={`${user.trangThai ? "" : "disable"} `}>
                      {user.hoTen}
                    </td>
                    <td className={`${user.trangThai ? "" : "disable"} `}>
                      {user.email}
                    </td>
                    <td className={`${user.trangThai ? "" : "disable"} `}>
                      {user.soDienThoai}
                    </td>
                    <td className={`${user.trangThai ? "" : "disable"} `}>
                      {user.vaiTro}
                    </td>
                    <td className={`${user.trangThai ? "" : "disable"} `}>
                      {user.ngayTao}
                    </td>

                    <td
                      className={`active ${user.trangThai ? "" : "disable"} `}
                    >
                      <i class="fa fa-circle"></i>
                      Đang Hoạt Động
                    </td>
                    <td>
                      <button className="btn btn-pen">
                        <i class="fa fa-pen"></i>
                      </button>
                      <button
                        className="btn btn-alt"
                        onClick={() => handleClickDelete(user.id)}
                      >
                        <i class="fa fa-trash-alt"></i>{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <hr />
      </div>
      <ReactPaginate
        breakLabel={<a href="">...</a>}
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link page-number"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
      />
    </div>
  );
}
