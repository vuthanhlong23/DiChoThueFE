import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/system_tkddh.css";
import "../assets/stylesheets/system_qlsp.css"
import axios from 'axios';
import { PieChart, Pie, Tooltip,Cell } from 'recharts';
const COLORS = ['#D21404', '#02C04A', '#DD571C', '#FFBA00'];
const SystemTKVD = () => {
    const [regionList, setRegionList] = useState([{'region':[]}]);
    const [type_id, setTypeID] = useState('');

    const fetchCustomerRegion = async () =>{
        try {
            const res = await axios.get(`https://market-0123.herokuapp.com/admin/customer_region`) 
                                    .then(res => {
                                        setRegionList(res.data);
                                        console.log(res.data)
                                    })
                                    .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
    }
    
    const fetchStoreRegion = async () =>{
        try {
            const res = await axios.get(`https://market-0123.herokuapp.com/admin/store_region`) 
                                    .then(res => {
                                        setRegionList(res.data);
                                        console.log(res.data)
                                    })
                                    .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
    }

    function fetchList(type_id){
        console.log(type_id)
        if(type_id === "1") fetchCustomerRegion();
        else fetchStoreRegion();
    }

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">8. THỐNG KÊ VÙNG DỊCH</h5>
                    </div>
                <select value={type_id} onChange={(e)=> setTypeID(e.target.value)} className="form-select" aria-label="Default select example">
                    <option selected>Chọn đối tượng</option>
                    <option value="1" >Khách Hàng</option>
                    <option value="2" >Cửa hàng</option>
                </select>
                <button type="submit" onClick={()=> fetchList(type_id)} className="cart-body__check-out-btn btn btn--primary">Thực hiện thống kê</button>
                <PieChart width={500} height={500}>
                    <Pie
                        data={regionList}
                        cx={290}
                        cy={300}
                        // isAnimationActive = {false}
                        // labelLine={false}
                        label
                        outerRadius={150}
                        dataKey="count"
                        fill="#8884d8"
                        name="Vùng"

                    >
                    {regionList.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                </PieChart>
            </div>
            </div>
        </div>
    );
}

export default SystemTKVD;