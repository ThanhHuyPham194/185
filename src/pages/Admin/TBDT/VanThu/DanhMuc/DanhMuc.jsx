import React from "react";

export default function DanhMuc() {
  function handleClick(text) {
   //
  }
  return (
    <div className="container-documenttype">
      <div className="documentbod-title">
          <h2>DANH MỤC</h2>

      </div>
      <div className="documentbod-body">
        <span>Danh mục</span>
        <div className="documentbod-list">
          <div
            className="documentbod-item"
            onClick={()=>handleClick("CÔNG VĂN THAM MƯU")}
          >
            <i className="fa fa-file-text"></i>
            <div className="documentbod-item-info">
              <span>Thư mục A</span>
              <h5>23 mục</h5>
            </div>
          </div>
          <div
            className="documentbod-item"
            onClick={()=>handleClick("CÔNG VĂN CHỈ ĐẠO")}

          >
            <i className="fa fa-file-text"></i>
            <div className="documentbod-item-info">
              <span>Thư mục A</span>
              <h5>23 mục</h5>
            </div>
          </div>
          <div
            className="documentbod-item"
            onClick={()=>handleClick("CÔNG VĂN MẬT")}
            
          >
            <i className="fa fa-file-text"></i>
            <div className="documentbod-item-info">
              <span>Thư mục A</span>
              <h5>23 mục</h5>
            </div>
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
