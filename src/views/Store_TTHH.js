import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_tthh.css";
import axios from 'axios';

const StoreTTHH = () => {
    const [OrderList, setOrderList] = useState([{"total_amount":'',"commission":'',"list_order":[]}]);
    const [store_id, setStore] = useState("");
    const [gt_date, setgtdate] = useState("");
    const [lt_date, setltdate] = useState("");

    const fetchOrderList = async () =>{
        try {
            const res = await axios(`http://dichothuecsharp.somee.com/api/static/store`,
            {
                method: 'post',
                data:
                {
                    store_id: localStorage.getItem("current_Store"),
                    gt_date: gt_date,
                    lt_date: lt_date
                }
            }) 
            .then(res => {
                setOrderList(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
    }

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-store__design-description">
                        <h5 className="dichothue-store__design-heading">THỐNG KÊ TIỀN HOA HỒNG</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 store-tkddh_start_day">
                        Chọn ngày bắt đầu
                        <input 
                            type="date" 
                            className="store-tkddh__date-input store-tkddh__input-type"
                            value={gt_date}
                            onChange={(e)=> setgtdate(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 store-tkddh_end_day">
                        Chọn ngày kết thúc
                        <input 
                            type="date" 
                            className="store-tkddh__date-input store-tkddh__input-type"
                            value={lt_date}
                            onChange={(e)=> setltdate(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button onClick={()=>fetchOrderList()} type="submit" className="btn btn-secondary store-tkddh_submit_btn">Lập danh sách</button>

                <div className="row store_tkddh-store-list-title">
                    <div className="col-4">
                        <span className="store_tkddh-store-list-item">
                            Mã đơn hàng
                        </span>
                    </div>
                    <div className="col-4">
                        <span className="store_tkddh-store-list-item">
                            Tổng tiền mặt hàng
                        </span>
                    </div>
                    <div className="col-4">
                        <span className="store_tkddh-store-list-item">
                            Tổng tiền đơn hàng
                        </span>
                    </div>
                </div>
                {OrderList.map(storelist => {
                    return (
                    <>
                        {storelist.list_order.map(listorder => {
                            return(
                                <div class="row system_tkddh-store-list">
                                    <div class="col-4">
                                        <span class="system_tkddh-store-list-item">
                                            {listorder.id.substring(0,10).toUpperCase()}
                                        </span>
                                    </div>
                                    <div class="col-4">
                                        <span class="system_tkddh-store-list-item">
                                            {listorder.total_amount}đ
                                        </span>
                                    </div>
                                    <div class="col-4">
                                        <span class="system_tkddh-store-list-item">
                                            {listorder.total}đ
                                        </span>
                                    </div>
                                </div>
                        )})}
                    </>
                )})}
                
                <div className="row">
                    <div className="col-5">
                        {OrderList.map(storelist => {
                        return (
                        <>
                            <div className="wrap__tthh-body-right">
                                <span className="tthh-body__summary-title">Tổng kết các đơn hàng</span>
                                <div className="tthh-body__total">
                                    <div className="tthh-body__total-price-text-default">Tổng cộng tiền đơn hàng</div>
                                    <div className="tthh_body__total-price">{storelist.total_amount}đ</div>
                                </div>
                                <div className="tthh-body__total">
                                    <div className="tthh-body__total-price-text-default">Tổng cộng tiền hoa hồng</div>
                                    <div className="tthh_body__total-price">{storelist.commission}đ</div>
                                </div>
                            </div>
                        </>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreTTHH;