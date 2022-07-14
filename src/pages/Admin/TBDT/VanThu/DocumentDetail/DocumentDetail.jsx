import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import AutoData from "../../../../../components/AutoComplete/AutoData";
import congvan from "../../../../../assets/img/congvan.png";
import imageSearch from "../../../../../assets/img/documentsearch.png";

const { RangePicker } = DatePicker;

export default function DocumentDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
  } = useForm();
  //modal upload
  const [isModalUploadVisible, setIsModalUploadVisible] = useState(false);
  const [isModalSearchVisible, setIsModalSearchVisible] = useState(false);
  const optionsA = [
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
  return (
    <>
      {/* container documentdetail */}

      <div className="container-documentdetail">
        {/* Modal upload */}
        <Modal
          // style={{ top: 20, color: "red" }}
          visible={isModalUploadVisible}
          onOk={() => setIsModalUploadVisible(false)}
          onCancel={() => setIsModalUploadVisible(false)}
          footer={null}
        >
          <div className="modal-upload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cloud-upload"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
              />
            </svg>
            <h3>Chọn một tệp tin hoặc kéo và thả ở đây</h3>
            <span>JPG, PNG hoặc PDF, Word, Excel </span>
            <button>Thêm file</button>
            <div className="document-list">
              <div className="document-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-earmark-word"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.485 6.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 9.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 0 0-.97-.242l-1.036 4.144-.997-3.655a.5.5 0 0 0-.964 0l-.997 3.655L5.485 6.88z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
                <span>Bảng báo cáo hồ sơ tháng 1</span>
              </div>
              <div className="document-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-earmark-pdf"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                  <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
                </svg>
                <span>Bảng báo cáo hồ sơ tháng 2</span>
              </div>
            </div>
          </div>
          <div className="modal-button-upload">
            <button>Xong</button>
          </div>
          <i class="fa fa-times" onClick={() => setIsModalUploadVisible(false)}></i>
        </Modal>

        {/* Modal search */}
        <Modal
          // style={{ top: 20, color: "red" }}
          visible={isModalSearchVisible}
          onOk={() => setIsModalSearchVisible(false)}
          onCancel={() => setIsModalSearchVisible(false)}
          footer={null}
          bodyStyle={{ width: "800px", backgroundColor: "white" }}
        >
          <div className="modal-search">
            <h1>Tìm kiếm nâng cao</h1>
            <form className="modal-search-input">
              <div className="form-group">
                <label htmlFor="inputCode">Số ký hiệu</label>
                <AutoData
                  placeholder="Chọn số ký hiệu"
                  control={control}
                  name="inputCode"
                  id="inputCode"
                  options={optionsA}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputHandlePerson">Người xử lý</label>
                <AutoData
                  placeholder="Chọn người xử lý"
                  control={control}
                  name="inputHandlePerson"
                  id="inputHandlePerson"
                  options={optionsA}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputNameDocument">Tên văn bản</label>
                <AutoData
                  placeholder="Chọn tên văn bản"
                  control={control}
                  name="inputNameDocument"
                  id="inputNameDocument"
                  options={optionsA}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputCategory">Lĩnh vực</label>
                <AutoData
                  placeholder="Chọn lĩnh vực"
                  control={control}
                  name="inputCategory"
                  id="inputCategory"
                  options={optionsA}
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputCode">Ngày bắt đầu *</label>
                <DatePicker placeholder="Chọn ngày bắt đầu" />
              </div>
              <div className="form-group">
                <label htmlFor="InputCode">Ngày kết thúc *</label>
                <DatePicker placeholder="Chọn ngày kết thúc" />
              </div>
              <div className="form-group">
                <label htmlFor="inputEditorDocument">Người soạn</label>
                <AutoData
                  placeholder="Chọn người soạn"
                  control={control}
                  name="inputEditorDocument"
                  id="inputEditorDocument"
                  options={optionsA}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputSignDocument">Người ký văn bản</label>
                <AutoData
                  placeholder="Chọn người ký văn bản"
                  control={control}
                  name="inputSignDocument"
                  id="inputSignDocument"
                  options={optionsA}
                />
              </div>
            </form>
          </div>
          <div className="modal-button-search">
            <button className="button-search">Tìm kiếm</button>
            <button
              className="button-back"
              onClick={() => setIsModalSearchVisible(false)}
            >
              Quay lại
            </button>
          </div>
          <i class="fa fa-times" onClick={() => setIsModalSearchVisible(false)}></i>
        </Modal>

        {/* Container page documentdetail */}
        <div className="documentdetail-title">
          <Link to="/admin/director">
            <h2>DANH MỤC</h2>
          </Link>
          <span>{">>"}</span>
          <Link to="/admin/documentbod" state={state}>
            <a>{state.role}</a>
          </Link>
          <span>{">>"}</span>
          <Link to="/admin/documenttype" state={state}>
            <a>{state.title}</a>
          </Link>
          <span>{">>"}</span>
          <h3>{state.document}</h3>
          <div
            className="documentdetail-search"
            onClick={() => setIsModalSearchVisible(true)}
          >
            <span>Tìm kiếm nâng cao</span>
            <img src={imageSearch} alt="" />
          </div>
        </div>
        <div className="documentdetail-body">
          <span>{state.document}</span>
          <div
            className="upload-document"
            onClick={() => setIsModalUploadVisible(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cloud-upload"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
              />
            </svg>
            <span>Tải lên tài liệu</span>
          </div>
          <div className="documentdetail-data">
            <div className="documentdetail-data-left">
              <div className="date-picker">
                <label htmlFor="daterange">Chọn ngày *</label>
                <RangePicker id="daterange" />
              </div>
              <span>Ngày 12/7/2022</span>
              <div className="documentdetail-list">
                {[...Array(20)].map((item, index) => {
                  return (
                    <>
                      <div className="documentdetail-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-file-earmark-word"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.485 6.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 9.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 0 0-.97-.242l-1.036 4.144-.997-3.655a.5.5 0 0 0-.964 0l-.997 3.655L5.485 6.88z" />
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                        </svg>
                        <span>congvanngay của uỷ ban nhân dân 2/7.word</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="documentdetail-data-right">
              <img src={congvan} alt="Hình ảnh công văn" />
              <div className="image-paginate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                  />
                </svg>
                <span>1/5</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
