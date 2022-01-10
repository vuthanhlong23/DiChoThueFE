import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/base.css";
import "../assets/stylesheets/store_header.css";
import Logo from "../assets/res/logo/logo.png";
import axios from 'axios';

const StoreHeader = () => {
    

    return (
        <div classNameName="container">
            <header className="store_header_1">
                <div className="grid">

                    <div className="header_desktop_store_1">
                        <div className="header_desktop_store_1-logo">
                            <Link to="/store">
                                <img className="logo-Dichothue" src={Logo} alt=""/> 
                            </Link>
                        </div>

                        <form className="header_desktop_store_1__search d-flex">
                            <input className="header_search_form form-control me-2" type="search" placeholder="Nhập tên sản phẩm" aria-label="Search"/>
                            <button type="submit" className="btn btn-dark">Tìm kiếm</button>
                        </form>

                        <div className="header_desktop_store_1__account">
                            <i className="header_desktop_store_1__account-icon fas fa-user-alt"></i>
                            <ul className="header_desktop_store_1__account-option">
                                <li><Link to="/store/profile" className="header_desktop_store_1__account-item">Tài khoản của tôi</Link></li>
                                {/* <li><Link to="/store/qldh" className="header_desktop_store_1__account-item">Đơn mua</Link></li> */}
                                <li><Link to="/store/login" className="header_desktop_store_1__account-item">Đăng xuất</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <header className="store_header_2">
                <div className="grid">
                    <div className="header_desktop_store_2">
                        <nav className="header_desktop_store_2__navbar">
                            <ul className="header_desktop_store_2__navbar-list">
                                <li className="header_desktop_store_2__navbar-item"> <Link to="/store">TRANG CHỦ</Link></li>
                                <li className="header_desktop_store_2__navbar-item"><Link to="/store/qlsp">QUẢN LÝ SẢN PHẨM</Link></li>
                                <li className="header_desktop_store_2__navbar-item"><Link to="/store/qldh">QUẢN LÝ ĐƠN HÀNG</Link></li>
                                <li className="header_desktop_store_2__navbar-item"><Link to="/store/tthh">TÍNH TOÁN TIỀN HOA HỒNG</Link></li>
                            </ul>   
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default StoreHeader;