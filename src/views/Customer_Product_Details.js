import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/product_details.css";
import axios from 'axios'

const CustomerProductDetails = () => {
    // const [Product, setProduct] = useState([{"store":{},"products": []}]);

        
    // useEffect(() => {
    //     const fetchStoreList = async () =>{
    //         try {
    //             const res = await axios.get(`http://dichothuecsharp.somee.com/api/store/list`) 
    //                                     .then(res => {
    //                                         setStoreList(res.data);
    //                                         console.log(res.data)
    //                                     })
    //                                     .catch(err => console.log(err));
    //         } catch (error) {
    //             console.log('Failed to fetch store list', error)
    //         }
    //     }
    //     fetchStoreList();
    // }, [])

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="wrap__product-details-body">
                        <div className="col-4">
                            <img className="product-details__img" src="../res/stuff/profile.png" alt=""/>

                        </div>
                        <div className="col-8">
                            <div className="wrap__product-details-body-right">
                                <h2 className="product-details__name">Khoai lang</h2>

                                <span className="product-details__contact-info-title">THÔNG TIN SẢN PHẨM</span>
                                <div className="product-details__contact-section">
                                    <div className="product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Mã sản phẩm:</span>
                                        <span className="product-details__productinfo">SP2095438</span>
                                    </div>
                                    <div className="product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Mã cửa hàng:</span>
                                        <span className="product-details__productinfo">SP2095438</span>
                                    </div>
                                    <div className="product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Loại mặt hàng:</span>
                                        <span className="product-details__productinfo">Rau, củ quả</span>
                                    </div>
                                    <div className="product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Giá sản phẩm:</span>
                                        <span className="product-details__productinfo">100.000đ</span>
                                    </div>
                                    <div className="product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Xuất xứ:</span>
                                        <span className="product-details__productinfo">Việt Nam</span>
                                    </div>
                                    <div className="product-details__contact-info product-details__contact-info-last-item">
                                        <span className="product-details__productinfo-heading">Thông tin khác:</span>
                                        <span className="product-details__productinfo">Mặt hàng đc lấy ở abc...</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default CustomerProductDetails;