import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_qlsp.css";
import axios from 'axios'

const StoreTTCTSP = () => {
    const [StoreList, setStoreList] = useState([]);
    const [StoreProductList, setStoreProductList] = useState([{"store":{},"products": []}]);
    let history = useHistory()
        
    useEffect(() => {
        const fetchStoreList = async () =>{
            try {
                const res = await axios.get(`http://dichothuecsharp.somee.com/api/store/list`) 
                                        .then(res => {
                                            setStoreList(res.data);
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
                <div className="row wrap-right__store_qlsp_product-details-body">
                    <div className="col-2">
                        <img className="store_qlsp_product-details__img" src="../res/stuff/profile.png" alt=""/>
                    </div>
                    <div className="col-4 wrap__store_qlsp_product-details-body">
                        <h2 className="store_qlsp_product-details__name">Khoai lang</h2>
                        <span className="store_qlsp_product-details__contact-info-title">THÔNG TIN SẢN PHẨM</span>
                        <div className="store_qlsp_product-details__contact-section">
                            <div className="store_qlsp_product-details__contact-info">
                                <span className="product-details__productinfo-heading">Mã sản phẩm:</span>
                                <span className="store_qlsp_product-details__productinfo">SP2095438</span>
                            </div>
                            <div className="store_qlsp_product-details__contact-info">
                                <span className="product-details__productinfo-heading">Mã cửa hàng:</span>
                                <span className="store_qlsp_product-details__productinfo">SP2095438</span>
                            </div>
                            <div className="store_qlsp_product-details__contact-info">
                                <span className="product-details__productinfo-heading">Loại mặt hàng:</span>
                                <span className="store_qlsp_product-details__productinfo">Rau, củ quả</span>
                            </div>
                            <div className="store_qlsp_product-details__contact-info">
                                <span className="product-details__productinfo-heading">Giá sản phẩm:</span>
                                <span className="store_qlsp_product-details__productinfo">100.000đ</span>
                            </div>
                            <div className="store_qlsp_product-details__contact-info">
                                <span className="product-details__productinfo-heading">Xuất xứ:</span>
                                <span className="store_qlsp_product-details__productinfo">Việt Nam</span>
                            </div>
                            <div className="store_qlsp_product-details__contact-info product-details__contact-info-last-item">
                                <span className="product-details__productinfo-heading">Thông tin khác:</span>
                                <span className="store_qlsp_product-details__productinfo">Mặt hàng đc lấy ở abc...</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <h1 className="store_qlsp2_add_product">Cập nhật sản phẩm</h1>
                        </div>
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nhập tên sản phẩm</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3">
                            <label className="store_qlsp_add_product_details input-group-text" for="inputGroupSelect01">Chọn loại mặt hàng</label>
                            <select className="store_qlsp_add_product_details form-select" id="inputGroupSelect01">
                              <option selected>Chọn...</option>
                              <option value="1">Rau,củ, quả</option>
                              <option value="2">Đồ tươi sống</option>
                              <option value="3">Gia vị, phụ gia</option>
                              <option value="4">Sản phẩm ăn liền</option>
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nhập giá sản phẩm</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nhập xuất xứ</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nhập xuất xứ</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nhập link hình ảnh</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <button type="button" className="store_qlsp_add_button_details btn btn-outline-secondary">Cập nhật sản phẩm</button>
                    
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default StoreTTCTSP;