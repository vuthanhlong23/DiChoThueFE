import React, {useState} from 'react';
import '../assets/stylesheets/system_homepage.css';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import {cookies, useCookies } from 'react-cookie';

const SystemHomepage = () => {

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">GIAO DIỆN CHO NHÂN VIÊN HỆ THỐNG ĐI CHỢ THUÊ</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SystemHomepage;




