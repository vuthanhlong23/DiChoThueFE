import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_search_food.css";
import "../assets/res/product/chao-khoai-mon-cho-be-7832_500x500.jpeg";
import axios from 'axios';

const StoreSearchFood = () => {


    return (
        <div className="container">
            <div className="grid">
                <div className="row align-items-start store_search_product_store">
                    <div className="col-4">
                        <Link to="/store" className="store_dichothue-item">
                            <div className="system_dichothue-item__img" style = {{backgroundImage: `url(${Image})`}} />
                            <h4 className="store_dichothue-item__name">Khoai môn </h4>
                            <span className="store_dichothue-item__price">15.000đ/kg</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreSearchFood;