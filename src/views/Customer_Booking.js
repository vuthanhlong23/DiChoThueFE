import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/booking.css";
import "../assets/stylesheets/base.css";
import axios from 'axios';

const CustomerBooking = () => {
    let history = useHistory()
    const [customer_phone, setPhone] = useState('')
    const [customer_address, setAddress] = useState('')
    const [customer_region, setRegion] = useState('')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [payment_type, setPayment] = useState('')
    const [Cart, setCart] = useState([{"store":{},"products":[]}]);
    useEffect(() => {
        const fetchCart = async () =>{
        try {
            const res = await axios.get(`http://dichothuecsharp.somee.com/api/cart/${localStorage.getItem("customer_id")}`) 
                                    .then(res => {
                                        setCart(res.data)
                                        console.log(res.data)
                                    })
                                    .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
        } 
        
        fetchCart();
    }, [])

    var store = {};
    var products = [];
    const setBooking = () => {
        Cart.map(stores => {
                store = stores.store
                products = stores.products
            }
        )
    }

    setBooking();

    function FormTime(value){
        var str = "" + value;
        if(str.split('').length===1)
        {
            return "0" + value;
        }
        else{
            return value;
        }
    }

    const Booking = (event) =>{
        try {
            axios({
                url: `http://dichothuecsharp.somee.com/api/order/add`,
                method: 'post',
                data:
                {
                    customer_id: localStorage.getItem("customer_id"),
                    customer_name: "Vũ Thành Long",
                    customer_phone: customer_phone,
                    customer_address: customer_address,
                    customer_region: customer_region,
                    time: FormTime(hour) + ":" + FormTime(minute) + ":00",
                    total_amount: Number(localStorage.getItem("total_money")),
                    shipping_fee: 15000,
                    total: Number(localStorage.getItem("total_money")) + 15000,
                    payment_type: payment_type,
                    store: store,
                    products: products
                }
            },
            { withCredentials: true }
            )  
            .then(res => {
                history.push("/customer/bookingsuccess")
                console.log(res.data)
            })
            .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
        event.preventDefault();
    } 
        
    return (
        <div className="container">
            <div className="grid">
                <div className="row align-items-start">
                    <div className="wrap__booking-body">
                        <div className="col-7">
                            <div className="booking__time-details">
                                <div className="booking__time-heading">
                                    <span className="booking__time-heading-text">Thời gian nhận hàng<Fragment>&nbsp;</Fragment></span>
                                    <span className="booking__mandatory-icon">*</span>
                                </div>
                                <div className="booking__time-input">
                                    <input 
                                        type="number" 
                                        className="booking__time-hour-input booking__input-type" 
                                        placeholder="Giờ"
                                        value={hour}
                                        onChange={(e)=> setHour(e.target.value)}
                                        required
                                    />
                                    <input 
                                        type="number" 
                                        className="booking__time-minute-input booking__input-type" 
                                        placeholder="Phút"
                                        value={minute}
                                        onChange={(e)=> setMinute(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="booking__location-details">
                                <div className="booking__location-heading">
                                    <span className="booking__location-heading-text">Địa chỉ<Fragment>&nbsp;</Fragment></span>
                                    <span className="booking__mandatory-icon">*</span>
                                </div>
                                <input 
                                    type="text" 
                                    className="booking__location-input booking__input-type" 
                                    placeholder="16A Vũ Ngọc Phan"
                                    value={customer_address}
                                    onChange={(e)=> setAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="booking__phone-number-details">
                                <span className="booking__phone-number-heading-text">Số điện thoại</span>
                                <input 
                                    type="number" 
                                    className="booking__phone-number-input booking__input-type" 
                                    placeholder="037 xxx xxxx"
                                    value={customer_phone}
                                    onChange={(e)=> setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="areaCondition__input-details">
                                <span className="areaCondition__input-text">Mức độ vùng dịch</span>
                                <select value={customer_region} onChange={(e)=> setRegion(e.target.value)} className="auth-form__input areaCondition__input-type">
                                    <option value="Vùng Xanh">Vùng xanh</option>
                                    <option value="Vùng Vàng">Vùng vàng</option>
                                    <option value="Vùng Cam">Vùng cam</option>
                                    <option value="Vùng Đỏ">Vùng đỏ</option>
                                </select>
                            </div>
                            <span className="customer_summary_product-list">
                                Danh sách sản phẩm
                            </span>
                            <div className="customer_summary_product">
                                <span className="customer_summary_product_item customer_summary_product_name">Tên sản phẩm</span>
                                <span className="customer_summary_product_item customer_summary_product_quantity">Số lượng</span>
                                <span className="customer_summary_product_item customer_summary_product_money">Tổng tiền</span>
                            </div>
                            {Cart.map(stores => {
                                return(
                                <>
                                    {stores.products.map(product => {
                                    return (
                                        <>
                                            <div className="customer_summary_product">
                                                <span className="customer_summary_product_item customer_summary_product_name">{product.name}</span>
                                                <span className="customer_summary_product_item customer_summary_product_quantity">{product.amount}</span>
                                                <span className="customer_summary_product_item customer_summary_product_money">{product.price*product.amount}đ</span>
                                            </div>  
                                        </>
                                    )})}
                                </>
                                )
                            })}
                            
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="row">
                            <div className="customer_payment__input-details">
                                <span className="customer_payment__input-text">Hình thức thanh toán</span>
                                <select value={payment_type} onChange={(e)=> setPayment(e.target.value)} className="auth-form__input customer_payment__input-type">
                                    <option value="Tiền mặt">Tiền mặt</option>
                                    <option value="Thẻ thanh toán">Thẻ thanh toán</option>
                                </select>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                                <div className="wrap__cart-body-right">
                                    <span className="cart-body__summary-title">Tổng kết đơn hàng</span>
                                    <div className="cart-body__total">
                                        <div className="cart-body__total-price-text-default">Tổng tiền hàng</div>
                                        <div className="cart_body__total-price">{localStorage.getItem("total_money")}đ</div>
                                    </div>
                                    <div className="cart-body__total">
                                        <div className="cart-body__total-price-text-default">Tiền phí vận chuyển</div>
                                        <div className="cart_body__total-price">15.000đ</div>
                                    </div>
                                    <div className="cart-body__total">
                                        <div className="cart-body__total-price-text-default cart_body__total-price_all">Tổng thanh toán</div>
                                        <div className="cart_body__total-price cart_body__total-price_all">{Number(localStorage.getItem("total_money")) + 15000}đ</div>
                                    </div>
                                    <form onSubmit={Booking}>
                                        <button type="submit" className="cart-body__check-out-btn btn btn--primary">TIẾN HÀNH THANH TOÁN</button>
                                    </form>
                                    {/* <Link to="#" onClick={() => Booking()} className="cart-body__check-out-btn btn btn--primary">TIẾN HÀNH THANH TOÁN</Link> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerBooking;