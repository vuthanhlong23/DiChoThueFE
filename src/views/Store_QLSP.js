import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_qlsp.css";
import axios from 'axios'

const StoreQLSP = () => {
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
                <div className="row">
                    <div className="col-3">
                        <div className="store_qlsp_dichothue-item">
                            {/* <div className="system_dichothue-item__img" style = {{backgroundImage: `url(${url_image})`}} /> */}
                            <h4 className="store_qlsp_dichothue-item__name">Khoai môn </h4>
                            <span className="store_qlsp_dichothue-item__price">15.000đ/kg</span>
                            <button type="button" className="btn btn-outline-secondary store_qlsp_addcart_btn">Xóa</button>
                            <button type="button" className="btn btn-outline-secondary store_qlsp_addcart_btn">Sửa</button>
                            <button type="button" className="btn btn-outline-secondary store_qlsp_addcart_btn">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h1 className="store_qlsp_add_product">Thêm sản phẩm</h1>
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
                    <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nhập link hình ảnh</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <button type="button" className="store_qlsp_add_button_details btn btn-outline-secondary">Thêm sản phẩm</button>
            </div>
        </div>
    );
}

export default StoreQLSP;