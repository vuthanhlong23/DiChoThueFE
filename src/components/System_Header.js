import React, {useState} from 'react';
import '../assets/stylesheets/system_base.css';
import '../assets/stylesheets/system_header.css';
import Logo from "../assets/res/logo/logo.png";
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import {cookies, useCookies } from 'react-cookie';

const SystemHeader = () => {
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
            <header className="system_header">
                <div className="grid">

                    <div className="header_desktop_system">
                        <div className="header_desktop_system-logo">
                            <Link to="/system">
                                <img className="logo-system-Dichothue" src={Logo} alt=""/> 
                            </Link>
                        </div>

                        <div className="dropdown system_select_function_nav">
                            <Link className="system_select_function_nav_item btn btn-secondary dropdown-toggle system_size_function" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Chọn chức năng
                            </Link>
                            <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
                            <li><Link className="dropdown-item" to="/system/tkddh">1. Thống kê đơn đặt hàng của cửa hàng/siêu thị</Link></li>
                            <li><Link className="dropdown-item" to="/system/tkmhty">2. Thống kê mặt hàng thiết yếu</Link></li>
                            <li><Link className="dropdown-item" to="/system/tknctpck">3. Thống kê nhu cầu thực phẩm cùng kỳ</Link></li>
                            <li><Link className="dropdown-item" to="/system/qlsp">4. Quản lý sản phẩm</Link></li>
                            <li><Link className="dropdown-item" to="/system/qlkh">5. Quản lý thông tin khách hàng</Link></li>
                            <li><Link className="dropdown-item" to="/system/qlchst">6. Quản lý thông tin cửa hàng/siêu thị</Link></li> 
                            <li><Link className="dropdown-item" to="/system/tthh">7. Tính tiền hoa hồng</Link></li> 
                            <li><Link className="dropdown-item" to="/system/tkvd">8. Thống kê vùng dịch</Link></li> 
                            <li><Link className="dropdown-item" to="/system/system_store_registration1">9. Xét duyệt đơn đăng của cửa hàng/siêu thị</Link></li> 
                            </ul>
                        </div>


                        <div className="header_desktop_system__account">
                            <i className="header_desktop_system__account-icon fas fa-user-alt"></i>
                            <ul className="header_desktop_system__account-option">
                                <li><Link to="#" className="header_desktop_system__account-item">Tài khoản của tôi</Link></li>
                                <li><Link to="/system/login" className="header_desktop_system__account-item">Đăng xuất</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default SystemHeader;




