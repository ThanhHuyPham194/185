import React from 'react';
import ViewGroup from '../../../../../components/ViewGroup/ViewGroup';
import drawing_building1 from '../../../../../assets/img/drawing/drawing_building1.jpg';
import drawing_building2 from '../../../../../assets/img/drawing/drawing_building2.jpg';
import './drawingBuilding.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import DocumentOption from '../../../../../components/DocumentOption/DocumentOption';
export default function DrawingBuilding() {
    const navigate=useNavigate();
    const {state}= useLocation();
    console.log(state);
    return (
        <div className="drawing-building --relics">
         <DocumentOption titleCheckBox={state.titleCheckBox}/>
            <h2>Di tích lịch sử Địa đạo Củ Chi</h2>
            <div className="container">
                <div className="drawing-building__view --view">
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
                            navigate("/admin/drawingoverview",{
                                state: {
                                    titleCheckBox: state.titleCheckBox,
                                },
                              })
                        }}>
                    <ViewGroup content='Xem bản đồ khoanh vùng' />
                    </button>
                </div>
                <div className="drawing-building__img">
                    <img src={drawing_building1} alt="drawing image" />
                </div>
                <div className="drawing-building__img">
                    <img src={drawing_building2} alt="drawing image" />
                </div>
            </div>
        </div>
    );
}
