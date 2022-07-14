import React from 'react';
import './introduceInfo.scss';
export default function IntroduceInfo({ title, content, src, src2 }) {
    return (
        <>
            <div className="introduce-info">
                <div className="introduce-info__left">
                    <h3>{title}</h3>
                    {content?.map((e, index) => {
                        return <p key={index}>{e}</p>;
                    })}
                </div>
                <div className="introduce-info__right">
                    {src && <div className="img">
                        <img src={src} alt="img" />
                    </div>}
                    {src2 &&
                        <div className="img">
                            <img src={src2} alt="img" />
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
