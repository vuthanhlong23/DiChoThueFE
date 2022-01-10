import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/system_qlch.css";
import Image from "../assets/res/stuff/COOP.png"
import axios from 'axios';

const SystemTTCTCHST = () => {
    const [StoreProductList, setStoreProductList] = useState([{"store":{},"products": []}]);
  
    useEffect(() => {
        const fetchStoreProductList = async () =>{
        try {
            const res = await axios.get(`http://dichothuecsharp.somee.com/api/product/list/${localStorage.getItem("System_Store_id")}`) 
                                    .then(res => {
                                        setStoreProductList(res.data)
                                        console.log(res.data)
                                    })
                                    .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
        } 
        
        fetchStoreProductList();
    }, [])

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">6. QUẢN LÝ THÔNG TIN CỬA HÀNG/SIÊU THỊ | CHI TẾT CỬA HÀNG/SIÊU THỊ</h5>
                    </div>
                </div>
                
                {StoreProductList.map(stores => {
                  return (
                    <div>
                        <div className="row">
                            <div className="wrap__profile_store-body">
                                <div className="col-4">
                                    <img classNameName="customer_store_list-img" src={stores.store.url_image} alt=""/>
                                </div>
                                <div className="col-8">
                                    <div className="wrap__profile_store-body-right">
                                        <h2 className="profile_store__name">{stores.store.store_name}</h2>
                                        <h5 className="profile_store__id">MACH: {localStorage.getItem("System_Store_id").substring(0,10).toUpperCase()}</h5>
                                        <span className="profile_store__about-info">Về cửa hàng/siêu thị</span>

                                        <span className="profile_store__contact-info-title">THÔNG TIN LIÊN LẠC</span>
                                        <div className="profile_store__contact-section">
                                            <div className="profile_store__contact-info">
                                                <span className="profile_store__representative-heading">Người phụ trách:</span>
                                                <span className="profile_store__representative">{stores.store.person_name}</span>
                                            </div>
                                            <div className="profile_store__contact-info">
                                                <span className="profile_store__phone-number-heading">Số điện thoại:</span>
                                                <span className="profile_store__phone-number">{stores.store.person_phone}</span>
                                            </div>
                                            <div className="profile_store__contact-info">
                                                <span className="profile_store__address-heading">Địa chỉ:</span>
                                                <span className="profile_store__address">{stores.store.address}</span>
                                            </div>
                                            <div className="profile_store__contact-info">
                                                <span className="profile_store__email-heading">Email:</span>
                                                <span className="profile_store__email">{stores.store.email}</span>
                                            </div>
                                        </div>

                                        <span className="profile_store__basic-info-title">THÔNG TIN CƠ BẢN</span>
                                        <div className="profile_store__basic-section">
                                            <div className="profile_store__basic-info">
                                                <span className="profile_store__open_hour-heading">Giờ mở cửa:</span>
                                                <span className="profile_store__open_hour">8:00am</span>
                                            </div>
                                            <div className="profile_store__basic-info">
                                                <span className="profile_store__close_hour-heading">Giờ đóng cửa:</span>
                                                <span className="profile_store__close_hour">10:00pm</span>
                                            </div>
                                            <div className="profile_store__basic-info">
                                                <span className="profile_store__condition_area-heading">Vùng dịch:</span>
                                                <span className="profile_store__condition_area">{stores.store.region}</span>
                                            </div>
                                            <div className="profile_store__basic-info">
                                                <span className="profile_store__condition_area-heading">Ngày bắt đầu HD:</span>
                                                <span className="profile_store__condition_area">{stores.store.contract_start}</span>
                                            </div>
                                            <div className="profile_store__basic-info">
                                                <span className="profile_store__condition_area-heading">Ngày kết thúc HD:</span>
                                                <span className="profile_store__condition_area">{stores.store.contract_end}</span>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>

                            </div>
                        
                        </div>
                    </div>
                )})}
                
            </div>
        </div>
    );
}

export default SystemTTCTCHST;