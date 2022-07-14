import React from "react";
import close_svg from '../../assets/img/Close.svg';
import date_svg from '../../assets/img/Date.svg';
import file_svg from '../../assets/img/File.svg';
import document_svg from '../../assets/img/Document.svg';
import { useDispatch } from "react-redux/es/exports";
import './popupReport.scss';
const PopupReport = () => {
    const dispatch = useDispatch();
    const handleClosePopup = () => {
        dispatch({
            type: 'CLOSED_POPUP_REPORT'
        });
    };
    return (
        <div className="popup-report">
            <div className="container">
                <div className="popup-report__title">
                    <div className="num">01</div>
                    <div className="text">Báo cáo hồ sơ</div>
                    <div className="img" onClick={handleClosePopup}>
                        <img src={close_svg} alt="" />
                    </div>
                </div>
                <div className="popup-report__deadline">
                    <div className="circle"></div>
                    <p>Đang thực hiện</p>
                </div>
                <div className="popup-report__date">
                    <div className="left">
                        <div className="title">Ngày bắt đầu *</div>
                        <div className="input">
                            <div className="text">01/07/2022</div>
                            <div className="img">
                                <img src={date_svg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="title">Ngày kết thúc *</div>
                        <div className="input">
                            <div className="text">08/07/2022</div>
                            <div className="img">
                                <img src={date_svg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popup-report__room">
                    <div className="title">
                        Phòng nhận nhiệm vụ *
                    </div>
                    <div className="check-box">
                        <label>
                            <input type="checkbox" />
                            <p>Phòng HC-TH</p>
                        </label>
                        <label>
                            <input type="checkbox" />
                            <p>Phòng TBDT</p>
                        </label>
                    </div>
                </div>
                <div className="popup-report__status">
                    <div className="title">Trạng thái của từng phòng *</div>
                    <div className="popup-report__status--wrapper">
                        <div className="left"></div>
                        <div className="right">
                            <p>Chưa xem</p>
                            <p>Đã xem</p>
                            <p>Đang thực hiện</p>
                            <p>Hoàn thành</p>
                            <p>Trễ</p>
                        </div>
                    </div>
                    <div className="popup-report__status--wrapper">
                        <div className="left">
                            <p className="title">PHÒNG HC<span>-</span>TH</p>
                        </div>
                        <div className="right">
                            <p>Nhân viên A</p>
                            <p>Nhân viên C</p>
                            <p>Nhân viên B</p>
                        </div>
                    </div>
                    <div className="popup-report__status--wrapper">
                        <div className="left">
                            <p className="title">PHÒNG TBDT</p>
                        </div>
                        <div className="right">
                            <p></p>
                            <p>Nhân viên E</p>
                            <p>Nhân viên D</p>
                            <p>Nhân viên F</p>
                        </div>
                    </div>
                    <div className="popup-report__des">
                        <p className="title">Mô tả *</p>
                        <div className="info">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                            Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</div>
                    </div>
                    <div className="popup-report__files">
                        <div className="title">
                            Tệp đã tải lên *
                        </div>
                        <div className="popup-report__files--wrapper">
                            <div className="box">
                                <div className="img">
                                    <img src={file_svg} alt="" />
                                </div>
                                <p className="text">Bảng báo cáo hồ sơ tháng 1</p>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <img src={document_svg} alt="" />
                                </div>
                                <p className="text">Bảng báo cáo hồ sơ tháng 2</p>
                            </div>
                        </div>
                    </div>
                    <div className="popup-report__button">
                        <div className="button --edit">Chỉnh sửa</div>
                        <div className="button --done" onClick={handleClosePopup}>Hoàn tất</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupReport;