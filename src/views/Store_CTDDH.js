import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_qldh.css";
import axios from 'axios';

const StoreCTDDH = () => {
    
    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-store_qldh__design-description">
                        <h5 className="dichothue-store_qldh__design-heading">ĐƠN HÀNG</h5>
                    </div>
                </div>
                <div className="row store_qldh_id_order">Mã đơn đặt hàng: DDH249368739</div>
                <div className="row store_qldh_id_order">Tên người đặt: Trịnh Văn Tấn</div>
                <div className="row store_qldh_id_order">Số điện thoại: 0359652726</div>
                <div className="row store_qldh_id_order">Thời gian nhận hàng: 15:30 12/4/2021</div>
                <div className="row store_qldh_id_order">Địa chỉ: 8A Nơ Trang Long</div>
                <div className="row store_qldh_id_order store_qldh_order_details_store_name">Hình thức thanh toán: Tiền mặt</div>

                <div className="row align-items-start store_qldh_booking_history_info">
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
                <div className="row align-items-start store_qldh_booking_history_info">
                    
                    <div className="col-2 store_qldh_booking_order-item">
                        200g Cà Chua
                    </div>
                    <div className="col-2 store_qldh_booking_order-item">
                        2
                    </div>
                    <div className="col-2 store_qldh_booking_order-item">
                        29000đ
                    </div>
                </div>

                <div className="row">
                    <div className="col-8">
                        <div className="wrap__store_qldh_order-body-right">
                            <span className="store_qldh_order-body__summary-title">Tổng kết đơn hàng</span>
                            <div className="store_qldh_order-body__total">
                                <div className="store_qldh_order-body__total-price-text-default">Tổng tiền hàng</div>
                                <div className="store_qldh_order_body__total-price">20.000đ</div>
                            </div>
                            <div className="store_qldh_order-body__total">
                                <div className="store_qldh_order-body__total-price-text-default">Tiền phí vận chuyển</div>
                                <div className="store_qldh_order_body__total-price">15.000đ</div>
                            </div>
                            <div className="store_qldh_order-body__total">
                                <div className="store_qldh_order-body__total-price-text-default store_qldh_order_body__total-price_all">Tổng thanh toán</div>
                                <div className="store_qldh_order_body__total-price store_qldh_order_body__total-price_all">35.000đ</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="store_qldh_two_button_wrap">
                            <button type="button" className="btn btn-secondary store_qldh_confirm_btn">Xác nhận</button>
                            <button type="button" className="btn btn-secondary  store_qldh_cancel_btn">Từ chối đơn hàng</button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreCTDDH;