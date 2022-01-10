import {Link, useHistory} from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import "../assets/stylesheets/customer_store.css";
import "../assets/stylesheets/base.css";
import axios from 'axios'

const CustomerStoreList = () => {
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
        history.push("/customer/selectfood");
    } 

    return (
        <div className="container">
            <div className="grid">
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
                                    localStorage.setItem("Store_id", storelist.id)
                                
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

export default CustomerStoreList;