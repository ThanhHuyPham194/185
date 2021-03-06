import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import AutoData from "../../../../../components/AutoComplete/AutoData";
import { XoaDiTichAction } from "../../../../../redux/actions/QuanLyTaiLieuAction";
import { Modal } from "antd";
import { Link } from "react-router-dom";

export default function Document() {
  const {
    register,
    control,
    handleSubmit,
  } = useForm();
  const Swal = require("sweetalert2");
  const { documents } = useSelector((state) => state.QuanLyTaiLieuReducer);
  const [documentsData, setDocumentsData] = useState(documents);
  const [filterCheckBox, setFilterCheckBox] = useState([]);
  const dispatch = useDispatch();

  //image handle
  const [image, setImage] = useState("");
  const [imageTechnical, setImageTechnical] = useState("");
  const [imageZoningMap, setimageZoningMap] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const options = [
    {
      value: "A",
    },
    {
      value: "B",
    },
    {
      value: "C",
    },
  ];


  const convert2base64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  const convert2base64Technical = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageTechnical(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  const convert2base64ZoningMap = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setimageZoningMap(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };
  //options autocomplete districts

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (!filterCheckBox[0]) {
      setDocumentsData(documents);
    } else {
      const documentsTemp = documents.filter((document) => {
        let checkedFilter = false;
        for (let index = 0; index < filterCheckBox.length; index++) {
          if (document.type === filterCheckBox[index]) {
            checkedFilter = true;
          }
        }
        if (checkedFilter) return true;
        else return false;
      });
      setDocumentsData(documentsTemp);
    }
  }, [filterCheckBox]);

  useEffect(() => {
    setDocumentsData(documents);
  }, [documents]);

  const handleChangeCheckBoxAll = (e) => {
    let checkBoxAll = document.querySelector("#gridCheckAll");
    let checkBoxList = document.querySelectorAll(".form-check-input");
    //checkbox all will dont' accept to uncheck when never single checkbox checked
    if (!checkBoxAll.checked) {
      let checkSingle = false;

      for (let index = 0; index < checkBoxList.length; index++) {
        if (index !== 0) {
          if (checkBoxList[index].checked) {
            checkSingle = true;
          }
        }
      }
      if (!checkSingle) {
        checkBoxAll.checked = true;
        return;
      }
      setDocumentsData(document);
    }

    //when Checkbox All checked return all single checkbox is unchecked
    else if (checkBoxAll.checked) {
      let checkBoxList = document.querySelectorAll(".form-check-input");
      for (let index = 0; index < checkBoxList.length; index++) {
        if (index !== 0) {
          checkBoxList[index].checked = false;
        }
      }
      setDocumentsData(documents);
      setFilterCheckBox([]);
    }
  };
  const handleChangeCheckBox = (e) => {
    //  unchecked checkbox all when clicked in ano;
    let checkBoxAll = document.querySelector("#gridCheckAll");
    let checkBoxSingle = document.querySelectorAll(".form-check-input");
    for (let index = 0; index < checkBoxSingle.length; index++) {
      if (!index) {
        if (checkBoxSingle[index].checked) {
          checkBoxAll.checked = false;
        }
      }
    }
    const nameCheckBoxChecked = e.target.id;

    //handle checkbox checked
    if (e.target.checked) {
      //handle checked filter event: set array filter to filter data
      if (nameCheckBoxChecked === "gridCheckNationSpecial") {
        setFilterCheckBox((prevState) => [
          ...prevState,
          "C???p qu???c gia ?????c bi???t",
        ]);
      }
      if (nameCheckBoxChecked === "gridCheckNation") {
        setFilterCheckBox((prevState) => [...prevState, "C???p qu???c gia"]);
      }
      if (nameCheckBoxChecked === "gridCheckCity") {
        setFilterCheckBox((prevState) => [...prevState, "C???p th??nh ph???"]);
      }
    }

    //handle checkbox unchecked
    if (!e.target.checked) {
      //  if all single check = false => check all =true
      let turnCheckBoxAllOff = false;
      for (let index = 0; index < checkBoxSingle.length; index++) {
        if (checkBoxSingle[index].checked) {
          turnCheckBoxAllOff = true;
        }
      }
      if (!turnCheckBoxAllOff) {
        checkBoxAll.checked = true;
        setDocumentsData(documents);
      }
      //handle checked filter event: set array filter to filter data
      if (nameCheckBoxChecked === "gridCheckNationSpecial") {
        setFilterCheckBox(
          filterCheckBox.filter((item) => item !== "C???p qu???c gia ?????c bi???t")
        );
      }
      if (nameCheckBoxChecked === "gridCheckNation") {
        setFilterCheckBox(
          filterCheckBox.filter((item) => item !== "C???p qu???c gia")
        );
      }
      if (nameCheckBoxChecked === "gridCheckCity") {
        setFilterCheckBox(
          filterCheckBox.filter((item) => item !== "C???p th??nh ph???")
        );
      }
    }
  };


  function handleClickDelete(id) {
    return Swal.fire({
      html:
        '<span style="color:#3D4852;font-size:24px;text-align:center;font-weight:700;">B???n c?? mu???n xo?? di t??ch n??y!</span>' +
        '<p style="color:#ccc;font-size:18px;text-align:center;font-weight:500;margin-top:12px;">B???n s??? xo?? v??nh vi???n di t??ch n??y.<br>B???m Hu??? ????? tr??? l???i.</p>',
      icon: "warning",
      iconColor: "red",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Xo??",
      cancelButtonText: "Hu???",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(XoaDiTichAction(id));
        return Swal.fire({
          html:
            '<span style="color:#3D4852;font-size:24px;text-align:center;font-weight:700;">Xo?? th??nh c??ng!</span>' +
            '<p style="color:#ccc;font-size:18px;text-align:center;font-weight:500;margin-top:12px;">B???n ???? xo?? v??nh vi???n di t??ch.<br>B???m Xong ????? tr??? v??? danh s??ch di t??ch.</p>',
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "Xong",
        });
      }
    });
  }
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container-document">
        <div className="document-title">
          <h2>QU???N L?? DI T??CH </h2>
        </div>
        <div className="document-option">
          <div className="document-option-district">
            <span>Ch???n qu???n *</span>
            <AutoData
              placeholder="Ch???n qu???n"
              control={control}
              name="district"
              id="districst"
              options={options}
            />
          </div>
          <div className="document-option-type">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheckAll"
                defaultChecked
                onChange={handleChangeCheckBoxAll}
              />
              <label className="form-check-label" htmlFor="gridCheckAll">
                T???t c???
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheckNationSpecial"
                onChange={handleChangeCheckBox}
              />
              <label
                className="form-check-label"
                htmlFor="gridCheckNationSpecial"
              >
                C???p qu???c gia ?????c bi???t
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheckNation"
                onChange={handleChangeCheckBox}
              />
              <label className="form-check-label" htmlFor="gridCheckNation">
                C???p qu???c gia
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheckCity"
                onChange={handleChangeCheckBox}
              />
              <label className="form-check-label" htmlFor="gridCheckCity">
                C???p th??nh ph???
              </label>
            </div>
            <button
              className="btn btn-add"
              onClick={showModal}
              type="button"
              data-toggle="modal"
              data-target="#modal-upload"
            >
              T???i l??n t??i li???u
            </button>
          </div>
        </div>

        {/* Modal input document */}
        <Modal
          title=""
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <form onSubmit={handleSubmit(onSubmit)} id="form-upload">
            <div className="form-group">
              <label htmlFor="exampleInputRelics">T??n di t??ch *</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputRelics"
                placeholder="Nh???p di t??ch"
                {...register("name")}
              />
            </div>
            <div className="form-body">
              <div className="form-body-left">
                <div className="image-relics">
                  <label htmlFor="file" className="label-file">
                    <span className="image-relics-title">Ch??n ???nh</span>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="inputfile"
                      style={{ display: "none" }}
                      {...register("image", {
                        onChange: (e) => {
                          convert2base64(e.target.files[0]);
                        },
                      })}
                    />
                    <div htmlFor="file" className="img-input">
                      {image ? <img src={image} alt="" /> : null}

                      {image ? <div className="img-overlay"></div> : null}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-image-fill"
                        viewBox="0 0 16 16"
                        style={{ color: image ? "white" : "#1a48e9" }}
                      >
                        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                      </svg>
                      <span style={{ color: image ? "#D8D8D8" : "#989898" }}>
                        Ch??n ???nh c???a di t??ch
                      </span>
                    </div>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputDesc">M?? t??? *</label>
                  <textarea
                    rows="5"
                    cols="50"
                    type="text"
                    className="form-control"
                    id="exampleInputDesc"
                    placeholder="Nh???p di t??ch"
                    {...register("desc")}
                  />
                </div>
              </div>
              <div className="form-body-right">
                <div className="image-relics">
                  <label htmlFor="fileImageTechnical" className="label-file">
                    <span className="image-relics-title">Ch??n b???n v??? k??? thu???t *</span>
                    <input
                      type="file"
                      name="file"
                      id="fileImageTechnical"
                      className="inputfile"
                      style={{ display: "none" }}
                      {...register("imageTechnical", {
                        onChange: (e) => {
                          convert2base64Technical(e.target.files[0]);
                        },
                      })}
                    />
                    <div htmlFor="file" className="img-input">
                      {imageTechnical ? <img src={imageTechnical} alt="" /> : null}

                      {imageTechnical ? <div className="img-overlay"></div> : null}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-image-fill"
                        viewBox="0 0 16 16"
                        style={{ color: imageTechnical ? "white" : "#1a48e9" }}
                      >
                        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                      </svg>
                      <span style={{ color: imageTechnical ? "#D8D8D8" : "#989898" }}>
                      Ch??n b???n v??? k??? thu???t
                      </span>
                    </div>
                  </label>
                </div>
                <div className="image-relics">
                  <label htmlFor="fileImageZoningMap" className="label-file">
                    <span className="image-relics-title">Ch??n b???n v??? khoanh v??ng *</span>
                    <input
                      type="file"
                      name="file"
                      id="fileImageZoningMap"
                      className="inputfile"
                      style={{ display: "none" }}
                      {...register("imageZoningMap", {
                        onChange: (e) => {
                          convert2base64ZoningMap(e.target.files[0]);
                        },
                      })}
                    />
                    <div htmlFor="file" className="img-input">
                      {imageZoningMap ? <img src={imageZoningMap} alt="" /> : null}

                      {imageZoningMap ? <div className="img-overlay"></div> : null}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-image-fill"
                        viewBox="0 0 16 16"
                        style={{ color: imageZoningMap ? "white" : "#1a48e9" }}
                      >
                        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                      </svg>
                      <span style={{ color: imageZoningMap ? "#D8D8D8" : "#989898" }}>
                      Ch??n b???n v??? khoanh v??ng
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>


            <div className="form-address">
              <label>V??? tr?? *</label>
                      <div className="form-address-input">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-geo-alt"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span>???p 2 thu???c x?? T??n Ki??n ??? B??nh Ch??nh</span>
                        </div>
            </div>


            <div className="form-bottom">
              <button type="submit" className="btn btn-primary">
                L??u
              </button>
            </div>
          </form>
          <i class="fa fa-times" onClick={() => setIsModalVisible(false)}></i>
        </Modal>



        {/* Container document-list */}
        <div className="document-list">
          {documentsData &&
            documentsData.map((document, index) => {
              return (
                <div className="document-list-item" key={index}>
                  <div className="document-item-info">
                    <img src={document.image} alt="" />
                    <div className="document-item-detail">
                      <h3>
                        {index + 1}. {document.name}
                      </h3>
                      <div className="document-item-adress">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-geo-alt"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span>{document.address}</span>
                      </div>
                      <Link to="/admin/overview" state={{titleCheckBox: `${document.type}`,}}>Xem chi ti???t</Link>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                    onClick={() => handleClickDelete(document.id)}
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
