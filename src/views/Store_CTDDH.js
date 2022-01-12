import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_qldh.css";
import axios from 'axios';

const StoreCTDDH = () => {
    const [OrderDetail, setOrderDetail] = useState([{"order":{},"item":[]}]);
    let history = useHistory()

    useEffect(() => {
        const fetchOrderDetail = async () =>{
            try {
                const res = await axios(`http://dichothuecsharp.somee.com/api/order/info/${localStorage.getItem("store_order_id")}`,
                {
                    method: 'get'
                }) 
                .then(res => {
                    setOrderDetail(res.data);
                    console.log(res.data)
                })
                .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }
        
        fetchOrderDetail();
    }, [])

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-store_qldh__design-description">
                        <h5 className="dichothue-store_qldh__design-heading">ĐƠN HÀNG</h5>
                    </div>
                </div>
                {OrderDetail.map(orders => {
                    return (
                    <>
                        <div className="row store_qldh_id_order">Mã đơn đặt hàng: {String(orders.order.id).substring(0,10).toUpperCase()}</div>
                        <div className="row store_qldh_id_order">Tên người đặt: {orders.order.customer_name}</div>
                        <div className="row store_qldh_id_order">Số điện thoại: {orders.order.customer_phone}</div>
                        <div className="row store_qldh_id_order">Thời gian nhận hàng: 15:30 12/4/2021</div>
                        <div className="row store_qldh_id_order">Địa chỉ: {orders.order.customer_address}</div>
                        <div className="row store_qldh_id_order store_qldh_order_details_store_name">Hình thức thanh toán: {orders.order.payment_type}</div>
                    </>
                )})}

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
                
                {OrderDetail.map(orders => {
                    return(
                    <>
                        {orders.item.map(product => {
                        return (
                            <>
                            <div className="row align-items-start store_qldh_booking_history_info">
                                <div className="col-2 store_qldh_booking_order-item">
                                    {product.product_name}
                                </div>
                                <div className="col-2 store_qldh_booking_order-item">
                                    {product.amount}
                                </div>
                                <div className="col-2 store_qldh_booking_order-item">
                                    {product.total}đ
                                </div>
                            </div>
                            </>
                        )})}
                    </>
                    )
                })}


                <div className="row">
                    <div className="col-8">
                    {OrderDetail.map(orders => {
                        return (
                            <div className="wrap__store_qldh_order-body-right">
                                <span className="store_qldh_order-body__summary-title">Tổng kết đơn hàng</span>
                                <div className="store_qldh_order-body__total">
                                    <div className="store_qldh_order-body__total-price-text-default">Tổng tiền hàng</div>
                                    <div className="store_qldh_order_body__total-price">{orders.order.total_amount}đ</div>
                                </div>
                                <div className="store_qldh_order-body__total">
                                    <div className="store_qldh_order-body__total-price-text-default">Tiền phí vận chuyển</div>
                                    <div className="store_qldh_order_body__total-price">{orders.order.shipping_fee}đ</div>
                                </div>
                                <div className="store_qldh_order-body__total">
                                    <div className="store_qldh_order-body__total-price-text-default store_qldh_order_body__total-price_all">Tổng thanh toán</div>
                                    <div className="store_qldh_order_body__total-price store_qldh_order_body__total-price_all">{orders.order.total}đ</div>
                                </div>
                            </div>
                    )})}
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