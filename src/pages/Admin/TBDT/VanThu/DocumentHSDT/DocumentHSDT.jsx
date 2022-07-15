import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { Tabs } from "antd";
import { Table } from "antd";
import date_svg from "../../../../../assets/img/Date.svg";
import vector_svg from "../../../../../assets/img/Vector.svg";
import shape_svg from "../../../../../assets/img/Shape.svg";
import eye_svg from "../../../../../assets/img/eye.svg";

import Modal from "../../../../../components/Modal/Modal";
import "./DocumentHSDT.scss";
import { useDispatch, useSelector } from "react-redux";
import PopupPayroll from "../../../../../components/PopupPayroll/PopupPayroll";

const { TabPane } = Tabs;
export default function DocumentHSDT() {
  const { isPopup } = useSelector((store) => store.popup);
  const dispatch = useDispatch();
  const handlePopup = () => {
    dispatch({
      type: "OPENED_POPUP",
    });
  };
  const columns = [
    {
      title: "Stt",
      dataIndex: "stt",
      key: "stt",
      // render: (text) => <a>{text}</a>,
      width: 60,
      height: 68,
    },
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
      width: 150,
    },
    {
      title: "Chức vụ",
      dataIndex: "position",
      key: "position",
      ellipsis: true,
    },
    {
      title: "Lương cơ bản",
      dataIndex: "basedSalary",
      key: "basedSalary",
      ellipsis: true,
    },
    {
      title: "Lương theo năng lực",
      dataIndex: "skillsSalary",
      key: "skillsSalary",
      ellipsis: true,
    },
    {
      title: "Phụ cấp",
      dataIndex: "subsidize",
      key: "subsidize",
      ellipsis: true,
    },
    {
      title: "Ngày công",
      dataIndex: "workingDays",
      key: "workingDays",
      ellipsis: true,
      width: 100,
    },
    {
      title: "Tổng thu nhập",
      dataIndex: "totalIncome",
      key: "totalIncome",
      ellipsis: true,
    },
    {
      title: "Chi tiết",
      dataIndex: "details",
      key: "details",
      // ellipsis: true,
      width: 80,
    },
  ];
  const data = [
    {
      key: "1",
      stt: 1,
      fullName: "Lâm Thiếu Kỳ",
      position: "Giám đốc",
      basedSalary: "10.000.000 VND",
      skillsSalary: "2.400.000 VND",
      subsidize: "1.700.000 VND",
      workingDays: "24",
      totalIncome: "14.100.000 VND",
      details: <img src={eye_svg} onClick={handlePopup}></img>,
    },
    {
      key: "2",
      stt: 2,
      fullName: "Nguyễn Quang",
      position: "Phó giám đốc",
      basedSalary: "8.000.000 VND",
      skillsSalary: "1.800.000 VND",
      subsidize: "1.500.000 VND",
      workingDays: "24",
      totalIncome: "11.200.000 VND",
      details: <img src={eye_svg} onClick={handlePopup}></img>,
    },
    {
      key: "3",
      stt: 3,
      fullName: "Phan Anh",
      position: "Phó giám đốc",
      basedSalary: "8.000.000 VND",
      skillsSalary: "1.800.000 VND",
      subsidize: "1.500.000 VND",
      workingDays: "24",
      totalIncome: "11.200.000 VND",
      details: <img src={eye_svg} onClick={handlePopup}></img>,
    },
    {
      key: "4",
      stt: 4,
      fullName: "Tấn Tài",
      position: "Nhân sự",
      basedSalary: "6.000.000 VND",
      skillsSalary: "1.200.000 VND",
      subsidize: "800.000 VND",
      workingDays: "24",
      totalIncome: "8.000.000 VND",
      details: <img src={eye_svg} onClick={handlePopup}></img>,
    },
    {
      key: "5",
      stt: 5,
      fullName: "Thái Bảo",
      position: "Nhân sự",
      basedSalary: "6.000.000 VND",
      skillsSalary: "1.200.000 VND",
      subsidize: "800.000 VND",
      workingDays: "24",
      totalIncome: "8.000.000 VND",
      details: <img src={eye_svg} onClick={handlePopup}></img>,
    },
    {
      key: "6",
      stt: 6,
      fullName: "Thành An",
      position: "Nhân sự",
      basedSalary: "6.000.000 VND",
      skillsSalary: "1.200.000 VND",
      subsidize: "800.000 VND",
      workingDays: "24",
      totalIncome: "8.000.000 VND",
      details: <img src={eye_svg} onClick={handlePopup}></img>,
    },
    {
      key: "7",
      stt: 7,
      fullName: "Nhật Phương",
      position: "Nhân sự",
      basedSalary: "6.000.000 VND",
      skillsSalary: "1.200.000 VND",
      subsidize: "800.000 VND",
      workingDays: "24",
      totalIncome: "8.000.000 VND",
      details: <img src={eye_svg} onClick={handlePopup}></img>,
    },
  ];
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {};

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Lâm Thiếu Kỳ",
          key: "1",
        },
        {
          label: "Nguyễn Quang",
          key: "2",
        },
        {
          label: "Phan Anh",
          key: "3",
        },
      ]}
    />
  );
  return (
    <div className="payroll">
      {isPopup && (
        <Modal>
          <PopupPayroll />
        </Modal>
      )}
      <div className="container">
        <div className="payroll__filter">
        <div className="search-input">
            <div className="input-search">

            <input type="text" placeholder="Tìm Kiếm"/>
            <button className="btn btn-search">
              <i className="fab fa-sistrix"></i>
            </button>
            </div>
          </div>
        </div>
        <div className="payroll__tabs">
          <div className="container">
            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="Quản lý dự án" key="1">
                <div className="documentbod-list">
                  <div
                    className="documentbod-item"
                  >
                    <i className="fa fa-file-text"></i>
                    <div className="documentbod-item-info">
                      <span>Thư mục A</span>
                      <h5>23 mục</h5>
                    </div>
                  </div>
                  <div
                    className="documentbod-item"
                  >
                    <i className="fa fa-file-text"></i>
                    <div className="documentbod-item-info">
                      <span>Thư mục A</span>
                      <h5>23 mục</h5>
                    </div>
                  </div>
                  <div
                    className="documentbod-item"
                  >
                    <i className="fa fa-file-text"></i>
                    <div className="documentbod-item-info">
                      <span>Thư mục A</span>
                      <h5>23 mục</h5>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Tư vấn thiết kế lập báo cáo kỹ thuật" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tư vấn thẩm tra thiết kế và dự toán" key="4">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Tư vấn giám sát thi công" key="5">
                Content of Tab Pane 4
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
