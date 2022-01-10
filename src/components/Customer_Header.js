import React, {useState} from 'react';
import '../assets/stylesheets/base.css';
import '../assets/stylesheets/header.css';
import Logo from "../assets/res/logo/logo.png";
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import {cookies, useCookies } from 'react-cookie';

const CustomerHeader = () => {
    const [cookies, removeCookie] = useCookies(['user']);
    const [product_name, setProductName] = useState('');
    let history = useHistory();
    const handleRemoveCookie = () => {
        removeCookie("Username");
        removeCookie("Password");
    }

    const handleSuccessfulAuth = () => {
        history.push("/customer/search_product");
        localStorage.setItem("product_name",product_name)
    } 

    return (
        <div>
            <header className="customer_header_1">
                <div className="grid">
                    <div className="header_desktop_customer_1">
                        <div className="header_desktop_customer_1-logo">
                            <Link to="/customer"> 
                                <img className="logo-Dichothue" src={Logo} alt=""/> 
                            </Link> 
                        </div>

                        <form className="header_desktop_customer_1__search d-flex">
                            <input 
                                className="header_search_form form-control me-2" 
                                type="search" 
                                placeholder="Nhập tên sản phẩm" 
                                aria-label="Search"
                                value={product_name}
                                onChange={(e)=> setProductName(e.target.value)}
                                required
                            />
                            <Button onClick={() => handleSuccessfulAuth()} type="submit" className="btn btn-dark">Tìm kiếm</Button>
                        </form>

                        <Link to="/customer/cart" className="header_desktop_customer_1__cart">
                            <i className="header_desktop_customer_1__cart-icon fas fa-shopping-cart"></i>
                        </Link>

                        <div className="header_desktop_customer_1__account">
                            <i className="header_desktop_customer_1__account-icon fas fa-user-alt"></i>
                            <ul className="header_desktop_customer_1__account-option">
                                <li><Link to="/customer/profile " className="header_desktop_customer_1__account-item">Tài khoản của tôi</Link></li>
                                <li><Link to="/customer/bookinghistory" className="header_desktop_customer_1__account-item">Đơn mua</Link></li>
                                <li><Link to="/customer/login" onClick={()=>handleRemoveCookie()} className="header_desktop_customer_1__account-item">Đăng xuất</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <header className="customer_header_2">
                <div className="grid">
                    <div className="header_desktop_customer_2">
                        <nav className="header_desktop_customer_2__navbar">
                            <ul className="header_desktop_customer_2__navbar-list">
                                <li className="header_desktop_customer_2__navbar-item"> <Link to="/customer">TRANG CHỦ</Link></li>
                                <li className="header_desktop_customer_2__navbar-item"><Link to="/customer/storelist">HỆ THỐNG CỬA HÀNG</Link></li>
                                <li className="header_desktop_customer_2__navbar-item"><Link to="/customer/faq">CÂU HỎI THƯỜNG GẶP</Link></li>
                                <li className="header_desktop_customer_2__navbar-item"><Link to="/customer/contact">LIÊN HỆ</Link></li>
                            </ul>   
                        </nav>
                    </div>
                </div>
            </header>
            
        </div>
    );
}

export default CustomerHeader;