import React from "react";
import nav1 from "../../../../assets/img/navbar/1.png";
import nav2 from "../../../../assets/img/navbar/Vector.png";
import nav3 from "../../../../assets/img/navbar/3.png";
import nav4 from "../../../../assets/img/navbar/4.png";
import nav5 from "../../../../assets/img/navbar/5.png";
import nav6 from "../../../../assets/img/navbar/6.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="msb" id="msb">
      <nav className="navbar navbar-default" role="navigation">
        {/* Main Menu */}
        <div className="side-menu-container">
          <ul className="nav navbar-nav">

            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl2">
                <img src={nav1} alt="1" /> Quản Lý Tài Khoản
                <span className="caret" />
              </a>
              {/* Dropdown level 1 */}
              <div id="dropdown-lvl2" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/admin/managetask">Nhiệm vụ</Link>
                    </li>
                    <li>
                      
                      <Link to="/admin/calendar">Lịch</Link>  
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <Link to="/admin/director" data-toggle="collapse" href="#dropdown-lvl1">
                <img src={nav2} alt="1" />
                Ban Giám Đốc 
                <span className="caret" />
              </Link>
            </li>

            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl3">
                <img src={nav3} alt="3" />
                P.Hành Chính - Tổng Hợp
                <span className="caret" />
              </a>
              {/* Dropdown level 1 */}
              <div id="dropdown-lvl3" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/admin/vanthu">Văn Thư </Link>
                    </li>
                    <li>
                      <Link to="/admin/danhmuc">Hồ Sơ</Link>
                    </li>
                    <li>
                      <Link to="/admin/payroll">Kế Toán</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl5">
                <img src={nav5} alt="5" />
                P. Tu Bổ - Di Tích
                <span className="caret" />
              </a>
              {/* Dropdown level 1 */}
              <div id="dropdown-lvl5" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/admin/vanthu">Văn Thư </Link>
                    </li>
                    <li>
                      <Link to="/admin/document">
                        Hồ Sơ
                      </Link>
                    </li>



                    
                  </ul>
                </div>
              </div>
            </li>





            {/* Dropdown*/}
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl6">
                <img src={nav5} alt="5" />
                P. Lập Hồ Sơ Di Tích
                <span className="caret" />
              </a>
              {/* Dropdown level 1 */}
              <div id="dropdown-lvl6" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/admin/vanthu">Văn Thư </Link>
                    </li>
                    <li>
                      <a href="#">
                        Hồ Sơ
                      </a>
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
