import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Space } from "antd";
import logo from "../../../../assets/img/logo.png";
import CardNotification from "./CardNotification";
export default function Header() {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div className="ant-menu-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              <a href="#">Hồ sơ của bạn</a>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div className="ant-menu-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-coin"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <a href="#">Lương</a>
            </div>
          ),
        },
        {
          key: "3",
          label: (
            <div className="ant-menu-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
              <a href="#">Đăng xuất</a>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <div className="header-template">
      <Link to="/admin/adminhome">
        <div className="header-left">
          <img src={logo} alt="logo" />
          <h1>
            TRUNG TÂM BẢO TỒN VÀ PHÁT HUY GIÁ TRỊ LỊCH SỬ VĂN HOÁ THÀNH PHỐ HỒ
            CHÍ MINH{" "}
          </h1>
        </div>
      </Link>

      <div className="header-right">
        <Link to="/admin/messenger">
          <i className="fab fa-facebook-messenger"></i>
        </Link>

        <CardNotification />
        <Link to="/admin/account">
          <div className="acount">
            <div className="acount-left">
              <img src="https://picsum.photos/id/1/200/300" alt="user" />
            </div>
            <div className="acount-right">
              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <p className="user-name">Nguyễn Công Anh</p>
                    <p className="user-title">Admin</p>
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
