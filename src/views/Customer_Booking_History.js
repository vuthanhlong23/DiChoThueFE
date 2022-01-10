import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/customer_booking_history.css";
import "../assets/stylesheets/base.css";
import axios from 'axios';

const CustomerBookingHistory = () => {
    const [BookingHistoryList, setList] = useState([]);
   
    useEffect(() => {
        const BookingHistory = async () =>{
            try {
                const res = await axios.get(`https://market-0123.herokuapp.com/order/history/${localStorage.getItem("customer_id")}`) 
                                        .then(res => {
                                            setList(res.data);
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }
        
        BookingHistory();
    }, []) 
    
    const CancelBooking = async (order_id) =>{
        try {
            const res = await axios(`https://market-0123.herokuapp.com/order/delete/${order_id}`,
            {
                method: "delete",
            }
            ) 
            .then(res => {
                console.log(res.data)
                window.location.reload()
            })
            .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
    }
    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-customer__design-description">
                        <h5 className="dichothue-customer__design-heading">ĐƠN HÀNG CỦA TÔI</h5>
                    </div>
                </div>
                <div className="row align-items-start customer_booking_history_info">
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
                {BookingHistoryList.map(bookinglist => {
                    return (
                    <div className="row align-items-start customer_booking_history_info customer_booking_history_info-items">
                        <div className="col-2 customer_booking_history-item">
                            {bookinglist.id.substring(0,10).toUpperCase()}
                        </div>
                        <div className="col-2 customer_booking_history-item">
                            {bookinglist.order_date.substring(0,10).toUpperCase()}
                        </div>
                        <div className="col-2 customer_booking_history-item">
                            {bookinglist.total_amount}đ
                        </div>
                        <div className="col-3 customer_booking_history-item">
                            {bookinglist.status}
                        </div>
                        <div className="col-2 customer_booking_history-item">
                            <button onClick={(e)=>CancelBooking(bookinglist.id)} type="submit" className="customer_booking_history-item_cancel_btn btn btn btn-secondary ">Hủy đơn hàng</button>
                        </div>
                    </div>
                )})}
                
            </div>
        </div>
    );
}

export default CustomerBookingHistory;