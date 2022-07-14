import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function DocumentBOD() {
  const { state } = useLocation();
  const navigate = useNavigate();

  function handleClick(text) {
      navigate("/admin/documenttype", {
        state: {
          title:text,
          role: state.role
        },
      });
  }
  return (
    <div className="container-documentbod">
      <div className="documentbod-title">
        <Link to="/admin/director">
          <h2>DANH MỤC</h2>
        </Link>
        <span>{">>"}</span>
        <a href="#">{state.role}</a>  
      </div>
      <div className="documentbod-body">
        <span>Danh mục</span>
        <div className="documentbod-list">
          <div
            className="documentbod-item"
            onClick={() => handleClick("CÔNG VĂN ĐẾN")}
          >
            <i className="fa fa-file-text"></i>
            <div className="documentbod-item-info">
              <span>Công văn đến</span>
              <h5>23 mục</h5>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"
              />
            </svg>
          </div>
          <div
            className="documentbod-item"
            onClick={() => handleClick("CÔNG VĂN ĐI")}
          >
            <i className="fa fa-file-text"></i>
            <div className="documentbod-item-info">
              <span>Công văn đi</span>
              <h5>23 mục</h5>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"
              />
            </svg>
          </div>
          <div className="documentbod-item-upload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <span>Thêm thư mục</span>
          </div>
        </div>
      </div>
    </div>
  );
}
