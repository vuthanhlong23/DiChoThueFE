import React,{useState,Fragment, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_search_food.css";
import "../assets/res/product/chao-khoai-mon-cho-be-7832_500x500.jpeg";
import axios from 'axios';

const StoreSearchFood = () => {

    let history = useHistory()
    const [SearchProductList, setSearchProductList] = useState([{"store_name":'', "store_address":'',"product": []}]);
    useEffect(() => {
        const fetchSearchProductList = async () =>{
          try {
              const res = await axios.get(`https://market-0123.herokuapp.com/product/find/?name=${localStorage.getItem("store_search_product_name")}`) 
                                      .then(res => {
                                          setSearchProductList(res.data)    
                                          localStorage.removeItem("store_search_product_name")
                                          console.log(res.data)
                                      })
                                      .catch(err => console.log(err));
          } catch (error) {
              console.log('Failed to fetch store list', error)
          }
        } 
        
        fetchSearchProductList();
    }, [])

    function setProductID(id){
        localStorage.setItem("store_product_ctsp",id)
        history.push("/store/qlsp/ttctsp")
    }

    return (
        <div className="container">
            <div className="grid">
                <div className="row align-items-start store_search_product_store">
                {SearchProductList.map(arr => {
                        return (
                            <>
                                {arr.product.map(productlist => {
                                    return (
                                            <>
                                            <div className="col-4">
                                                <Link className="store_dichothue-item">
                                                    <div className="system_dichothue-item__img" style = {{backgroundImage: `url(${productlist.url_image})`}} />
                                                    <h4 className="store_dichothue-item__name">{productlist.name} </h4>
                                                    <span className="store_dichothue-item__price">{productlist.price}<Fragment>&nbsp;/{productlist.unit}</Fragment></span>
                                                    <button onClick={()=>setProductID(productlist.id)} type="button" className="btn btn-outline-secondary store_qlsp_addcart_btn">Thông tin SP</button>
                                                </Link>
                                            </div>
                                                    
                                            </>
                                        
                                )})}
                            </>
                    )})}
                </div>
            </div>
        </div>
    );
}

export default StoreSearchFood;