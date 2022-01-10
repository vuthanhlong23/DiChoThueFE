import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
// import "../assets/stylesheets/customer_order_details.css";
import "../assets/stylesheets/customer_booking_history.css";

const CustomerOrderDetails = () => {

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-customer__design-description">
                        <h5 className="dichothue-customer__design-heading">ĐƠN HÀNG CỦA TÔI</h5>
                    </div>
                </div>
                <div className="row customer_id_order">Mã đơn đặt hàng: DDH249368739</div>
                <div className="row customer_order_details_store_name">Cửa hàng: Coop Food 2 (143 Nguyễn Xí q3, tpchm)</div>

                <div className="row align-items-start customer_booking_history_info">
                    <div className="col-2">
                        Sản phẩm
                    </div>
                    <div className="col-2">
                        Số lượng
                    </div>
                    <div className="col-2">
                        Tổng tiền
                    </div>
                </div>
                <div className="row align-items-start customer_booking_history_info">
                    
                    <div className="col-2 customer_booking_order-item">
                        200g Cà Chua
                    </div>
                    <div className="col-2 customer_booking_order-item">
                        2
                    </div>
                    <div className="col-2 customer_booking_order-item">
                        29000đ
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <div className="wrap__customer_order-body-right">
                            <span className="customer_order-body__summary-title">Tổng kết đơn hàng</span>
                            <div className="customer_order-body__total">
                                <div className="customer_order-body__total-price-text-default">Tổng tiền hàng</div>
                                <div className="customer_order_body__total-price">20.000đ</div>
                            </div>
                            <div className="customer_order-body__total">
                                <div className="customer_order-body__total-price-text-default">Tiền phí vận chuyển</div>
                                <div className="customer_order_body__total-price">15.000đ</div>
                            </div>
                            <div className="customer_order-body__total">
                                <div className="customer_order-body__total-price-text-default customer_order_body__total-price_all">Tổng thanh toán</div>
                                <div className="customer_order_body__total-price customer_order_body__total-price_all">35.000đ</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
}

export default CustomerOrderDetails;