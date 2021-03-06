import React, {Fragment, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/customer_select_food.css";
import "../assets/stylesheets/base.css";
import axios from 'axios';


const CustomerSearchProduct = () => {
    let history = useHistory()
    const [SearchProductList, setSearchProductList] = useState([{"store_name":'', "store_address":'',"product": []}]);
    useEffect(() => {
        const fetchSearchProductList = async () =>{
          try {
              const res = await axios.get(`https://market-0123.herokuapp.com/product/find/?name=${localStorage.getItem("product_name")}`) 
                                      .then(res => {
                                          setSearchProductList(res.data)    
                                          console.log(res.data)
                                      })
                                      .catch(err => console.log(err));
          } catch (error) {
              console.log('Failed to fetch store list', error)
          }
        } 
        
        fetchSearchProductList();
    }, [])

    const AddProductToCart = async (product) =>{
        try {
            const res = await axios(`http://dichothuecsharp.somee.com/api/cart/${localStorage.getItem("customer_id")}/add`,{
              method:"post", 
              // headers: {
              //   Accept: 'application/json',
              //   'Content-Type': 'application/json'
              // },
              data:
                {
                  activity: product.activity,
                  create_date: product.create_date,
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  status: product.status,
                  store_id: product.store_id,
                  type_id: product.type_id,
                  type_name: product.type_name,
                  unit: product.unit,
                  update_date: product.update_date,
                  url_image: product.url_image
                }
            }) 
            .then(res => {
                alert("Th??m s???n ph???m th??nh c??ng!")
                console.log(res.data)
            })
            .catch(err => console.log(err));
                                    
        } catch (error) {
            console.log('Failed', error)
        }
      }

    function setProductID(id){
        localStorage.setItem("customer_product_ctsp",id)
        history.push("/customer/productdetails")
    }

    return (
        <>
            <div className="container">
            <div className="grid">
                <div className="row align-items-start customer_search_product_store">
                    
                    {SearchProductList.map(arr => {
                        return (
                            <>
                                {arr.product.map(productlist => {
                                    return (
                                            <>
                                            <div className="col-3">
                                                <div className="customer_dichothue-item">
                                                    <div className="customer_dichothue-item__img" style = {{backgroundImage: `url(${productlist.url_image})`}} />
                                                    <h4 className="customer_dichothue-item__name">{productlist.name}</h4>
                                                    <span className="customer_dichothue-item__price">{productlist.price}<Fragment>&nbsp;/kg</Fragment></span>
                                                    <button 
                                                        type="submit" 
                                                        onClick={(e) => {
                                                            //handleSuccessfulAuth()
                                                            AddProductToCart(productlist)
                                                        
                                                        }} 
                                                        className="btn btn-outline-secondary customer_addcart_btn">
                                                            Th??m v??o gi??? h??ng
                                                    </button>
                                                    <button onClick={()=>setProductID(productlist.id)} type="button" className="btn btn-outline-secondary store_qlsp_addcart_btn">Th??ng tin SP</button>
                                                </div>
                                            </div>
                                                    
                                            </>
                                        
                                )})}
                            </>
                    )})}
                    
                </div>
            </div>

            </div>
        </>
    );
}

export default CustomerSearchProduct;