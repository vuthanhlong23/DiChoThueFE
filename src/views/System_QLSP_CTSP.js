import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/product_details.css";
import axios from 'axios'

const SystemCTSP = () => {
    const [Store, setStore] = useState([{"store":{}}]);

        
    useEffect(() => {
        const fetchStoreList = async () =>{
            try {
                const res = await axios.get(`http://dichothuecsharp.somee.com/api/product/infor/${localStorage.getItem("System_product_id")}`) 
                                        .then(res => {
                                            setStore(res.data);
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }
        fetchStoreList();
    }, [])

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                {Store.map(stores => {
                    return(
                        <div className="wrap__product-details-body">
                            <div className="col-4">
                                <img className="product-details__img" src={stores.url_image} alt=""/>
                            </div>
                            <div className="col-8">
                                <div className="wrap__product-details-body-right">
                                    <h2 className="product-details__name">{stores.name}</h2>

                                    <span className="product-details__contact-info-title">THÔNG TIN SẢN PHẨM</span>
                                    <div className="product-details__contact-section">
                                        <div className="product-details__contact-info">
                                            <span className="product-details__productinfo-heading">Mã sản phẩm:</span>
                                            <span className="product-details__productinfo">{String(stores.id.substring(0,10).toUpperCase())}</span>
                                        </div>
                                        <div className="product-details__contact-info">
                                            <span className="product-details__productinfo-heading">Mã cửa hàng:</span>
                                            <span className="product-details__productinfo">{String(stores.store_id.substring(0,10).toUpperCase())}</span>
                                        </div>
                                        <div className="product-details__contact-info">
                                            <span className="product-details__productinfo-heading">Loại mặt hàng:</span>
                                            <span className="product-details__productinfo">{stores.type_name}</span>
                                        </div>
                                        <div className="product-details__contact-info">
                                            <span className="product-details__productinfo-heading">Giá sản phẩm:</span>
                                            <span className="product-details__productinfo">{stores.price}</span>
                                        </div>
                                        <div className="product-details__contact-info">
                                            <span className="product-details__productinfo-heading">Xuất xứ:</span>
                                            <span className="product-details__productinfo">Việt Nam</span>
                                        </div>
                                        <div className="product-details__contact-info product-details__contact-info-last-item">
                                            <span className="product-details__productinfo-heading">Thông tin khác:</span>
                                            <span className="product-details__productinfo">Mặt hàng đc lấy ở nguồn cung cấp uy tín ở chợ đầu mối</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     )
                })}
                </div>
            </div>
        </div>
    );
}

export default SystemCTSP;