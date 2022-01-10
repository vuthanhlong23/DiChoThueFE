import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/system_store_registration.css";
import axios from 'axios';

const SystemStoreRegistration1 = () => {
    const [RegisterList, setRegisterList] = useState([{"store":{}}]);
    let history = useHistory()

    useEffect(() => {
        const fetchRegisterList = async () =>{
            try {
                const res = await axios.get(`https://market-0123.herokuapp.com/admin/storeregister`) 
                                        .then(res => {
                                            setRegisterList(res.data);
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }
        fetchRegisterList();
    }, [])

    const handleSuccessfulAuth = () => {
        history.push("/system/system_store_registration2");
    } 

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">9. XÉT DUYỆT ĐƠN ĐĂNG KÝ CỦA CỬA HÀNG/SIÊU THỊ</h5>
                    </div>
                </div>
                {RegisterList.map(stores => {
                    return (
                    <div className="row system_registration-store-list">
                        <div className="col-6">
                            <span className="system_registration-store-list-item">
                                Tên cửa hàng: {stores.store_name}
                            </span>
                            <span className="system_registration-store-list-item">
                                Địa chỉ: {stores.address}
                            </span>
                        </div>
                        <div className="col-6">
                            <button onClick={(e)=>{handleSuccessfulAuth(); localStorage.setItem("System_register_store_id",stores.id)}} type="button" className="system_registration-store-list_btn btn btn-secondary">Xem chi tiết</button>
                        </div>                       
                    </div>
                )})} 

            </div>
        </div>
    );
}

export default SystemStoreRegistration1;