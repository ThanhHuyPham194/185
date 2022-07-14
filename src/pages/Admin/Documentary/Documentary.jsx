import React from 'react';
import './documentary.scss';
import cloud_svg from '../../../assets/img/Cloud.svg';

import date_svg from '../../../assets/img/Date.svg';
import document_svg from '../../../assets/img/Document.svg';
import congvan_1 from '../../../assets/img/congvan1.jpg';
import paginateArrow from '../../../assets/img/PaginateArrow.svg';

export default function Documentary() {
    return (
        <div className='documentary --relics'>
            <div className="container">
                <div className="documentary__head">
                    <div className="left">
                        <h3>CÔNG VĂN THAM MƯU</h3>
                    </div>
                    <div className="right">
                        <div className="upload-group">
                            <div className="img"><img src={cloud_svg} alt="" /></div>
                            <p>Tải lên tài liệu</p>
                        </div>
                    </div>
                </div>
                <div className="documentary__main">
                    <p className="fordate">Chọn ngày *</p>
                    <div className="documentary__main--wrapper">
                        <div className="left">
                            <div className="date-group">
                                <div className="date-group__left">
                                    <p>27/12/2021</p>
                                    <p>-</p>
                                    <p>29/12/2021</p>
                                </div>
                                <div className="date-group__right">
                                    <img src={date_svg} alt="calendar_svg" />
                                </div>
                            </div>
                            <div className="documentary-content">
                                <p className="date">Ngày 29/12/2021</p>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>
                                <div className="documentary-content--main">
                                    <div className="img"><img src={document_svg} alt="document_svg" /></div>
                                    <div className="file">congvanngay của uỷ ban nhân dân 2/7.word</div>
                                </div>

                            </div>
                        </div>
                        <div className="right">
                            <div className="img">
                                <img src={congvan_1} alt="" />
                            </div>
                            <div className="paginate">
                                <div className="arrow arrow-back">
                                    <img src={paginateArrow} alt="paginateArrow_svg" />
                                </div>
                                <div className="page">1/5</div>
                                <div className="arrow arrow-next">
                                    <img src={paginateArrow} alt="paginateArrow_svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
