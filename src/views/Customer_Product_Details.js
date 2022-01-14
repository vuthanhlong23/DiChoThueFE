import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/product_details.css";
import axios from 'axios'

const CustomerProductDetails = () => {
    const [productdetail, setProductDetail] = useState([{"product":{}}]);
    useEffect(() => {
        const fetchProductDetail = async () =>{
            try {
                const res = await axios.get(`http://dichothuecsharp.somee.com/api/product/infor/${localStorage.getItem("customer_product_ctsp")}`) 
                                        .then(res => {
                                            setProductDetail(res.data);
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }
        fetchProductDetail();
    }, [])

    return (
        <div className="container">
            <div className="grid">
                {productdetail.map(product => {
                    return(
                        <>
                            <div className="row">
                                <div className="wrap__product-details-body">
                                    <div className="col-4">
                                        <img className="product-details__img" src={product.url_image} alt=""/>

                                    </div>
                                    <div className="col-8">
                                        <div className="wrap__product-details-body-right">
                                            <h2 className="product-details__name">{product.name}</h2>

                                            <span className="product-details__contact-info-title">THÔNG TIN SẢN PHẨM</span>
                                            <div className="product-details__contact-section">
                                                <div className="product-details__contact-info">
                                                    <span className="product-details__productinfo-heading">Mã sản phẩm:</span>
                                                    <span className="product-details__productinfo">{String(product.id).substring(0,10).toUpperCase()}</span>
                                                </div>
                                                <div className="product-details__contact-info">
                                                    <span className="product-details__productinfo-heading">Mã cửa hàng:</span>
                                                    <span className="product-details__productinfo">{String(product.store_id).substring(0,10).toUpperCase()}</span>
                                                </div>
                                                <div className="product-details__contact-info">
                                                    <span className="product-details__productinfo-heading">Loại mặt hàng:</span>
                                                    <span className="product-details__productinfo">{product.type_name}</span>
                                                </div>
                                                <div className="product-details__contact-info">
                                                    <span className="product-details__productinfo-heading">Giá sản phẩm:</span>
                                                    <span className="product-details__productinfo">{product.price}đ</span>
                                                </div>
                                                <div className="product-details__contact-info">
                                                    <span className="product-details__productinfo-heading">Xuất xứ:</span>
                                                    <span className="product-details__productinfo">{product.origin}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            
                            </div>
                        </>
                     )
                })}
            </div>
        </div>
    );
}

export default CustomerProductDetails;