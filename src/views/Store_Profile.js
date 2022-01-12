import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/customer_profile.css";
import "../assets/stylesheets/base.css";
import Image from "../assets/res/stuff/profile.png";
import axios from 'axios';

const StoreProfile = () => {
    let history = useHistory()
    const [storedetail, setStoreDetail] = useState("")

    const handleSuccessfulAuth = () => {
        history.push("/store/profile");
    }
    useEffect(() => {
        const fetchStoreDetail = async () =>{
            try {
                const res = await axios.get(`https://market-0123.herokuapp.com/store/storedetail/${localStorage.getItem("current_Store")}`) 
                                        .then(res => {
                                            setStoreDetail(res.data);
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }
        fetchStoreDetail();
    }, [])

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="wrap__profile-body">
                        <div className="col-4">
                            <img className="profile__img" src={storedetail.url_image} alt=""/>

                        </div>
                        <div className="col-8">
                            <div className="wrap__profile-body-right">
                                <h2 className="profile__name">{storedetail.store_name}</h2>

                                <span className="profile__about-info">Về cửa hàng</span>

                                <span className="profile__contact-info-title">THÔNG TIN LIÊN LẠC</span>
                                <div className="profile__contact-section">
                                    <div className="profile__contact-info">
                                        <span className="profile__phone-number-heading">Số điện thoại:</span>
                                        <span className="profile__phone-number">{storedetail.phone}</span>
                                    </div>
                                    <div className="profile__contact-info">
                                        <span className="profile__address-heading">Địa chỉ:</span>
                                        <span className="profile__address">{storedetail.address}</span>
                                    </div>
                                    <div className="profile__contact-info">
                                        <span className="profile__email-heading">Email:</span>
                                        <span className="profile__email">{storedetail.email}</span>
                                    </div>
                                    <div className="profile__contact-info">
                                        <span className="profile__email-heading">Phụ trách:</span>
                                        <span className="profile__email">{storedetail.person_name}</span>
                                    </div>
                                    <div className="profile__contact-info">
                                        <span className="profile__email-heading">SĐT phụ trách:</span>
                                        <span className="profile__email">{storedetail.person_phone}</span>
                                    </div>
                                </div>

                                <span className="profile__basic-info-title">THÔNG TIN CƠ BẢN</span>
                                <div className="profile__basic-section">
                                    <div className="profile__basic-info">
                                        <span className="profile__birthday-heading">Giờ mở cửa:</span>
                                        <span className="profile__birthday">8h30</span>
                                    </div>
                                    <div className="profile__basic-info">
                                        <span className="profile__gender-heading">Giờ đóng cửa:</span>
                                        <span className="profile__gender">10h50</span>
                                    </div>
                                    <div className="profile__basic-info">
                                        <span className="profile__gender-heading">Vùng dịch:</span>
                                        <span className="profile__gender">{storedetail.region}</span>
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

export default StoreProfile;