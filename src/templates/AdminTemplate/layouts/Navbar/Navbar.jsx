import React from "react";
import nav1 from '../../../../assets/img/navbar/1.png';
import nav2 from '../../../../assets/img/navbar/2.png';
import nav3 from '../../../../assets/img/navbar/3.png';
import nav4 from '../../../../assets/img/navbar/4.png';
export default function Navbar() {
  return (
      <div className="msb" id="msb">
        <nav className="navbar navbar-default" role="navigation">
          {/* Main Menu */}
          <div className="side-menu-container">
            <ul className="nav navbar-nav">



              {/* Dropdown*/}
              <li className="panel panel-default" id="dropdown">
                <a data-toggle="collapse" href="#dropdown-lvl1">
                <img src={nav1} alt="1"/>Quản Lý Người Dùng 
                  <span className="caret" />
                </a>
                {/* Dropdown level 1 */}
                <div id="dropdown-lvl1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#">Quản Lý Nhân Viên</a>
                      </li>
                      <li>
                        <a href="#">Quản Lý Lịch Họp</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>




              {/* Dropdown*/}
              <li className="panel panel-default" id="dropdown">
                <a data-toggle="collapse" href="#dropdown-lvl2">
                  <img src={nav2} alt="2"/> Phòng TBDT
                  <span className="caret" />
                </a>
                {/* Dropdown level 1 */}
                <div id="dropdown-lvl2" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#">Quản Lý Dự Án</a>
                      </li>
                      <li>
                        <a href="#">Tư Vấn Thiết Kế Lập Báo Cáo KT - KT</a>
                      </li>
                      <li>
                        <a href="#">Tư Vấn Giám Sát Thi Công </a>
                      </li>
                      <li>
                        <a href="#">Tư Vấn Thẩm Tra Thiết Kế Dự Toán</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>





              {/* Dropdown*/}
              <li className="panel panel-default" id="dropdown">
                <a data-toggle="collapse" href="#dropdown-lvl3">
                  <img src={nav3} alt="3"/>Phòng LHSDT
                  <span className="caret" />
                </a>
                {/* Dropdown level 1 */}
                <div id="dropdown-lvl3" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#">HS Khoa Học Xếp Hạng</a>
                      </li>
                      <li>
                        <a href="#">HS Kiểm Kê Hiện Vật </a>
                      </li>
                      <li>
                        <a href="#">HS Sắp Xếp Theo Từng Di Tích</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>




              {/* Dropdown*/}
              <li className="panel panel-default" id="dropdown">
                <a data-toggle="collapse" href="#dropdown-lvl4">
                  <img src={nav4} alt="4"/> Phòng HC - TH
                  <span className="caret" />
                </a>
                {/* Dropdown level 1 */}
                <div id="dropdown-lvl4" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#">Mail</a>
                      </li>
                      <li>
                        <a href="#">Calendar</a>
                      </li>
                      <li>
                        <a href="#">Ecommerce</a>
                      </li>
                      <li>
                        <a href="#">User</a>
                      </li>
                      <li>
                        <a href="#">Social</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </nav>
      </div>
  );
}
