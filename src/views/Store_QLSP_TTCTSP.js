import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_qlsp.css";
import axios from 'axios'

const StoreTTCTSP = () => {
    const [productdetail, setProductDetail] = useState([{"product":{}}]);
    const [ProductTypeList, setProductTypeList] = useState([{"product_type":[]}]);
    const [product_name, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [unit, setUnit] = useState('');
    const [origin, setOrigin] = useState('');
    const [url_image, setImage] = useState('');
    const [type_id, setTypeID] = useState('');
    useEffect(() => {
        const fetchProductDetail = async () =>{
            try {
                const res = await axios.get(`http://dichothuecsharp.somee.com/api/product/infor/${localStorage.getItem("store_product_ctsp")}`) 
                                        .then(res => {
                                            setProductDetail(res.data);
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }

        const fetchProductTypeList = async () =>{
            try {
                const res = await axios.get(`http://dichothuecsharp.somee.com/api/producttype/list`) 
                                        .then(res => {
                                            setProductTypeList(res.data)
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
                } catch (error) {
                    console.log('Failed to fetch store list', error)
                }
            }
        fetchProductTypeList()
        fetchProductDetail();
    }, [])

    const UpdateProduct = async () =>{
        try {
            const res = await axios(`http://dichothuecsharp.somee.com/api/store/product/update/${localStorage.getItem("store_product_ctsp")}`,
            {
                method: "patch",
                data:{
                    store_id: localStorage.getItem("current_Store"),
                    type_id: type_id,
                    product_name: product_name,
                    price: Number(price),
                    unit: unit,
                    origin: origin,
                    url_image: url_image
                }
            }
            ) 
            .then(res => {
                console.log(res.data)
                alert("C???p nh???t s???n ph???m th??nh c??ng!")
                window.location.reload()
            })
            .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }

   

    return (
        <div className="container">
            <div className="grid">
                <div className="row wrap-right__store_qlsp_product-details-body">
                {productdetail.map(product => {
                    return(
                        <>
                            <div className="col-2">
                                <img className="store_qlsp_product-details__img" src={product.url_image} alt=""/>
                            </div>
                            <div className="col-4 wrap__store_qlsp_product-details-body">
                                <h2 className="store_qlsp_product-details__name">{product.name}</h2>
                                <span className="store_qlsp_product-details__contact-info-title">TH??NG TIN S???N PH???M</span>
                                <div className="store_qlsp_product-details__contact-section">
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">M?? s???n ph???m:</span>
                                        <span className="store_qlsp_product-details__productinfo">{String(product.id).substring(0,10).toUpperCase()}</span>
                                    </div>
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">M?? c???a h??ng:</span>
                                        <span className="store_qlsp_product-details__productinfo">{String(product.store_id).substring(0,10).toUpperCase()}</span>
                                    </div>
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Lo???i m???t h??ng:</span>
                                        <span className="store_qlsp_product-details__productinfo">{product.type_name}</span>
                                    </div>
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Gi?? s???n ph???m:</span>
                                        <span className="store_qlsp_product-details__productinfo">{product.price}??</span>
                                    </div>
                                    <div className="store_qlsp_product-details__contact-info">
                                        <span className="product-details__productinfo-heading">Xu???t x???:</span>
                                        <span className="store_qlsp_product-details__productinfo">{product.origin}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                     )
                })}
                    
                <div className="col-6">
                    <div className="row">
                        <h1 className="store_qlsp2_add_product">C???p nh???t s???n ph???m</h1>
                    </div>
                    
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nh???p t??n s???n ph???m</span>
                            <input 
                                type="text" 
                                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                value={product_name}
                                onChange={(e)=> setProductName(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label className="store_qlsp_add_product_details input-group-text" for="inputGroupSelect01">Ch???n lo???i m???t h??ng</label>
                            <select 
                                className="store_qlsp_add_product_details form-select" 
                                id="inputGroupSelect01"
                                value={type_id}
                                onChange={(e)=> setTypeID(e.target.value)}
                                required   
                            >
                            <option selected>Ch???n...</option>
                            {ProductTypeList.map(product_type=>{
                                return(
                                    <option value={product_type.id}>{product_type.name}</option>
                                )
                                
                            })}
                            
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nh???p gi?? s???n ph???m</span>
                            <input 
                                type="text" 
                                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                value={price}
                                onChange={(e)=> setPrice(e.target.value)}
                                required  
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nh???p xu???t x???</span>
                            <input 
                                type="text" 
                                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                value={origin}
                                onChange={(e)=> setOrigin(e.target.value)}
                                required  
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nh???p ????n v???</span>
                            <input 
                                type="text" 
                                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                value={unit}
                                onChange={(e)=> setUnit(e.target.value)}
                                required  
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nh???p link h??nh ???nh</span>
                            <input 
                                type="text" 
                                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                value={url_image}
                                onChange={(e)=> setImage(e.target.value)}
                                required      
                            />
                        </div>
                        <button onClick={()=>UpdateProduct()} type="button" className="store_qlsp_add_button_details btn btn-outline-secondary">C???p nh???t s???n ph???m</button>
                
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default StoreTTCTSP;