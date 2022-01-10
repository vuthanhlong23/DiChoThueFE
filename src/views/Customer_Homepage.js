import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/trangchu.css";
import "../assets/stylesheets/base.css";
import Image3 from "../assets/res/mathang/rau_cu_qua.png";
import Image4 from "../assets/res//mathang/snack.png";
import Image5 from "../assets/res/mathang/thit.png";
import Image6 from "../assets/res/mathang/trungsua.png";
import Image7 from "../assets/res/mathang/uong.png";
import axios from 'axios'

const CustomerHomepage = () => {
    
    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-customer__design-description">
                        <h5 className="dichothue-customer__design-heading">ĐI CHỢ THUÊ</h5>
                        <p className="dichothue-customer__design-favorite">Chuyên cung cấp dịch vụ đi chợ giúp, mua bán các mặt hàng rau củ sạch và xanh, các mặt hàng tươi sống, nhu yếu phẩm</p>
                    </div>
                </div>

                <div className="row">
                    <div className="dichothue-customer__design-description">
                        <h5 className="dichothue-customer__design-heading">MẶT HÀNG</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="dichothue-customer-services-type__img" style = {{backgroundImage: `url(${Image3})`}} />
                    </div>
                    <div className="col">
                        <div className="dichothue-customer-services-type__img" style = {{backgroundImage: `url(${Image4})`}} />
                    </div>
                    <div className="col">
                        <div className="dichothue-customer-services-type__img" style = {{backgroundImage: `url(${Image5})`}} />
                    </div>
                    <div className="col">
                        <div className="dichothue-customer-services-type__img" style = {{backgroundImage: `url(${Image6})`}} />
                    </div>
                    <div className="col">
                        <div className="dichothue-customer-services-type__img" style = {{backgroundImage: `url(${Image7})`}} />
                    </div>
                    <div className="col"></div>
                </div>


                <div className="policy-company">
                    <div className="policy-company-item">
                        <i className="policy-company__icon fas fa-phone-square-alt"></i>
                        <div className="policy-company__text">
                            <div className="policy-company__heading">HỖ TRỢ 24/7</div>
                            <div className="policy-company__description">Liên lạc với chúng tôi 24h trong một ngày và 7 ngày trong tuần</div>
                        </div>
                    </div>
                    <div className="policy-company-item">
                        <i className="policy-company__icon fas fa-hand-holding-usd"></i>
                        <div className="policy-company__text">
                            <div className="policy-company__heading">GIÁ CẢ HỢP LÝ</div>
                            <div className="policy-company__description">Không có phụ phí, niêm yết giá đúng với thị trường
                            </div>
                        </div>
                    </div>
                    <div className="policy-company-item">
                        <i className="policy-company__icon fas fa-undo-alt"></i>
                        <div className="policy-company__text">
                            <div className="policy-company__heading">HOÀN TIỀN</div>
                            <div className="policy-company__description">Hoàn tiền nếu khiếu nại hợp lý, đảm bảo quyền lợi cho bạn</div>
                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    );
}

export default CustomerHomepage;