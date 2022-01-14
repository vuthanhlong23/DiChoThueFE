import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/store_qldh.css";
import "../assets/stylesheets/system_tkddh.css";
import axios from 'axios';

const StoreQLDH = () => {
    const [OrderList, setOrderList] = useState([{"total_amount":{},"commission":{},"list_order":[]}]);
    const [gt_date, setgtdate] = useState("");
    const [lt_date, setltdate] = useState("");
    let history = useHistory()

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


    function setOrderID(id){
        localStorage.setItem("store_order_id",id)
        history.push("/store/qldh/ctddh")
    }

    return (
        <div className="container">
            <div className="grid">
        
                <div className="row">
                <div className="dichothue-store_qldh__design-description">
                    <h5 className="dichothue-store_qldh__design-heading">ĐƠN HÀNG CỦA CỬA HÀNG</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-5 system-tkddh_start_day">
                    Chọn ngày bắt đầu
                    <input 
                        type="date" 
                        className="system-tkddh__date-input system-tkddh__input-type"
                        value={gt_date}
                        onChange={(e)=> setgtdate(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-5 system-tkddh_end_day">
                    Chọn ngày kết thúc
                    <input 
                        type="date" 
                        className="system-tkddh__date-input system-tkddh__input-type"
                        value={lt_date}
                        onChange={(e)=> setltdate(e.target.value)}
                        required
                    />
                </div>
            </div>
            <button onClick={()=> fetchOrderList()} type='submit' className="btn btn-secondary system-tkddh_submit_btn">Thực hiện</button>
            <div className="row align-items-start store_qldh_booking_history_info">
                <div className="col-2">
                    Mã đơn hàng
                </div>
                <div className="col-2">
                    Ngày tạo 
                </div>
                <div className="col-2">
                    Tổng tiền
                </div>
                <div className="col-3">
                    Trạng thái đơn hàng
                </div>
                <div className="col-2">
                    Thao tác
                </div>
            </div>
            {OrderList.map(storelist => {
                    return (
                    <>
                        {storelist.list_order.map(listorder => {
                            return(
                                <div className="row align-items-start store_qldh_booking_history_info store_qldh_booking_history_info-items">
                                    <Link onClick={()=>setOrderID(listorder.id)} className="store_qldh_booking_history-item_id_order col-2 store_qldh_booking_history-item">
                                        {listorder.id.substring(0,10).toUpperCase()}
                                    </Link>
                                    <div className="col-2 store_qldh_booking_history-item">
                                        {listorder.order_date.substring(0,10).toUpperCase()}
                                    </div>
                                    <div className="col-2 store_qldh_booking_history-item">
                                        {listorder.total}đ
                                    </div>
                                    <div className="col-3 store_qldh_booking_history-item">
                                        {listorder.status}
                                    </div>
                                    <div className="col-2 store_qldh_booking_history-item">
                                        <button onClick={()=>setOrderID(listorder.id)} type="button" className="store_qldh_booking_history-item_cancel_btn btn btn btn-secondary ">Xem chi tiết đơn hàng</button>
                                    </div>
                                </div>
                        )})}
                    </>
                )})}
        </div>
    </div>
    );
}

export default StoreQLDH;