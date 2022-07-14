import React from 'react';
import data_table_svg from '../../../assets/img/Data_table.svg';
import TaskInfo from '../../../components/TaskInfo/TaskInfo';
import addTasks_svg from '../../../assets/img/AddTasks.svg';
import carbonDoc_svg from '../../../assets/img/Carbon_Document.svg';
import building_svg from '../../../assets/img/Building.svg';
import './manageTask.scss';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../components/Modal/Modal';
import PopupReport from '../../../components/PopupReport/PopupReport';
import { Link } from 'react-router-dom';
export default function ManageTask() {
    const dispatch = useDispatch();
    const { isPopupReport } = useSelector(store => store.popup);
    const handlePopup = () => {
        console.log(isPopupReport);
        dispatch({
            type: 'OPENED_POPUP_REPORT'
        });
    };
    return (
        <div className={`manage-task`}>
            {isPopupReport &&
                <Modal>
                    <PopupReport />
                </Modal>}
            <div className="container">
                <div className="manage-task__head">
                    <p className="title">NHIỆM VỤ</p>
                    <div className="icon-group">
                        <div className="img">
                            <img src={data_table_svg} alt="" />
                        </div>
                        <Link to="/admin/listmission">
                        <p>Xem theo bảng</p>
                        </Link>
                    </div>
                </div>
                <div className="manage-task__status">
                    <div className="status-item">
                        <p className='text'>Chưa xem</p>
                        <div className="num">4</div>
                    </div>
                    <div className="status-item">
                        <p className='text'>Đang thực hiện</p>
                        <div className="num">1</div>
                    </div>
                    <div className="status-item">
                        <p className='text'>Hoàn thành</p>
                        <div className="num">3</div>
                    </div>
                    <div className="status-item">
                        <p className='text'>Trễ</p>
                        <div className="num">2</div>
                    </div>
                </div>
                <div className="manage-task__board">
                    <div className="manage-task__board--wrapper">
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 7' src={building_svg} nameRoom='Phòng HC-TH' expired='28/07/2022' rest='18' />
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 2' src={carbonDoc_svg} nameRoom='Phòng LHSDT' expired='28/07/2022' rest='18' />
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 7' src={carbonDoc_svg} nameRoom='Phòng HC-TH' expired='28/07/2022' rest='18' />
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 8' src={building_svg} nameRoom='Phòng LHSDT' expired='28/07/2022' rest='18' />
                    </div>
                    <div className="manage-task__board--wrapper">
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 1' src={building_svg} nameRoom='Phòng HC-TH' expired='28/07/2022' rest='8' />
                    </div>
                    <div className="manage-task__board--wrapper">
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 9' src={carbonDoc_svg} nameRoom='Phòng LHSDT' expired='28/07/2022' rest='11' />
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 7' src={building_svg} nameRoom='Phòng HC-TH' expired='28/07/2022' rest='18' />
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 7' src={carbonDoc_svg} nameRoom='Phòng LHSDT' expired='28/07/2022' rest='15' />
                    </div>
                    <div className="manage-task__board--wrapper">
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 7' src={carbonDoc_svg} nameRoom='Phòng LHSDT' expired='28/07/2022' rest='15' />
                        <TaskInfo onClick={handlePopup} title='Báo cáo hồ sơ tháng 7' src={carbonDoc_svg} nameRoom='Phòng LHSDT' expired='28/07/2022' rest='15' />
                    </div>
                </div>
                <Link to="/admin/addmission">
                <div className="manage-task__add">
                    <div className="img">
                        <img src={addTasks_svg} alt="addtask_svg" />
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
}
