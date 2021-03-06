import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_qlsp.css";
import axios from 'axios'

const StoreQLSP = () => {
    const [StoreProductList, setStoreProductList] = useState([{"store":{},"products": []}]);
    const [ProductTypeList, setProductTypeList] = useState([{"product_type":[]}]);
    const [product_name, setStoreProductName] = useState('');
    const [price, setPrice] = useState('');
    const [unit, setUnit] = useState('');
    const [origin, setOrigin] = useState('');
    const [url_image, setImage] = useState('');
    const [type_id, setTypeID] = useState('');
    let history = useHistory()
        
    useEffect(() => {
        const fetchStoreProductList = async () =>{
            try {
                const res = await axios.get(`http://dichothuecsharp.somee.com/api/product/list/${localStorage.getItem("current_Store")}`) 
                                        .then(res => {
                                            setStoreProductList(res.data)
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
        fetchStoreProductList();
    }, [])

    const DeleteProduct = async (product_id) =>{
        try {
            const res = await axios.delete(`http://dichothuecsharp.somee.com/api/store/product/delete/${product_id}`) 
            .then(res => {
                console.log(res.data)
                window.location.reload()
            })
            .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }

    const AddProductToStore = async () =>{
        try {
            const res = await axios(`http://dichothuecsharp.somee.com/api/store/product/add`,
            {
                method: "post",
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
                alert("Th??m s???n ph???m th??nh c??ng!")
            })
            .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }

    function setProductID(id){
        localStorage.setItem("store_product_ctsp",id)
        history.push("/store/qlsp/ttctsp")
    }

    return (
        <div className="container">
            <div className="grid">
            {StoreProductList.map(stores => {
                        return (
                            <div>
                            <div className="row">
                                <div className="col-6">
                                    <span className="cart_heading_store_name">{stores.store.store_name} ({stores.store.address})</span>
                                </div>
                                
                            </div>
                            </div>
                        )})}
                <div className="row">
                {StoreProductList.map(stores => {
                            return(
                            <>
                                {stores.products.map(product => {
                                return (
                                    <div className="col-3">
                                        <div className="store_qlsp_dichothue-item">
                                            <div className="system_dichothue-item__img" style = {{backgroundImage: `url(${product.url_image})`}} />
                                            <h4 className="store_qlsp_dichothue-item__name">{product.name}</h4>
                                            <span className="store_qlsp_dichothue-item__price">{product.price}??/{product.unit}</span>
                                            <button onClick={(e) => DeleteProduct(product.id)} type="button" className="btn btn-outline-secondary store_qlsp_addcart_btn">X??a</button>
                                            <button onClick={()=>setProductID(product.id)} type="button" className="btn btn-outline-secondary store_qlsp_addcart_btn">Th??ng tin SP</button>
                                        </div>
                                    </div>
                                )})}
                            </>
                            )
                        })}
                </div>
                <div className="row">
                    <h1 className="store_qlsp_add_product">Th??m s???n ph???m</h1>
                </div>
                <div className="input-group mb-3">
                    <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nh???p t??n s???n ph???m</span>
                    <input 
                        type="text" 
                        className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        value={product_name}
                        onChange={(e)=> setStoreProductName(e.target.value)}
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
                    <span className="store_qlsp_add_product_details input-group-text" id="inputGroup-sizing-default">Nh???p ????n v??? t??nh</span>
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
                <button onClick={()=> AddProductToStore()} type="submit" className="store_qlsp_add_button_details btn btn-outline-secondary">Th??m s???n ph???m</button>
            </div>
        </div>
    );
}

export default StoreQLSP;