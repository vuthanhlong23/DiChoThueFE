import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/customer_profile.css";
import "../assets/stylesheets/base.css";
import Image from "../assets/res/stuff/profile.png";
import axios from 'axios';

const CustomerProfile = () => {
    const [UserProfile, setUserProfile] = useState('profile');
    useEffect(() => {
        const fetchUserProfile = async () =>{
            try {
                const res = await axios.get(`https://market-0123.herokuapp.com/customer/find/${localStorage.getItem("customer_id")}`) 
                                        .then(res => {
                                            setUserProfile(res.data);
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }
        
        fetchUserProfile();
    }, [])
    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="wrap__profile-body">
                        <div className="col-4">
                            <img className="profile__img" src={Image} alt=""/>
                        </div>
                        <div className="col-8">
                            <div className="wrap__profile-body-right">
                                <h2 className="profile__name">{UserProfile.name}</h2>

                                <span className="profile__about-info">Về tôi</span>

                                <span className="profile__contact-info-title">THÔNG TIN LIÊN LẠC</span>
                                <div className="profile__contact-section">
                                    <div className="profile__contact-info">
                                        <span className="profile__phone-number-heading">Số điện thoại:</span>
                                        <span className="profile__phone-number">{UserProfile.phone}</span>
                                    </div>
                                    <div className="profile__contact-info">
                                        <span className="profile__address-heading">Địa chỉ:</span>
                                        <span className="profile__address">{UserProfile.address}</span>
                                    </div>
                                    <div className="profile__contact-info">
                                        <span className="profile__email-heading">Email:</span>
                                        <span className="profile__email">{UserProfile.email}</span>
                                    </div>
                                </div>

                                <span className="profile__basic-info-title">THÔNG TIN CƠ BẢN</span>
                                <div className="profile__basic-section">
                                    <div className="profile__basic-info">
                                        <span className="profile__birthday-heading">Ngày sinh:</span>
                                        <span className="profile__birthday">05/05/2000</span>
                                    </div>
                                    <div className="profile__basic-info">
                                        <span className="profile__gender-heading">Giới tính:</span>
                                        <span className="profile__gender">Nam</span>
                                    </div>
                                </div>

                                <span className="profile__basic-info-title">THÔNG TIN THANH TOÁN</span>
                                <div className="profile__basic-section">
                                    <div className="profile__basic-info">
                                        <span className="profile__bankaccount-heading">Số tài khoản:</span>
                                        <span className="profile__bankaccount">1819273925</span>
                                    </div>
                                    <div className="profile__basic-info">
                                        <span className="profile__bankname-heading">Tên ngân hàng:</span>
                                        <span className="profile__bankname">Viettinbank</span>
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

export default CustomerProfile;