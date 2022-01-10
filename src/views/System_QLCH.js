import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/system_qlch.css";
import Image from "../assets/res/stuff/COOP.png"
import axios from 'axios';

const SystemQLTTCHST = () => {
    const [StoreList, setStoreList] = useState([]);
    
    let history = useHistory();
    useEffect(() => {
        const fetchStoreList = async () =>{
            try {
                const res = await axios.get(`http://dichothuecsharp.somee.com/api/store/list`) 
                                        .then(res => {
                                            setStoreList(res.data);
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }
        
        fetchStoreList();
    }, []) 

    const handleSuccessfulAuth = () => {
        history.push("/system/qlchst/ttctchst");
    }
    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">6. QUẢN LÝ THÔNG TIN CỬA HÀNG/SIÊU THỊ</h5>
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col customer_store_heading">
                      Tên cửa hàng
                    </div>
                    <div className="col customer_store_heading">
                      Địa chỉ
                    </div>
                    <div className="col customer_store_heading">
                      Thao tác
                    </div>
                </div>

                {StoreList.map(storelist => {
                    return (
                    <div className="row align-items-start customer_store_list">
                        <div className="col ">
                            <img className="customer_store_list-img" src={storelist.url_image} alt=""/>  
                            <span className="customer_store_list-img-name">{storelist.store_name}</span>
                        </div>
                        <div className="col ">
                            <div className="cart-body-item__service-price">{storelist.address}</div>
                        </div>
                        <div className="col ">
                            <button 
                                type="submit" 
                                onClick={(e) => {
                                    handleSuccessfulAuth()
                                    localStorage.setItem("System_Store_id", storelist.id)
                                
                                } } 
                                className="btn btn-secondary btn_select_store">
                                    CHỌN
                            </button>
                            
                        </div>
                    </div>
                )})}
                
                
            </div>
        </div>
    );
}

export default SystemQLTTCHST;