import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_tthh.css";
import axios from 'axios';

const StoreTTHH = () => {

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-store__design-description">
                        <h5 className="dichothue-store__design-heading">THỐNG KÊ TIỀN HOA HỒNG</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 store-tkddh_start_day">
                        Chọn ngày bắt đầu
                        <input type="date" className="store-tkddh__date-input store-tkddh__input-type"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 store-tkddh_end_day">
                        Chọn ngày kết thúc
                        <input type="date" className="store-tkddh__date-input store-tkddh__input-type"/>
                    </div>
                </div>
                <button type="button" className="btn btn-secondary store-tkddh_submit_btn">Lập danh sách</button>

                <div className="row store_tkddh-store-list-title">
                    <div className="col-4">
                        <span className="store_tkddh-store-list-item">
                            Mã đơn hàng
                        </span>
                    </div>
                    <div className="col-4">
                        <span className="store_tkddh-store-list-item">
                            Tổng tiền mặt hàng
                        </span>
                    </div>
                    <div className="col-4">
                        <span className="store_tkddh-store-list-item">
                            Tổng tiền đơn hàng
                        </span>
                    </div>
                </div>
                <div className="row store_tkddh-store-list">
                    <div className="col-4">
                        <span className="store_tkddh-store-list-item">
                            DDH343653
                        </span>
                    </div>
                    <div className="col-4">
                        <span className="store_tkddh-store-list-item">
                            42.000đ
                        </span>
                    </div>
                    <div className="col-4">
                        <span className="store_tkddh-store-list-item">
                            65.000đ
                        </span>
                    </div>
                </div>
                
                
                <div className="row">
                    <div className="col-5">
                        <div className="wrap__tthh-body-right">
                            <span className="tthh-body__summary-title">Tổng kết các đơn hàng</span>
                            <div className="tthh-body__total">
                                <div className="tthh-body__total-price-text-default">Tổng cộng tiền đơn hàng</div>
                                <div className="tthh_body__total-price">36.000.000</div>
                            </div>
                            <div className="tthh-body__total">
                                <div className="tthh-body__total-price-text-default">Tổng cộng tiền hoa hồng</div>
                                <div className="tthh_body__total-price">3.600.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreTTHH;