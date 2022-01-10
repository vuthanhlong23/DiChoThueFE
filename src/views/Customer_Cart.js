import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/cart.css";
import "../assets/stylesheets/base.css";
import axios from "axios";  

const CustomerCart = () => {
    const [Cart, setCart] = useState([{"store":{},"products":[]}]);
    const [amount, setAmount] = useState("");
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
    const DeleteCart = async (product) =>{
        try {
            const res = await axios(`http://dichothuecsharp.somee.com/api/cart/${localStorage.getItem("customer_id")}/delete`,
            {
                method: "delete",
                data:
                {
                    id: product.id,
                    store_id: product.store_id,
                    product_id: product.product_id,
                    customer_id: product.customer_id,
                    name: product.name,
                    price: product.price,
                    unit: product.unit,
                    amount: product.amount,
                    url_image: product.url_image,
                    activity: product.activity
                }
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

    const UpdateCart = async (product) =>{
        try {
            const res = await axios(`http://dichothuecsharp.somee.com/api/cart/${localStorage.getItem("customer_id")}/update`,
            {
                method: "patch",
                data:
                {
                    id: product.id,
                    store_id: product.store_id,
                    product_id: product.product_id,
                    customer_id: product.customer_id,
                    name: product.name,
                    price: product.price,
                    unit: product.unit,
                    amount: Number(amount),
                    url_image: product.url_image,
                    activity: product.activity
                }
            }
            ) 
            .then(res => {
                console.log(res.data)
                //window.location.reload()
            })
            .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)        
        }
    } 
    var total_money = 0
    const TotalAmount = (total) =>{
        total_money = total_money + total;
        localStorage.setItem("total_money",total_money)
    }

    return (
        <div className="container">
            <div className="grid">
                {Cart.map(stores => {
                    return (
                        <div className="row">
                            <div className="col-2">
                                <span className="cart_heading_name">GIỎ HÀNG</span>
                            </div>
                            <div className="col-10">
                                <span className="cart_heading_store_name">{stores.store.store_name} ({stores.store.address})</span>
                            </div>
                        </div>
                )})}
                

                <div className="row align-items-start customer_cart_info">
                    <div className="col-4">
                        Sản phẩm
                    </div>
                    <div className="col-2">
                        Đơn giá
                    </div>
                    <div className="col-2">
                        Số lượng
                    </div>
                    <div className="col-1">
                        Đơn vị tính 
                    </div>
                    <div className="col-2">
                        Số tiền
                    </div>
                    <div className="col-1">
                        Thao tác
                    </div>
                </div>
                {Cart.map(stores => {
                    return(
                    <>
                        {stores.products.map(product => {
                        return (
                            <div className="row align-items-start customer_cart_info">
                                <div className="col-4">
                                    <div className="cart-body-item">
                                        <img className="cart-body-item__service-img" src={product.url_image} alt=""/>
                                        {/* <div className="cart-body-item__service-img" style = {{backgroundImage: `url(${Image})`}} /> */}
                                        <div className="cart-body-item__content">
                                            <span className="cart-body-item__service-name">{product.name}</span>
                                            <div className="cart-body-item__service-details">
                                                <div className="cart-body-item__category-text-default">Phân loại:<Fragment>&nbsp;</Fragment> </div>
                                                <div className="cart-body-item__category-description">{product.type_name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="cart-body-item__service-element">{product.price}đ</div>
                                </div>
                                <div className="col-2">
                                    <div className="cart-body-item__service-element">
                                        <input 
                                            type="number"  
                                            id="quantity" 
                                            name="amount" 
                                            min="1"
                                            max="5"
                                            placeholder={product.amount}
                                            value={amount}
                                            onChange={(e)=> {UpdateCart(product);setAmount(e.target.value)}}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="cart-body-item__service-element">{product.unit}</div>
                                </div>
                                <div className="col-2">
                                    <div className="cart-body-item__service-element">{product.price*product.amount}đ</div>
                                </div>
                                <div className="col-1">
                                    <div className="cart-body-item__remove"><i onClick={()=> DeleteCart(product)} className="cart-body-item__remove-icon far fa-trash-alt"></i></div>
                                </div>
                                <script>
                                    {TotalAmount(product.price*product.amount)}
                                </script>
                            </div>  
                        )})}
                    </>
                    )
                })}
                    
                <div className="row">
                    <div className="col-4">
                        <div className="wrap__cart-body-right">
                            <span className="cart-body__summary-title">Tổng kết đơn hàng</span>
                            <div className="cart-body__total">
                                <div className="cart-body__total-price-text-default">Tổng cộng</div>
                                <div className="cart_body__total-price">{localStorage.getItem("total_money")}đ</div>
                            </div>
                            <Link to="/customer/booking" className="cart-body__check-out-btn btn btn--primary">TIẾN HÀNH THANH TOÁN</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CustomerCart;