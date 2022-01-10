import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/system_qlkh.css";
import Image from "../assets/res/stuff/profile.png";
import axios from 'axios';

const SystemQLKH = () => {
    const [CustomerList, setCustomerList] = useState([{"customerlist":{}}]);
    const [UserProfile, setUserProfile] = useState('profile');
    const [customer_id, setCustomer] = useState("");
    const fetchUserProfile = async () =>{
        try {
            const res = await axios.get(`https://market-0123.herokuapp.com/customer/find/${customer_id}`) 
                                    .then(res => {
                                        setUserProfile(res.data);
                                        console.log(res.data)
                                    })
                                    .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
    }

    useEffect(() => {
        const fetchCustomerList = async () =>{
        try {
            const res = await axios.get(`https://market-0123.herokuapp.com/admin/list_customer`) 
                                    .then(res => {
                                        setCustomerList(res.data)
                                        console.log(res.data)
                                    })
                                    .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
        } 
        
        fetchCustomerList();
    }, [])

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">5. QUẢN LÝ THÔNG TIN KHÁCH HÀNG</h5>
                    </div>
                </div>
                <div className="row">
                    <select value={customer_id} onChange={(e)=> setCustomer(e.target.value)} className="form-select" aria-label="Default select example">
                        <option selected>Chọn khách hàng</option>
                        {CustomerList.map(customerlist => {
                        return (
                            <option value={customerlist.id}>{customerlist.name}</option>
                        )})}
                      </select>
                </div>
                
                <button onClick={(e)=>fetchUserProfile()} type="button" className="btn btn-secondary system-qlkh_submit_btn">Xem</button>

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
                                        <span className="profile__birthday">05/03/2000</span>
                                    </div>
                                    <div className="profile__basic-info">
                                        <span className="profile__gender-heading">Giới tính:</span>
                                        <span className="profile__gender">Nam</span>
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

export default SystemQLKH;