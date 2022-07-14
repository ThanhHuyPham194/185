import React from 'react';
import './popupPayroll.scss';
import tech_svg from '../../assets/img/tech.svg';
import close_svg from '../../assets/img/Close.svg';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { Table } from 'antd';
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Tên',
        dataIndex: 'name',
    },
    {
        title: 'Chức vụ',
        dataIndex: 'position',
    },
    {
        title: 'Lương thực nhận',
        dataIndex: 'salary',
    },
    {
        title: 'Ngày nhận',
        dataIndex: 'date',
    },
    {
        title: 'Tháng',
        dataIndex: 'month',
    },

];
const data = [
    {
        key: '1',
        id: '01',
        name: 'Lâm Thiếu Kỳ',
        position: 'Giám đốc',
        salary: '14.100.000 VND',
        date: '05/08/2022',
        month: '08/2022'
    },
    {
        key: '2',
        id: '01',
        name: 'Lâm Thiếu Kỳ',
        position: 'Giám đốc',
        salary: '14.100.000 VND',
        date: '05/08/2022',
        month: '08/2022'
    },
    {
        key: '3',
        id: '01',
        name: 'Lâm Thiếu Kỳ',
        position: 'Giám đốc',
        salary: '14.100.000 VND',
        date: '05/08/2022',
        month: '08/2022'
    },
    {
        key: '4',
        id: '01',
        name: 'Lâm Thiếu Kỳ',
        position: 'Giám đốc',
        salary: '14.100.000 VND',
        date: '05/08/2022',
        month: '08/2022'
    },
    {
        key: '5',
        id: '01',
        name: 'Lâm Thiếu Kỳ',
        position: 'Giám đốc',
        salary: '14.100.000 VND',
        date: '05/08/2022',
        month: '08/2022'
    },

];



export default function PopupPayroll() {
    const dispatch = useDispatch();
    const handleClosePopup = () => {
        dispatch({
            type: 'CLOSED_POPUP'
        });
    };
    return (
        <div className='popupdetails-salary'>
            <div className="container">
                <div className="close" onClick={handleClosePopup} style={{ cursor: 'pointer' }}><img src={close_svg} alt="close_svg" /></div>
                <h3>THÔNG TIN LƯƠNG VÀ THANH TOÁN</h3>
                <div className="popupdetails-salary__wrapper">
                    <div className="left">
                        <p className="title">Thông tin lương</p>
                        <div className="box">
                            <div className="salary">Tổng lương thực tháng 7</div>
                            <div className="money">
                                <div className="number">14.100.000 VND</div>
                                <div className="percent">
                                    <p>0%</p>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.6921 2.43526L5.6921 11.3333C5.6921 11.7015 6.05285 12 6.49786 12C6.94287 12 7.30362 11.7015 7.30362 11.3333L7.30362 2.44665L11.5322 6.43936C11.8254 6.71628 12.3345 6.74406 12.6692 6.50141C13.0039 6.25876 13.0375 5.83756 12.7442 5.56064L7.16468 0.292301C7.01971 0.11588 6.77514 0 6.49786 0C6.49651 0 6.49517 2.86102e-06 6.49382 8.58307e-06C6.26936 -0.00090313 6.04453 0.0751123 5.88305 0.228018L0.250759 5.56135C-0.0420457 5.83861 -0.0077495 6.25977 0.327361 6.50203C0.662472 6.74429 1.1715 6.71591 1.4643 6.43865L5.6921 2.43526Z" fill="#C8C8C8" />
                                    </svg>

                                </div>
                            </div>
                            <p className='compare'>
                                So với (14.100.000 VND tháng trước)
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <p className="title">Thanh toán</p>
                        <div className="box">
                            <div className="box__wrapper">
                                <div className="name">Phạm Văn Tài</div>
                                <div className="icon"><img src={tech_svg} alt="tech_svg" /></div>
                            </div>
                            <p className="number-account">1903 3068 501012</p>
                            <p className='compare'>
                                Techcombank
                            </p>
                        </div>
                    </div>
                </div>
                <div className="popupdetails-salary__history">
                    <p className="title">Lịch sử thanh toán</p>
                    <Table columns={columns} dataSource={data} size="middle" pagination={false} />
                </div>
            </div>
        </div>
    );
}
