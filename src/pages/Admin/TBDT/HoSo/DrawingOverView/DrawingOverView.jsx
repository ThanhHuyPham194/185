import React from 'react';
import ViewGroup from '../../../../../components/ViewGroup/ViewGroup';
import drawing_overview from '../../../../../assets/img/drawing/drawing_overview.jpg';
import './drawingOverView.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DocumentOption from '../../../../../components/DocumentOption/DocumentOption';
export default function DrawingOverView() {
    const navigate=useNavigate();
    const {state}=useLocation();
    return (
        <div className="drawing-overview --relics">
        <DocumentOption titleCheckBox={state.titleCheckBox}/>
        <h2>Di tích lịch sử Địa đạo Củ Chi</h2>
        <div className="container">
            <div className="drawing-overview__view --view">
            <button onClick={()=>{
                            navigate("/admin/overview",{
                                state: {
                                    titleCheckBox: state.titleCheckBox,
                                },
                              })
                        }}>
                <ViewGroup content='Xem chi tiết' />
                </button>
                <button onClick={()=>{
                            navigate("/admin/drawingbuilding",{
                                state: {
                                    titleCheckBox: state.titleCheckBox,
                                },
                              })
                        }}>
                <ViewGroup content='Xem bản vẽ kĩ thuật' />
                </button>
            </div>
            <div className="drawing-overview__img">
                <img src={drawing_overview} alt="drawing image" />
            </div>
        </div>
    </div>
    );
}
