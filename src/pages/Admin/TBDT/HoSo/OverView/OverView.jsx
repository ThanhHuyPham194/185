import React from 'react';
import ViewGroup from '../../../../../components/ViewGroup/ViewGroup';
import IntroduceInfo from '../../../../../components/IntroduceInfo/IntroduceInfo';
import image_19 from '../../../../../assets/img/overview/image-19.jpg';
import image_20 from '../../../../../assets/img/overview/image-20.jpg';
import image_37 from '../../../../../assets/img/overview/image-37.jpg';
import image_38 from '../../../../../assets/img/overview/image-38.jpg';
import image_39 from '../../../../../assets/img/overview/image-39.jpg';
import image_40 from '../../../../../assets/img/overview/image-40.jpg';
import image_41 from '../../../../../assets/img/overview/image-41.jpg';
import SlideItem from '../../../../../components/SlideItem/SlideItem';
import DocumentOption from '../../../../../components/DocumentOption/DocumentOption';
import { useLocation, useNavigate } from 'react-router-dom';

import './overView.scss';
export default function OverView() {
    const {state}=useLocation();
    let navigate = useNavigate();
    return (
        <>
        <div className="over-view --relics">
            <DocumentOption titleCheckBox={state.titleCheckBox}/>
            <h2>Di tích lịch sử Địa đạo Củ chi</h2>
            <div className="container">
                <div className="over-view__view --view">
                    <button onClick={()=>{
                        navigate("/admin/drawingoverview",{
                            state: {
                                titleCheckBox: state.titleCheckBox,
                            },
                          })
                    }}>
                    <ViewGroup content="Xem bản đồ khoanh vùng" />
                    </button>
                    <button onClick={()=>{
                        navigate("/admin/drawingbuilding",{
                            state: {
                                titleCheckBox: state.titleCheckBox,
                            },
                          })
                    }}>
                    <ViewGroup content="Xem bản đồ kĩ thuật" />
                    </button>
                </div>
                <div className="over-view__info">
                    <IntroduceInfo title='Sơ lược'
                        content={['Địa đạo Củ Chi là một hệ thống phòng thủ trong lòng đất ở huyện Củ Chi, cách Thành phố Hồ Chí Minh 55 km về hướng tây-bắc. Hệ thống này được quân kháng chiến Việt Minh và Mặt trận Dân tộc Giải phóng miền Nam Việt Nam đào trong thời kỳ Chiến tranh Đông Dương và Chiến tranh Việt Nam. Hệ thống địa đạo bao gồm bệnh xá, nhiều phòng ở, nhà bếp, kho chứa, phòng làm việc, hệ thống đường ngầm dưới lòng đất, dài khoảng 250 km và có các hệ thống thông hơi tại vị trí các bụi cây. Địa đạo Củ Chi được xây dựng ở điểm cuối Đường mòn Hồ Chí Minh, trên vùng đất được mệnh danh là "đất thép" để ca ngợi ý chí phòng thủ kiên cường của quân dân nơi đây. Trong Chiến dịch Tết Mậu Thân 1968, quân Giải phóng miền Nam đã xuất phát từ hệ thống địa đạo này để tấn công vào Sài Gòn.', 'Sau chiến tranh, khu địa đạo Củ Chi trở thành di tích lịch sử cấp quốc gia. Năm 2015, khu di tích lịch sử địa đạo Củ Chi đón nhận danh hiệu Anh hùng Lao động do có thành tích đặc biệt xuất sắc trong lao động, sáng tạo. Trong 20 năm hoạt động, khu di tích đón hơn 20 triệu lượt khách trong và ngoài nước tham quan, tìm hiểu.']}
                        src={image_19}
                    />
                    <IntroduceInfo title='Lịch sử' content={[
                        'Địa đạo Củ Chi là cách gọi chung của các hệ thống địa đạo khác nhau, được hình thành từ khoảng thời gian 1946-1948, trong thời kỳ chiến tranh Đông Dương. Thời gian này, quân dân hai xã Tân Phú Trung và Phước Vĩnh An đã đào những đoạn hầm ngắn, cấu trúc đơn giản dùng để ẩn nấp, cất giấu tài liệu, vũ khí. Cũng có ý kiến cho rằng việc đào địa đạo khởi đầu do dân cư khu vực này tự phát thực hiện vào năm 1948.',
                        'Cư dân khu vực đã đào các hầm, địa đạo riêng lẻ để tránh các cuộc bố ráp càn quét của quân đội Pháp và để cung cấp nơi trú ẩn cho quân Việt Minh. Mỗi làng xây một địa đạo riêng, sau đó do nhu cầu đi lại giữa địa đạo các làng xã, hệ thống địa đạo đã được nối liền nhau tạo thành một hệ thống địa đạo liên hoàn, phức tạp, về sau phát triển rộng ra nhiều nơi, nhất là 6 xã phía Bắc Củ Chi và cấu trúc các đoạn hầm, địa đạo được cải tiến trở thành nơi che giấu lực lượng, khi chiến đấu có thể liên lạc, hỗ trợ nhau.',
                        'Đến năm 1965, có khoảng 200 km địa đạo đã được đào. Về quy mô, hệ thống địa đạo có tổng chiều dài toàn tuyến là trên 200 km, với 3 tầng sâu khác nhau, tầng trên cách mặt đất khoảng 3 m, tầng giữa cách mặt đất khoảng 6 m, tầng dưới cùng sâu hơn 12 m. Lúc này, địa đạo không chỉ còn là nơi trú ẩn mà đã trở thành nơi sinh sống, cứu thương, hội họp, kho chứa vũ khí,...'
                    ]}
                        src={image_20}
                        src2={image_39}

                    />
                    <IntroduceInfo title='Sơ lược'
                        content={['Cuộc sống dưới địa đạo thiếu ánh sáng, ẩm ướt và nóng bức và điều kiện vệ sinh kém nên hầu như đa số những người sống ở địa đạo đều bị ký sinh trùng, bệnh da liễu và các bệnh về xương. Ngoài ra, việc thiếu thốn lương thực, thực phẩm và nhu yếu phẩm cũng là vấn đề lớn nhất của cư dân địa đạo.']}
                    />
                    <IntroduceInfo title='Phòng thủ' content={['Quân đội Mỹ và Quân lực Việt Nam Cộng hòa đã liên tục tấn công vào hệ thống địa đạo bằng đủ phương tiện: bom, bơm nước vào địa đạo, phun hơi ngạt vào các miệng hầm... nhưng do hệ thống địa đạo được thiết kế có thể cô lập từng phần nên chỉ bị hư hại phần rìa.', 'Quân đội Mỹ đã áp dụng nhiều biện pháp để phát hiện các cửa vào (được ngụy trang) và phát hiện các cửa thông gió (thường được đặt giữa các bụi cây) nhưng thường không hiệu quả.', 'Biện pháp hữu hiệu nhất là sử dụng chó nghiệp vụ. Ban đầu có một số cửa vào và lỗ thông gió bị chó nghiệp vụ phát hiện do chó ngửi được hơi người. Tuy nhiên, sau đó, những người ở dưới địa đạo đã dùng xà phòng của Mỹ đặt ở cửa hầm và cửa thông gió nên chó nghiệp vụ không thể phát hiện ra.', 'Nếu phát hiện cửa hầm, quân Mỹ thường bơm khí độc hoặc cử trinh sát chui xuống để đặt mìn. Trong những trận càn quy mô lớn và hỏa lực mạnh, việc sập những đoạn địa đạo nông cũng gây tổn thất nhân mạng cho cả hai bên. Tuy nhiên đại bộ phận hệ thống này vẫn trụ vững.']}
                        src={image_37}
                    />
                    <IntroduceInfo title='Khu di tích' content={['Hiện nay, Ban Quản lý Khu di tích lịch sử Địa đạo Củ Chi (trực thuộc Bộ Chỉ huy Quân sự thành phố Hồ Chí Minh) trực tiếp quản lý cả hai di tích địa đạo Bến Dược và địa đạo Bến Đình. Khu di tích gồm có hệ thống địa đạo (Bến Dược, Bến Đình), đền Bến Dược, khu quản trị, khu dịch vụ, khu vực tái hiện vùng giải phóng và vành đai diệt quân Mỹ, khu du lịch sinh thái - giải trí ven sông Sài Gòn.', 'Ngày 27/12/2015, Thành ủy, Hội đồng nhân dân, Ủy ban nhân dân, Ủy ban Mặt trận Tổ quốc Thành phố Hồ Chí Minh tổ chức lễ khánh thành Khu truyền thống cách mạng Sài Gòn - Chợ Lớn - Gia Định, kỷ niệm 20 năm ngày truyền thống khu di tích lịch sử địa đạo Củ Chi (19/12/1995 - 19/12/2015). Khu truyền thống cách mạng Sài Gòn - Chợ Lớn - Gia Định khởi công từ ngày 18/02/2010, nằm trong quần thể Khu di tích lịch sử địa đạo Củ Chi với diện tích 13,5ha, gồm khu đền thờ, nhà văn bia, khu lễ, khu hồ sen, cầu đá, cảnh quan đặc trưng Tây Nam Bộ.', 'Bến Dược là tên gọi của vùng đất Phú Mỹ, Phú Thuận từ năm 1929, hiện nay thuộc xã Phú Mỹ Hưng. Trước đây, nơi đây là địa điểm vượt qua sông Sài Gòn để đi qua các tỉnh Đông Nam Bộ khác.']}
                        src={image_38} />

                </div>
                <div className="line"></div>
                <div className="over-view__slider">
                    <SlideItem src={image_40}
                        title='Di tích lịch sử Dinh Độc Lập'
                        content='Nơi ghi dấu thắng lợi hoàn toàn cuộc kháng chi...'
                    />
                    <SlideItem src={image_41}
                        title='Di tích lịch sử Dinh Độc Lập'
                        content='Nơi ghi dấu thắng lợi hoàn toàn cuộc kháng chi...'
                    />
                </div>
            </div>

        </div>
    </>
    );
}
