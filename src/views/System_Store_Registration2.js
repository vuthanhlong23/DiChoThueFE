import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/system_store_registration.css";
import axios from 'axios';

const SystemStoreRegistration2 = () => {
    let history = useHistory()
    const [storedetail, setStoreDetail] = useState("")

    const handleSuccessfulAuth = () => {
        history.push("/system/system_store_registration3");
    }
    useEffect(() => {
        const fetchStoreDetail = async () =>{
            try {
                const res = await axios.get(`https://market-0123.herokuapp.com/admin/find/register/${localStorage.getItem("System_register_store_id")}`) 
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
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">9. XÉT DUYỆT ĐƠN ĐĂNG KÝ CỦA CỬA HÀNG/SIÊU THỊ</h5>
                    </div>
                </div>
                <div className="row system_registration-store-list">
                <div className="col-6">
                    <span className="system_registration-store-list-item">
                        Tên cửa hàng: {storedetail.store_name}
                    </span>
                    <span className="system_registration-store-list-item">
                        Địa chỉ: {storedetail.address}
                    </span>
                    <span className="system_registration-store-list-item">
                        Vùng dịch: {storedetail.region}
                    </span>
                    <span className="system_registration-store-list-item">
                        Số điện thoại: {storedetail.phone}
                    </span>
                    <span className="system_registration-store-list-item">
                        Email: {storedetail.email}
                    </span>
                    <span className="system_registration-store-list-item">
                        Người phụ trách: {storedetail.person_name}
                    </span>
                    <span className="system_registration-store-list-item">
                        Số điện thoại người phụ trách: {storedetail.person_phone}
                    </span>
                </div>
                </div>
                <div className="row col-2 ">
                    <button onClick={(e)=>handleSuccessfulAuth()} type="button" className="btn btn-secondary system_registration-store-list_btn">Duyệt cửa hàng</button>
                </div>
                
            </div>
        </div>
    );
}

export default SystemStoreRegistration2;