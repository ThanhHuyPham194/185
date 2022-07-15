import React from "react";
import AutoData from "../AutoComplete/AutoData";
import { useForm } from "react-hook-form";
import "./DocumentOption.scss";
import { useEffect } from "react";

export default function DocumentOption({ titleCheckBox }) {
  const { control } = useForm();




  return (
    <div className="document-option-disabled">
      <div className="document-option-district">
        <span>Chọn quận *</span>
        <AutoData
          placeholder="Chọn quận"
          name="district"
          id="districst"
          control={control}
        />
      </div>
      <div className="document-option-type">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheckAll"
          />
          <label className="form-check-label" htmlFor="gridCheckAll">
            Tất cả
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheckNationSpecial"
            defaultChecked={titleCheckBox==="Cấp quốc gia đặc biệt"?"true":""}
          />
          <label className="form-check-label" htmlFor="gridCheckNationSpecial">
            Cấp quốc gia đặc biệt
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheckNation"
            defaultChecked={titleCheckBox==="Cấp quốc gia"?"true":""}

          />
          <label className="form-check-label" htmlFor="gridCheckNation">
            Cấp quốc gia
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheckCity"
            defaultChecked={titleCheckBox==="Cấp thành phố"?"true":""}

          />
          <label className="form-check-label" htmlFor="gridCheckCity">
            Cấp thành phố
          </label>
        </div>
      </div>
    </div>
  );
}
