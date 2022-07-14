import React from 'react';
import './slideItem.scss';
export default function SlideItem({ src, title, content }) {
    return (
        <div className="slide-item">
            <div className="img">
                <img src={src} alt="image" />
            </div>
            <div className="content-group">
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>
    );
}
