import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/system_qlsp.css";
import Image from "../assets/res/product/chao-khoai-mon-cho-be-7832_500x500.jpeg"
import axios from 'axios'

const SystemQLSP = () => {
    const [StoreList, setStoreList] = useState([]);
    const [StoreProductList, setStoreProductList] = useState([{"store":{},"products": []}]);
    let history = useHistory()
        
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

    const fetchStoreProductList = async (store_id) =>{
        try {
            const res = await axios.get(`http://dichothuecsharp.somee.com/api/product/list/${store_id}`) 
                                    .then(res => {
                                        setStoreProductList(res.data)
                                        // localStorage.setItem("QLSP_store_id",store_id)
                                        console.log(res.data)
                                    })
                                    .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
      }

    const DeleteProduct = async (product_id) =>{
    try {
        const res = await axios(`https://market-0123.herokuapp.com/admin/delete_product/${product_id}`,
        {
            method: "put"
        }
        ) 
        .then(res => {
            console.log(res.data)
            window.location.reload()
        })
        .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
    }

    function PushProduct(id){
        localStorage.setItem("System_product_id",id)
    }

    const handleSuccessfulAuth = () => {
        history.push("/system/qlsp/ctsp");
    }

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">4. QUẢN LÝ SẢN PHẨM</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle system_size_function" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              Chọn cửa hàng
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                {StoreList.map(storelist => {
                                    return (
                                        <button type="submit" onClick={(e) => fetchStoreProductList(storelist.id)} className="dropdown-item">{storelist.store_name}</button>
                                    )})}
                                  
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-8">
                    {StoreProductList.map(stores => {
                        return (
                            <div>
                            <div className="row">
                                <div className="col-3">
                                    <span className="cart_heading_store_name">{stores.store.store_name}</span>
                                </div>
                                <div className="col-6">
                                    <span className="cart_heading_store_address">{stores.store.address}</span>
                                </div>
                            </div>
                            </div>
                        )})}
                    </div>
                    
                </div>
                <div className="row align-items-start">
                    {/* <div className="col-3"> */}
                        {StoreProductList.map(stores => {
                            return(
                            <>
                                {stores.products.map(product => {
                                return (
                                    <div className="col-3">
                                    <div className="system_dichothue-item">
                                    <div onClick={(e)=> {PushProduct(product.id); handleSuccessfulAuth()}} className="system_dichothue-item__img" style = {{backgroundImage: `url(${product.url_image})`}} />
                                    <span className="system_dichothue-item_info">
                                        Tên SP: {product.name} 
                                    </span>
                                    <span className="system_dichothue-item_info">
                                        Gía: {product.price}đ
                                    </span>
                                    <button onClick={(e) => DeleteProduct(product.id)} type="submit" className="btn btn-outline-secondary system_addcart_btn">Xóa</button>
                                </div>
                                </div>
                                )})}
                            </>
                            )
                        })}
            
                </div>
            </div>
        </div>
    );
}

export default SystemQLSP;