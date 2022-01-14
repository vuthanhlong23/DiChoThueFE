import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_qlsp.css";
import axios from 'axios'

const StoreTTCTSP = () => {
    const [productdetail, setProductDetail] = useState([{"product":{}}]);
    const [name, setProductName] = useState()
    useEffect(() => {
        const fetchProductDetail = async () =>{
            try {
                const res = await axios.get(`http://dichothuecsharp.somee.com/api/product/infor/${localStorage.getItem("store_product_ctsp")}`) 
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
                <div className="row wrap-right__store_qlsp_product-details-body">
                {productdetail.map(product => {
                    return(
                        <>
                            <div className="col-2">
                                <img className="store_qlsp_product-details__img" src={product.url_image} alt=""/>
                            </div>
                            <div className="col-4 wrap__store_qlsp_product-details-body">
                                <h2 className="store_qlsp_product-details__name">{product.name}</h2>
                                <span className="store_qlsp_product-details__contact-info-title">THÔNG TIN SẢN PHẨM</span>
                                <div className="store_qlsp_product-details__contact-section">
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Mã sản phẩm:</span>
                                        <span className="store_qlsp_product-details__productinfo">{String(product.id).substring(0,10).toUpperCase()}</span>
                                    </div>
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Mã cửa hàng:</span>
                                        <span className="store_qlsp_product-details__productinfo">{String(product.store_id).substring(0,10).toUpperCase()}</span>
                                    </div>
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Loại mặt hàng:</span>
                                        <span className="store_qlsp_product-details__productinfo">{product.type_name}</span>
                                    </div>
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Giá sản phẩm:</span>
                                        <span className="store_qlsp_product-details__productinfo">{product.price}đ</span>
                                    </div>
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Xuất xứ:</span>
                                        <span className="store_qlsp_product-details__productinfo">{product.origin}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                     )
                })}
                    
                <div className="col-6">
                    <div className="row">
                        <h1 className="store_qlsp2_add_product">Cập nhật sản phẩm</h1>
                    </div>
                    {productdetail.map(product => {
                    return(
                        <>
                            <div className="input-group mb-3">
                                <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nhập tên sản phẩm</span>
                                <input 
                                    type="text" 
                                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                    value={name}
                                    onChange={(e)=> setProductName(e.target.value)}
                                    required 
                                />
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
                        </>
                     )
                })}
                
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default StoreTTCTSP;