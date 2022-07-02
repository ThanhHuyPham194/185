import React from "react";
import AutoData from "../../../components/AutoComplete/AutoData";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  // userName: yup.string().required('Username is required'),
  // passWord: yup.string().required('Password is required'),
})
export default function Register() {

  const {register, handleSubmit,control,watch, formState: { errors } } =useForm({resolver: yupResolver(schema)});
  const optionsCity = [
    {
      value: 'Sai Gon',
    },
    {
      value: 'TP. HCM',
    },
    {
      value: 'Da Nang',
    },
  ];
  const optionsA = [
    {
      value: 'A',
    },  
    {
      value: 'B',
    },
    {
      value: 'C',
    },
  ];
  const onSubmit=(data)=>{
    console.log(data);
  };
  return (
    <div className="container-register">
      <div className="title-register">
        <i class="fa fa-arrow-left"></i>
        <h1>TẠO NGƯỜI DÙNG MỚI </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="submit-top">
            <div className="submit-top-info">
            <div className="form-group">
              <label htmlFor="exampleInputSurname">Họ *</label>
              <div className="form-input">
              <input type="text" className="form-control" id="exampleInputSurname"  placeholder="Nhập họ" {...register("surname")}/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputName">Tên *</label>
              <div className="form-input">
              <input type="text" className="form-control" id="exampleInputName" placeholder="Nhập tên" {...register("name")}/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email *</label>
              <div className="form-input">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Nhập địa chỉ email" {...register("email")}/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPhoneNumber">Số điện thoại *</label>
              <div className="form-input">
              <input type="text" className="form-control" id="exampleInputPhoneNumber"  placeholder="Nhập số điện thoại" {...register("phone")}/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputNation">Quốc gia</label>
              <div className="form-input">
              <input type="text" value="Việt Nam" className="form-control" id="exampleInputNation" disabled  placeholder="Chọn quốc gia" {...register("nation")}/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputCity">Tỉnh/Thành phố</label>
              <AutoData  placeholder="Chọn tỉnh thành phố" control={control} name="city" id="city" options={optionsCity}/> 
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputDistrict">Quận/Huyện</label>
              <AutoData  placeholder="Chọn quận huyện" control={control} name="district" id="districst" options={optionsA} disabled={!watch("city")} /> 
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputCommune">Phường/Xã</label>
              <AutoData  placeholder="Chọn tỉnh thành phố" control={control} name="commune" id="commune" options={optionsA} disabled={!watch("district")} /> 
              </div>
            </div>
            

            <div className="submit-top-avt">
            <label for="file" className="label-file">
              <span className="hinhDaiDien">Hình đại diện</span>
            <input type="file" name="file" id="file" class="inputfile" style={{display:"none"}} {...register("image")}/>
            <div for="file" className="img-input">
              <img src={!watch("image")?"https://upload.wikimedia.org/wikipedia/commons/d/d2/Solid_white.png?20060513000852":"https://i.pinimg.com/236x/3a/5b/77/3a5b7775d266c7d089d20c2a3a792896.jpg"} alt="" />
            <i class="fa fa-camera"></i>
            <span>Chọn ảnh để tải lên</span>
            </div>
            </label>
            </div>
            
          </div>
          
          <div className="submit-center">
              <div className="form-group">
              <label htmlFor="exampleInputAddress">Địa Chỉ</label>
              <input type="text" className="form-control" id="exampleInputAddress" placeholder="Nhập địa chỉ" />
            </div>
            <hr />
          </div>

          <div className="submit-bottom">
                <div className="form-group">
                <label htmlFor="exampleInputRole">Vai Trò *</label>
                <AutoData  placeholder="Chọn vai trò" control={control} name="role" id="role" options={optionsA} /> 

              </div>


              <div className="form-group">
                <label htmlFor="exampleInputPosition">Chức Vụ *</label>
                <AutoData  placeholder="Chọn chức vụ" control={control} name="position" id="position" options={optionsA}  /> 


              </div>


              <div className="form-group">
                <label htmlFor="exampleInputPart">Bộ Phận *</label>
                <AutoData  placeholder="Chọn bộ phận" control={control} name="part" id="part" options={optionsA}  /> 


              </div>


              <div className="form-group">
                <label htmlFor="exampleInputAgency">Chi Nhánh *</label>
                <AutoData  placeholder="Chọn chi nhánh" control={control} name="agency" id="agency" options={optionsA} /> 


              </div>
          </div>
 
         
          <div className="btn-add-user">
           <button className="btn btn-add">Lưu</button>
          <button className="btn btn-cancel">Huỷ</button>
        </div>

      </form>
   
  
    </div>
  );
}
