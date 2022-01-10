import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_homepage.css";
import axios from 'axios';
import Image from "../assets/res/store/store_homepage.jpg"

const StoreHomepage = () => {


    return (
        <div className="container">
            <div className="grid">
                <h1 className="store_homepage_welcome">Chào mừng bạn đến với Đi Chợ Thuê</h1>
                <h1 className="store_homepage_welcome2">Cảm ơn cửa hàng/siêu thị đã trở thành đối tác với Đi Chợ Thuê.</h1>

                <div className="row">
                    <img src={Image} className="store-body-item__service-img"/>

                </div>
            </div>
        </div>
    );
}

export default StoreHomepage;