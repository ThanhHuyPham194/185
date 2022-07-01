import React from "react";
import AutoData from "../../../components/AutoComplete/AutoData";



export default function Register() {
  return (
    <div className="container-register">
      <div className="title-register">
        <i class="fa fa-arrow-left"></i>
        <h1>TẠO NGƯỜI DÙNG MỚI </h1>
      </div>
      <form type="submit">
        <div className="submit-top">
            <div className="submit-top-info">
            <div className="form-group">
              <label htmlFor="exampleInputSurname">Họ *</label>
              <div className="form-input">
              <input type="text" className="form-control" id="exampleInputSurname"  placeholder="Nhập họ"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputName">Tên *</label>
              <div className="form-input">
              <input type="email" className="form-control" id="exampleInputName" placeholder="Nhập tên"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email *</label>
              <div className="form-input">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Nhập địa chỉ email"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPhoneNumber">Số điện thoại *</label>
              <div className="form-input">
              <input type="email" className="form-control" id="exampleInputPhoneNumber"  placeholder="Nhập số điện thoại"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputNation">Quốc gia</label>
              <div className="form-input">
              <input type="email" className="form-control" id="exampleInputNation"  placeholder="Chọn quốc gia"/>
              <i class="fa fa-angle-down"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputCity">Tỉnh/Thành phố</label>
              {/* <AutoData className="auto-complete"/> */}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputDistrict">Quận/Huyện</label>
              <div className="form-input">
              <input type="email" className="form-control" id="exampleInputDistrict"  placeholder="Chọn quận huyện"/>
              <i class="fa fa-angle-down"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputCommune">Phường/Xã</label>
              <div className="form-input">
              <input type="email" className="form-control" id="exampleInputCommune" placeholder="Chọn phường xã"/>
              <i class="fa fa-angle-down"></i>
              </div>
              </div>
            </div>
            

            <div className="submit-top-avt">
            <label for="file" className="label-file">
              <span className="hinhDaiDien">Hình đại diện</span>
            <input type="file" name="file" id="file" class="inputfile" style={{display:"none"}}/>
            <div for="file" className="img-input">
            <i class="fa fa-camera"></i>
            <span>Chọn ảnh để tải lên</span>
            </div>
            </label>
            </div>
            
          </div>
          
          <div className="submit-center">
              <div className="form-group">
              <label htmlFor="exampleInputAddress">Địa Chỉ</label>
              <input type="email" className="form-control" id="exampleInputAddress" placeholder="Nhập địa chỉ" />
            </div>
            <hr />
          </div>

          <div className="submit-bottom">
                <div className="form-group">
                <label htmlFor="exampleInputRole">Vai Trò *</label>
                <div className="form-input">
                <input type="email" className="form-control" id="exampleInputRole"  placeholder="Chọn vai trò" />
              <i class="fa fa-angle-down"></i>
              </div>
              </div>


              <div className="form-group">
                <label htmlFor="exampleInputPosition">Chức Vụ *</label>
                <div className="form-input">
                <input type="email" className="form-control" id="exampleInputPosition"  placeholder="Chọn chức vụ" />
              <i class="fa fa-angle-down"></i>
                </div>

              </div>


              <div className="form-group">
                <label htmlFor="exampleInputPart">Bộ Phận *</label>
                <div className="form-input">

                <input type="email" className="form-control" id="exampleInputPart" placeholder="Chọn bộ phận" />
              <i class="fa fa-angle-down"></i>
                </div>

              </div>


              <div className="form-group">
                <label htmlFor="exampleInputAgency">Chi Nhánh *</label>
                <div className="form-input">

                <input type="email" className="form-control" id="exampleInputAgency" placeholder="Chọn khu vực làm việc" />
              <i class="fa fa-angle-down"></i>
              </div>
              </div>
          </div>
 
         


      </form>
      <div className="btn-add-user">
           <button className="btn btn-add">Lưu</button>
          <button className="btn btn-cancel">Huỷ</button>
        </div>
  
    </div>
  );
}
