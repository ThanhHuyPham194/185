import React from 'react';
import './taskInfo.scss';
export default function TaskInfo({ title, src, nameRoom, expired, rest, ...allRest }) {
    return (
        <div className="task-info" {...allRest}>
        <div className="title">
            {title}
        </div>
        <div className="room">
            <div className="img"><img src={src} alt="" /></div>
            <div className="name">
                <p>{nameRoom}</p>
            </div>
        </div>
        <div className="expired">
            <p className="text">Ngày hết hạn:</p>
            <p className="date">{expired}</p>
        </div>
        <div className="rest">
            <p className="text">Thời gian còn lại:</p>
            <p className="date">{rest}</p>
        </div>
    </div>
    );
}
