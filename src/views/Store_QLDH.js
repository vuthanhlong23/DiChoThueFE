import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_qldh.css";
import axios from 'axios';

const StoreQLDH = () => {


    return (
        <div className="container">
            <div className="grid">
        
                <div className="row">
                <div className="dichothue-store_qldh__design-description">
                    <h5 className="dichothue-store_qldh__design-heading">ĐƠN HÀNG CỦA CỬA HÀNG</h5>
                </div>
            </div>
            <div className="row align-items-start store_qldh_booking_history_info">
                <div className="col-2">
                    Mã đơn hàng
                </div>
                <div className="col-2">
                    Ngày mua 
                </div>
                <div className="col-2">
                    Tổng tiền
                </div>
                <div className="col-3">
                    Trạng thái đơn hàng
                </div>
                <div className="col-2">
                    Thao tác
                </div>
            </div>
            <div className="row align-items-start store_qldh_booking_history_info store_qldh_booking_history_info-items">
                <Link to="/store/qldh/ctddh" className="store_qldh_booking_history-item_id_order col-2 store_qldh_booking_history-item">
                    544355435
                </Link>
                <div className="col-2 store_qldh_booking_history-item">
                    21/12/2021
                </div>
                <div className="col-2 store_qldh_booking_history-item">
                    2740000đ
                </div>
                <div className="col-3 store_qldh_booking_history-item">
                    Giao hàng thành công
                </div>
                <div className="col-2 store_qldh_booking_history-item">
                    <button type="button" className="store_qldh_booking_history-item_cancel_btn btn btn btn-secondary ">Xác nhận đơn hàng</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default StoreQLDH;