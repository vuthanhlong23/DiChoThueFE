import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/customer_contact.css";
import "../assets/stylesheets/base.css";
import Image from "../assets/res/stuff/mapAddress.jpg";

const CustomerContact = () => {

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <h1 className="dichothue__contact-heading">LIÊN LẠC VỚI CHÚNG TÔI</h1>
                </div>
                <div className="row">
                    <h1 className="dichothue__contact-statement">CHÚNG TÔI RẤT VUI KHI HỖ TRỢ BẠN!</h1>
                </div>
                <div className="row">
                    <div className="wrap__contact-content">
                        {/* <!-- Phone contact --> */}
                        <div className="col-3">
                            <div className="contact-content-item">
                                <i className="contact-content__icon fas fa-phone"></i>
                                <h4 className="contact-content__title">GỌI CHO CHÚNG TÔI</h4>
                            </div>
                                <p className="contact-content__phone-number">(028) 37109999</p>
                        </div>
                        {/* <!-- Address --> */}
                        <div className="col-4">
                            <div className="contact-content-item">
                                <i className="contact-content__icon fas fa-map-marker-alt"></i>
                                <h4 className="contact-content__title">CƠ SỞ HOẠT ĐỘNG</h4>
                            </div>
                                <Link to="https://goo.gl/maps/ZLPvPHvNg48ht8Uo6" className="contact-content__address">44/9 Nguyen Thi Minh Khai, Q1, TP.HCM</Link>
                        </div>
                        {/* <!-- Link social media --> */}
                        <div className="col-4">
                            <div className="contact-content-item">
                                <i className="contact-content__icon fas fa-link"></i>
                                <h4 className="contact-content__title">KẾT NỐI VỚI CHÚNG TÔI</h4>
                            </div>
                            <div className="contact-content__social-media">
                                <Link to="https://www.facebook.com/" className="contact-content__social-item">
                                    <i className="fab fa-facebook"></i>
                                </Link>
                                <Link to="https://www.instagram.com/" className="contact-content__social-item">
                                    <i className="fab fa-instagram-square"></i>
                                </Link>
                                <Link to="https://www.pinterest.cl/" className="contact-content__social-item">
                                    <i className="fab fa-pinterest"></i>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h1 className="dichothue__contact-statement_location">TÌM CHÚNG TÔI TẠI</h1>
                </div>
                <div className="row">
                    <img className="dichothue-contact-location__img" src={Image} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default CustomerContact;