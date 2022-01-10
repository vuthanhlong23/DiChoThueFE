import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/trangchu.css";
import "../assets/stylesheets/base.css";
import Image from "../assets/res/slider/slider.jpg";

const CustomerSlider = () => {

    return (
        <div className="container">
            <div className="slider">
                <div className="grid">
                    <div className="slider__item-img" style = {{backgroundImage: `url(${Image})`}} />
                </div>
            </div>
        </div>
    );
}

export default CustomerSlider;