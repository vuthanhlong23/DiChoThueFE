import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/system_tkddh.css";
import axios from 'axios';

const SystemTTHH = () => {
    const [StoreList, setStoreList] = useState([]);
    const [OrderList, setOrderList] = useState([{"total_amount":'',"commission":'',"list_order":[]}]);
    const [store_id, setStore] = useState("");
    const [gt_date, setgtdate] = useState("");
    const [lt_date, setltdate] = useState("");
    let history = useHistory();
    useEffect(() => {
        const fetchStoreList = async () =>{
            try {
                const res = await axios.get(`http://dichothuecsharp.somee.com/api/store/list`) 
                                        .then(res => {
                                            setStoreList(res.data);
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        }
        fetchStoreList();
    }, [])

    const fetchOrderList = async () =>{
        try {
            const res = await axios(`http://dichothuecsharp.somee.com/api/static/store`,
            {
                method: 'post',
                data:
                {
                    store_id: store_id,
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
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">7. TÍNH TIỀN HOA HỒNG</h5>
                    </div>
                </div>
                <div className="row">
                    <select value={store_id} onChange={(e)=> setStore(e.target.value)} className="form-select" aria-label="Default select example">
                        <option selected>Chọn cửa hàng</option>
                        {StoreList.map(storelist => {
                        return (
                            <option value={storelist.id}>{storelist.store_name} ({storelist.address})</option>
                        )})}
                    </select>
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
                <button onClick={(e)=> fetchOrderList()} type="submit" className="btn btn-secondary system-tkddh_submit_btn">Thực hiện tính tiền</button>

                <div className="row system_tkddh-store-list-title">
                    <div className="col-4">
                        <span className="system_tkddh-store-list-item">
                            Mã đơn hàng
                        </span>
                    </div>
                    <div className="col-4">
                        <span className="system_tkddh-store-list-item">
                            Tổng tiền mặt hàng
                        </span>
                    </div>
                    <div className="col-4">
                        <span className="system_tkddh-store-list-item">
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
                                            {listorder.total_amount}
                                        </span>
                                    </div>
                                    <div class="col-4">
                                        <span class="system_tkddh-store-list-item">
                                            {listorder.total}
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
                                    <div className="tthh_body__total-price">{storelist.total_amount}</div>
                                </div>
                                <div className="tthh-body__total">
                                    <div className="tthh-body__total-price-text-default">Tổng cộng tiền hoa hồng</div>
                                    <div className="tthh_body__total-price">{storelist.commission}</div>
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

export default SystemTTHH;