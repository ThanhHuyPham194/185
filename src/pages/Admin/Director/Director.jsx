import React from "react";
import { useNavigate } from "react-router-dom";

const data = [
  { role: "GIÁM ĐỐC", name: "LÊ THIẾU KỲ" },
  { role: "PHÓ GIÁM ĐỐC", name: "NGUYỄN VĂN A" },
  { role: "PHÓ GIÁM ĐỐC", name: "NGUYỄN VĂN B" },
 
];
export default function Director() {
  const navigate = useNavigate();
  function handleClick(data){
    navigate("/admin/documentbod", { state: data});
  }
  return (
    <div className="container-director">
      <h2>DANH MỤC</h2>
      <div className="director-body">
        <h3>Chọn danh mục</h3>
        <div className="director-body-list">
          {data.map((data, index) => {
            return (
              <div
                className="director-body-item"
                key={index}
                onClick={()=>handleClick(data)}
              >
                <i className="fa fa-file-text"></i>
                <hr />
                <h2>{data.role}</h2>
                <span>{data.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
