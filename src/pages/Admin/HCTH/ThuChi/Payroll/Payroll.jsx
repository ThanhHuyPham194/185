import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { Tabs } from 'antd';
import { Table } from 'antd';
import date_svg from '../../../../../assets/img/Date.svg';
import vector_svg from '../../../../../assets/img/Vector.svg';
import shape_svg from '../../../../../assets/img/Shape.svg';
import eye_svg from '../../../../../assets/img/eye.svg';


import './payroll.scss';
const { TabPane } = Tabs;
export default function Payroll() {
    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            key: 'stt',
            // render: (text) => <a>{text}</a>,
            width: 60,
            height: 68,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullName',
            key: 'fullName',
            width: 150,
        },
        {
            title: 'Chức vụ',
            dataIndex: 'position',
            key: 'position',
            ellipsis: true,
        },
        {
            title: 'Lương cơ bản',
            dataIndex: 'basedSalary',
            key: 'basedSalary',
            ellipsis: true,
        },
        {
            title: 'Lương theo năng lực',
            dataIndex: 'skillsSalary',
            key: 'skillsSalary',
            ellipsis: true,
        },
        {
            title: 'Phụ cấp',
            dataIndex: 'subsidize',
            key: 'subsidize',
            ellipsis: true,
        },
        {
            title: 'Ngày công',
            dataIndex: 'workingDays',
            key: 'workingDays',
            ellipsis: true,
            width: 100,
        },
        {
            title: 'Tổng thu nhập',
            dataIndex: 'totalIncome',
            key: 'totalIncome',
            ellipsis: true,
        },
        {
            title: 'Chi tiết',
            dataIndex: 'details',
            key: 'details',
            // ellipsis: true,
            width: 80,
        },
    ];
    const data = [
        {
            key: '1',
            stt: 1,
            fullName: 'Lâm Thiếu Kỳ',
            position: 'Giám đốc',
            basedSalary: '10.000.000 VND',
            skillsSalary: '2.400.000 VND',
            subsidize: '1.700.000 VND',
            workingDays: '24',
            totalIncome: '14.100.000 VND',
            details: <img src={eye_svg}></img>,
        },
        {
            key: '2',
            stt: 2,
            fullName: 'Nguyễn Quang',
            position: 'Phó giám đốc',
            basedSalary: '8.000.000 VND',
            skillsSalary: '1.800.000 VND',
            subsidize: '1.500.000 VND',
            workingDays: '24',
            totalIncome: '11.200.000 VND',
            details: <img src={eye_svg}></img>,
        },
        {
            key: '3',
            stt: 3,
            fullName: 'Phan Anh',
            position: 'Phó giám đốc',
            basedSalary: '8.000.000 VND',
            skillsSalary: '1.800.000 VND',
            subsidize: '1.500.000 VND',
            workingDays: '24',
            totalIncome: '11.200.000 VND',
            details: <img src={eye_svg}></img>,
        },
        {
            key: '4',
            stt: 4,
            fullName: 'Tấn Tài',
            position: 'Nhân sự',
            basedSalary: '6.000.000 VND',
            skillsSalary: '1.200.000 VND',
            subsidize: '800.000 VND',
            workingDays: '24',
            totalIncome: '8.000.000 VND',
            details: <img src={eye_svg}></img>,
        },
        {
            key: '5',
            stt: 5,
            fullName: 'Thái Bảo',
            position: 'Nhân sự',
            basedSalary: '6.000.000 VND',
            skillsSalary: '1.200.000 VND',
            subsidize: '800.000 VND',
            workingDays: '24',
            totalIncome: '8.000.000 VND',
            details: <img src={eye_svg}></img>,
        },
        {
            key: '6',
            stt: 6,
            fullName: 'Thành An',
            position: 'Nhân sự',
            basedSalary: '6.000.000 VND',
            skillsSalary: '1.200.000 VND',
            subsidize: '800.000 VND',
            workingDays: '24',
            totalIncome: '8.000.000 VND',
            details: <img src={eye_svg}></img>,
        },
        {
            key: '7',
            stt: 7,
            fullName: 'Nhật Phương',
            position: 'Nhân sự',
            basedSalary: '6.000.000 VND',
            skillsSalary: '1.200.000 VND',
            subsidize: '800.000 VND',
            workingDays: '24',
            totalIncome: '8.000.000 VND',
            details: <img src={eye_svg}></img>,
        },
    ];
    const [visible, setVisible] = useState(false);

    const handleMenuClick = (e) => {
    };

    const handleVisibleChange = (flag) => {
        setVisible(flag);
    };
    const onChange = (key) => {
        console.log(key);
    };
    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Lâm Thiếu Kỳ',
                    key: '1',
                },
                {
                    label: 'Nguyễn Quang',
                    key: '2',
                },
                {
                    label: 'Phan Anh',
                    key: '3',
                },
            ]}
        />
    );
    return (
        <div className='payroll'>
            <div className="container">
                <h2>Bảng thanh toán lương</h2>
                <div className="payroll__filter">
                    <div className="payroll__filter--wrapper">
                        <p>Lương của</p>
                        <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                            <a onClick={(e) => e.preventDefault()}>
                                <span>Tất cả</span>
                                <img src={vector_svg} alt="vecto" />
                            </a>
                        </Dropdown>
                    </div>
                    <div className="payroll__filter--wrapper">
                        <p>Tháng 7</p>
                        <div className="date">
                            <div className="date__group">
                                <p className='start'>29/06/2022</p>
                                <span>-</span>
                                <p className='end'>29/07/2022</p>
                            </div>
                            <div className="icon">
                                <img src={date_svg} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="payroll__tabs">
                    <div className="container">
                        <Tabs defaultActiveKey="1" onChange={onChange}>
                            <TabPane tab="Chi tiết" key="1">
                                <div className="payroll__tabs--total">
                                    <div className="left">
                                        <div className="title">Tổng chi lương tháng 7</div>
                                        <div className="money">
                                            <div className="number">217.050.632 VND</div>
                                            <div className="percent">
                                                <p>+2.5%</p>
                                                <img src={shape_svg} alt="shape"></img>
                                            </div>
                                        </div>
                                        <p className='compare'>
                                            So với (195.294.504 VND tháng 6)
                                        </p>
                                    </div>
                                    <div className="right">
                                        <div className="title">Tổng chi lương năm 2021</div>
                                        <div className="money">
                                            <div className="number">1.217.050.632 VND</div>
                                            <div className="percent"><p>+2.5%</p>
                                                <img src={shape_svg} alt="shape"></img>
                                            </div>
                                        </div>
                                        <p className='compare'>
                                            So với (195.294.504 VND tháng 6)
                                        </p>
                                    </div>
                                </div>
                                <div className="payroll__tabs--table">
                                    <Table columns={columns} dataSource={data} />
                                </div>
                            </TabPane>
                            <TabPane tab="Lịch sử thanh toán lương" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Nghiệp vụ" key="4">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Tiền chuyển đến" key="5">
                                Content of Tab Pane 4
                            </TabPane>
                            <TabPane tab="Tiền chuyển đi" key="6">
                                Content of Tab Pane 5
                            </TabPane>
                        </Tabs>
                    </div>
                </div>

            </div>
        </div>
    );
}
