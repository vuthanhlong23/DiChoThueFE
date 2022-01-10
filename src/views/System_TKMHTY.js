import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../assets/stylesheets/system_tkddh.css";
import "../assets/stylesheets/booking.css";
import axios from 'axios';

const SystemTKMHTY = () => {
    const [ProductList, setProductList] = useState([{'products':[]}]);
    const [year, setyear] = useState('')
    const [month, setmonth] = useState('')
    let history = useHistory();

    const fetchProductList = async (date) =>{
        try {
            const res = await axios.get(`http://dichothuecsharp.somee.com/api/static/product/now/${date}`) 
                                    .then(res => {
                                        setProductList(res.data);
                                        console.log(res.data)
                                    })
                                    .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
    }

    // const data = [
    //     {
    //       name: 'Sản Phẩm A',
    //       amount: 'Số lượng',
    //       SanPham: 4000,
    //     },
    //     {
    //       name: 'Sản Phẩm B',
    //       amount: 'Số lượng',
    //       SanPham: 3000,
    //     },
    // ];

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">2. THỐNG KÊ MẶT HÀNG THIẾT YẾU</h5>
                    </div>
                    <div className="wrap__booking-body">
                        <div className="col-7">
                            <div className="booking__time-details">
                                <div className="booking__time-heading">
                                    <span className="booking__time-heading-text">Chọn thời gian thống kê<Fragment>&nbsp;</Fragment></span>
                                </div>
                                <div className="booking__time-input">
                                    <input 
                                        type="number" 
                                        className="booking__time-hour-input booking__input-type" 
                                        placeholder="Năm"
                                        value={year}
                                        onChange={(e)=> setyear(e.target.value)}
                                        required
                                    />
                                    <input 
                                        type="number" 
                                        className="booking__time-minute-input booking__input-type" 
                                        placeholder="Tháng"
                                        value={month}
                                        onChange={(e)=> setmonth(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=> fetchProductList(year+'-'+month)} type="submit" className="cart-body__check-out-btn btn btn--primary">Thực hiện thống kê</button>
                </div>
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={ProductList}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount_sale" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            
        </div>
    );
}

export default SystemTKMHTY;
