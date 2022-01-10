import React, {Fragment, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/faq.css";
import "../assets/stylesheets/base.css";
import Image from "../assets/res/slider/slider.jpg";

const CustomerFAQ = () => {

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <h1 className="nail__faq-heading">FAQ</h1>
                </div>

                <div className="row">
                    <h1 className="nail__faq-statement">CÁC CÂU HỎI THƯỜNG GẶP Ở ĐI CHỢ THUÊ!</h1>
                </div>
            </div>
            <div className="row">
                <div className="wrap__faq-description">
                    {/* <!-- img --> */}
                    <img className="nail-faq__img" src={Image} alt=""/>
                    {/* <!-- description --> */}
                    <p className="nail-faq-description">Hệ thống Đi Chợ Thuê là một hệ thống mua bán khá mới lạ ở thời điểm hiện tại, do đó có khá nhiều khách hàng chưa hiểu được các thủ tục và các bước thực hiện mua hàng. Vì thế ở đây chúng tôi sẽ giải đáp một số thắc mắc, nghi ngờ bạn có thể có khi mua hàng ở Đi Chợ Thuê.</p>
                </div>
            </div>
            
            <div className="wrap__question-list">
                <div className="question__heading-item">
                    <h2 className="question-item__num">01.<Fragment>&nbsp;</Fragment></h2>
                    <h2 className="question-item">Đi Chợ Thuê có địa chỉ ở đâu?</h2>
                </div>
                <p className="answer-item">Đi chợ thuê là một hệ thống mua bán hàng online nên chúng tôi không có cửa hàng offline. Nhưng chúng tôi có trung tâm hỗ trợ tọa lạc tại 44/9, Nguyễn Thị Minh Khai, Q3, Thành Phố Hồ Chí Minh.</p>
            </div>
            <div className="wrap__question-list">
                <div className="question__heading-item">
                    <h2 className="question-item__num">02.<Fragment>&nbsp;</Fragment></h2>
                    <h2 className="question-item">Thời điểm hoạt động của Đi Chợ Thuê</h2>
                </div>
                <p className="answer-item">Chúng tôi làm việc 24/7 và tất cả các ngày trong tuần để đáp ứng nhu cầu của khách hàng</p>
            </div>
            <div className="wrap__question-list">
                <div className="question__heading-item">
                    <h2 className="question-item__num">03.<Fragment>&nbsp;</Fragment></h2>
                    <h2 className="question-item">Tôi đang là F0 thì có đặt hàng được không?</h2>
                </div>
                <p className="answer-item">Bạn vẫn có thể đặt hàng nếu bạn là F0, nhưng bạn phải thanh toán bằng thẻ ngân hàng và duy trì khoảng cách an toàn khi nhận hàng từ shipper</p>
            </div>
            <div className="wrap__question-list">
                <div className="question__heading-item">
                    <h2 className="question-item__num">04.<Fragment>&nbsp;</Fragment></h2>
                    <h2 className="question-item">Đi Chợ Thuê chấp nhận phương thức thanh toán nào?</h2>
                </div>
                <p className="answer-item">Chúng tôi chấp nhận phương thức thanh toán qua thẻ ngân hàng (ATM) và tiền mặt.</p>
            </div>
            <div className="wrap__question-list">
                <div className="question__heading-item">
                    <h2 className="question-item__num">05.<Fragment>&nbsp;</Fragment></h2>
                    <h2 className="question-item">Tại sao tôi lại chọn Đi Chợ Thuê thay vì tự đi mua hàng?</h2>
                </div>
                <p className="answer-item">Đi Chợ Thuê được xây dựng nên trong mùa dịch nhằm mục đích hạn chế sự đi lại không cần thiết của người dân để tránh lây lan dịch bệnh covid.</p>
            </div>
            <div className="wrap__question-list">
                <div className="question__heading-item">
                    <h2 className="question-item__num">06.<Fragment>&nbsp;</Fragment></h2>
                    <h2 className="question-item">Giá cả trên Đi Chợ Thuê có khác với giá ở chợ hoặc siêu thị?</h2>
                </div>
                <p className="answer-item">Chúng tôi hợp tác với các siêu thị và cửa hàng/siêu thị, giá sản phẩm trên hệ thống của chúng tôi được niêm yết theo giá cung cấp của các cửa hàng siêu thị.</p>
            </div>
            <div className="wrap__question-list">
                <div className="question__heading-item">
                    <h2 className="question-item__num">07.<Fragment>&nbsp;</Fragment></h2>
                    <h2 className="question-item">Sản phẩm, mặt hàng có đảm bảo vệ sinh và nguồn gốc có rõ ràng không?</h2>
                </div>
                <p className="answer-item">Tất cả sản phẩm được đăng bán đều được duyệt bởi nhân viên hệ thống, nên vấn đề vệ sinh an toàn thực phẩm sẽ được đảm bảo.</p>
            </div>
        </div>
    );
}

export default CustomerFAQ;